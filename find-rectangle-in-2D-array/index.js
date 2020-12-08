// test
let image1 = [
  [1, 1, 1, 1, 1, 1, 1], 
  [1, 1, 1, 1, 1, 1, 1], 
  [1, 1, 1, 0, 0, 0, 1], 
  [1, 1, 1, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1],
]
let answer = [[2, 3], [3, 5]]
if (findRec(image1).toString() === answer.toString()) {
  console.log('passed')
} else { 
  console.log('failed')
}

// Given a 2D array of 1s and 0s, return the coordinate of the rectangle of 0s

// USSR
// Understand - 
// reword - given a 2D array of 1s and 0s, return the coordinate of the rectangle of 0s
// inputs - 2D array of arrays of integers
// outputs - 2D array of integers of coordinates
// examples - for image1 above, // (5, 3), (6, 4)
    // for image1, [ [ 2, 3 ], [ 3, 5 ] ]
// Sudo Chop Stop - 
// Solve - 
// create 'findRec' function with 'image1' input
function findRec(image1) {
    // create variable for the rows with the length of the samples
    let rows = image1.length
    // same for columns
    let columns = image1[0].length
    // create result array
    let result = []
    // loop through with standard loop rows to find 0s
    for (let row = 0; row < rows; row++) {
        // loop through with standard loop columns to find 0s
        for (let column = 0; column < columns; column++) {
            // find all 0 coordinate of rectangle
            if (image1[row][column] == 0)
                // push all 0 coordinates into results array
                result.push([row, column])
        }
    }
    // return rectangle's top-left coordinate and bottom-right coordinate
    return [result[0], result[result.length - 1]]
} 

// Refactor - 
