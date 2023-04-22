export function sortDate(a: string, b: string) {
    const aParts = a.split("-");
    const bParts = b.split("-");
    const aDate = new Date(
        parseInt(aParts[2]),
        parseInt(aParts[1]) - 1,
        parseInt(aParts[0])
    );
    const bDate = new Date(
        parseInt(bParts[2]),
        parseInt(bParts[1]) - 1,
        parseInt(bParts[0])
    );
    return bDate.valueOf() - aDate.valueOf();
}