
import { test, expect } from "@jest/globals";
import { normalizeURL } from "./crawl.js";

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