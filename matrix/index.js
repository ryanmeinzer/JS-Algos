let n = 3
let answer = [[1, 2, 3], [8, 9, 4], [7, 6, 5]]
console.log(answer)
console.log(matrix(n))
if (JSON.stringify(matrix(n)) === JSON.stringify(answer)) {
    console.log('passed')
} else {
    console.log('failed')
}

// return a NxN spiral matrix of n 

// solved with many loops
function matrix(n) {
    // create and empty 'results' array
    let results = []
    for (let i = 0; i < n; i++) {
        results.push([])
    }
    // create a counter variable that starts at one
    let counter = 1
    // create start and end rows and columns
    let startRow = 0
    let startColumn = 0
    let endRow = n - 1
    let endColumn = n - 1
    // if start column <= end column AND start row <= end row
    while (startColumn <= endColumn && startRow <= endRow) {
        // loop from start column to end column for top row of matrix
        for (i = startColumn; i <= endColumn; i++) {
            // assign counter variable at results[start row][i]
            results[startRow][i] = counter
            // increment counter
            counter++
        }
        // increment start row
        startRow++
        // loop from start row to end row for right column of matrix
        for (i = startRow; i <= endRow; i++) {
            // assign counter variable at results[i][end column]
            results[i][endColumn] = counter
            // increment counter
            counter++
        }
        // decrement end column
        endColumn--
        // repeat for bottom row
        for (let i = endColumn; i >= startColumn; i--) {
            results[endRow][i] = counter
            counter++
        }
        endRow--
        // repeat for start column
        for (let i = endRow; i >= startRow; i--) {
            results[i][startColumn] = counter
            counter++
        }
        startColumn++
    }
    return results
}