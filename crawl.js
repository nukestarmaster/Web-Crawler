import { JSDOM } from 'jsdom'

function normalizeURL(url, baseURL) {
    try {
        const myURL = new URL(url, 'https://' + baseURL);
        return myURL.protocol + '//' + myURL.host + myURL.pathname
    } catch (error) {
        console.log(`At URL: ${url}`)
        console.log(error)
    }
}

function getURLsFromHTML(htmlBody, baseURL) {
    const dom = new JSDOM(htmlBody)
    const list = dom.window.document.querySelectorAll('a')
    const set = new Set()
    for (let n of list) {
        let href = normalizeURL(n.href, baseURL)
        set.add(href)
    }
    return set
}

async function fetchURL(currentURL) {
    let response
    try {
        response = await fetch(currentURL);
    } catch (error) {
        throw error
    }
    if (response.status >= 400) {
        throw `Error ${response.status} at ${currentURL}`;
        return
    }
    if (response.headers['content-type'] /= 'text/html') {
        throw `Error content type at ${currentURL} is ${response.header['Content_Type']} not HTML`;
        return
    }
    return response;
}


async function crawl(baseURL, currentURL = baseURL, pages = {}) {
    var myURL = new URL(normalizeURL(currentURL, baseURL))
    if (myURL.host != baseURL.host) {
        return pages
    }
    if (myURL in pages) {
        pages[myURL] += 1
    } else {
        console.log(`checking ${myURL}`)
        let body
        pages[myURL] = 1
        try { 
            const response = await fetchURL(myURL)
            body = await response.text()
        } catch (error) {
            console.log(`At ${myURL}`)
            console.log(error)
            return pages
        }
        const URLs = getURLsFromHTML(body, baseURL.host)
        for (let u of URLs) {
            try {
                pages = await crawl(baseURL, u, pages)
            } catch (error) {
                console.log(error)
            }
        }
    }
    return pages
}

export {normalizeURL, getURLsFromHTML, crawl};
    
