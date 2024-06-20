function sortReport(report) {
    let sortedReport = Object.entries(report).sort((a, b) => b[1] - a[1])
    return sortedReport
}

function printReport(report) {
    report = sortReport(report)
    console.log('Report starting:')
    for (let r in report) {
        console.log(`Url: ${report[r][0]} linked ${report[r][1]} times`)
    }
}

export { printReport }