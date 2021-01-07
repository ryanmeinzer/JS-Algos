// test
let arrayOne = [-1, 5, 10, 20, 28, 3]
let arrayTwo = [26, 134, 135, 15, 17]
let answer = [28, 26]
if (smallestDifference(arrayOne, arrayTwo).toString() === answer.toString()) {
    console.log('passed')
} else {
    console.log('failed')
}

// return smallest absolute difference of two numbers of two arrays

function smallestDifference(arrayOne, arrayTwo) {
    // sort both arrays
    arrayOne.sort((a, b) => a - b)
    arrayTwo.sort((a, b) => a - b)
    // create pointer index variables for both arrays
    let idxOne = 0
    let idxTwo = 0
    // create 'smallest' variable for absolute difference
    let smallestDiff = Infinity
    // create 'currentDiff' variable
    let currentDiff = Infinity
    // create 'smallestPair' array for result
    let smallestPair = []
    // loop through both arrays for comparisons
    while (idxOne < arrayOne.length && idxTwo < arrayTwo.length) {
        // create 'firstNum' and 'secondNum' variables
        let firstNum = arrayOne[idxOne]
        let secondNum = arrayTwo[idxTwo]
        if (firstNum < secondNum) {
            currentDiff = secondNum - firstNum
            // increment idxOne
            idxOne++
        } else if (firstNum > secondNum) {
            currentDiff = firstNum - secondNum
            // increment idxTwo
            idxTwo++
        } else {
            // if numbers are equal, return them as result
            return [firstNum, secondNum]
        }
        if (smallestDiff > currentDiff) {
            smallestDiff = currentDiff
            smallestPair = [firstNum, secondNum]
        }
    }
    return smallestPair
}

