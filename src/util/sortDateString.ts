export function sortDateString(a: string, b: string) {
    const aDate = a === "Present" ? new Date() : new Date(a)
    const bDate = b === "Present" ? new Date() : new Date(b)

    return bDate.valueOf() - aDate.valueOf()
}