import { crawl } from "./crawl.js";
import { printReport } from "./report.js"

async function main() {
    const args = process.argv
    args.shift()
    args.shift()
    if (args.length < 1) {
        throw 'Not enough arguments, given 0, expected 1'
    }
    if (args.length > 1) {
        throw `Too many arguments, given ${args.length}, expected 1`
    }
    const baseURL = new URL(args[0])
    console.log(`Starting crawl with URL: ${baseURL}`)
    const output = await crawl(baseURL)
    printReport(output)
}

main()