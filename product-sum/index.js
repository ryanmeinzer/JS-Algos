// input
array = [5, 2, [7, -1], 3, [6, [-13, 8], 4]]

// test solution = 12
if (productSum(array, multiplier = 1) === 12) {
    console.log('passed') 
} else {
    console.log('failed')
} 

// initialize with a multipler variable set to 1
function productSum(array, multiplier = 1) {
    // create sum variable for each recursion set to 0
    let sum = 0
    // loop through each element of the array
    for (let element of array) {
        // if element is an array, recurse productSum()
        if (Array.isArray(element)) {
            // incremenet the multipler by one for each recursion
            sum += productSum(element, multiplier + 1)
        }
        // else if element is just a number, add it to the sum
        else sum += element
    }
    // add the recursed returned value to the sum
    return sum * multiplier
}