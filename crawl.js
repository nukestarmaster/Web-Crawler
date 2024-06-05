function normalizeURL(url) {
    console.log(url)
    const myURL = new URL(url);
    if (myURL.pathname.endsWith('/')) {
        return myURL.host + myURL.pathname.slice(0, -1)
    } 
    return myURL.host + myURL.pathname
}

export { normalizeURL };
