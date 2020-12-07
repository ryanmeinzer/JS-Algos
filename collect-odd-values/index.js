//input
let arr = [1, 2, 3, 4, 5]
let answer = [1, 3, 5]

// test solution = [11, -1]
if (collectOddValues(arr).toString() === answer.toString()) {
    console.log('passed')
} else {
    console.log('failed')
}

// return all odd values of an array

// solved with pure recursion
function collectOddValues(arr) {
    let newArr = []
    // base case and exit
    if (arr.length === 0) {
        return newArr
    }
    // if first value of array is odd, push into newArr
    if (arr[0] % 2 !== 0) {
        newArr.push(arr[0])
    }
    // assign newArr to first value of array concatenated with the rest of the recursed 
    newArr = newArr.concat(collectOddValues(arr.slice(1)))
    // recurse
    return newArr
}

// recursion mapped out
// collectOddValues([1,2,3,4,5])
//     [1].concat(collectOddValues([2,3,4,5]))
//         [].concat(collectOddValues([3,4,5]))
//             [3].concat(collectOddValues([4,5]))
//                 [].concat(collectOddValues([5]))
//                     [5].concat(collectOddValues([]))
//                         []