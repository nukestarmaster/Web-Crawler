import { readFileSync } from 'node:fs'
import { test, expect } from "@jest/globals";
import { normalizeURL, getURLsFromHTML } from "./crawl.js";

const html0 = readFileSync('test.html', "utf-8")


test('test 1', () => {
    expect(normalizeURL('https://blog.boot.dev/path/')).toBe('blog.boot.dev/path')
})
test('test 2', () => {
    expect(normalizeURL('https://blog.boot.dev/path')).toBe('blog.boot.dev/path')
})
test('test 3', () => {
    expect(normalizeURL('http://blog.boot.dev/path/')).toBe('blog.boot.dev/path')
})
test('test 4', () => {
    expect(normalizeURL('http://blog.boot.dev/path')).toBe('blog.boot.dev/path')
})
test('test 4', () => {
    expect(getURLsFromHTML(html0, 'https://www.google.com')).toEqual(new Set(['www.google.com/setprefs', 'www.google.com/preferences', 'www.google.com/advanced_search', 'myactivity.google.com/privacyadvisor/search', 'myactivity.google.com/product/search', 'support.google.com/websearch', 'about.google', 'accounts.google.com/SignOutOptions', 'google.com/search/howsearchworks', 'mail.google.com/mail/&ogbl', 'policies.google.com/privacy', 'policies.google.com/terms', 'store.google.com/CA', 'www.google.ca/intl/en/about/products', 'www.google.com/imghp', 'www.google.com/intl/en_ca/ads', 'www.google.com/services', 'www.google.com/url']))
})
