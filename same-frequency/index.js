// test
let arr1 = [1,2,3]
let arr2 = [4,1,9]
let answer = true
if (same(arr1, arr2) === answer) {
    console.log('passed')
} else {
    console.log('failed')
}

// given two arrays, evaluate if every value in the first array has it's corresponding value squared in the second array, with the same frequency 

// solved without nested loops in 0(n)
function same(arr1, arr2) {
    // if the two arrays have different lengths, return false
    if (arr1.length !== arr2.length) {
        return false
    }
    // create two frequency counter objects for each array
    let arr1Counter = {}
    let arr2Counter = {}
    // loop over both arrays to count the frequency of each value
    for (let int of arr1) {
        // if doesn't exist, make 0 then add 1; if exists, add 1
        arr1Counter[int] = (arr1Counter[int] || 0) + 1
    }
    for (let int of arr2) {
        // if doesn't exist, make 0 then add 1; if exists, add 1
        arr2Counter[int] = (arr2Counter[int] || 0) + 1
    }
    // loop over arr1Counter
    for (let key in arr1Counter) {
        // return false if any key is not in arr2Counter
        if (!(key ** 2 in arr2Counter)) {
            return false 
        }
        // return false if any value is not the same in arr2Counter
        if (arr1Counter[key] !== arr2Counter[key ** 2]) {
            return false
        }
    }
    return true
}