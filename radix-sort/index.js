//input
let arr = [8, 5, 2, 9, 5, 6, 3]
let answer = [2, 3, 5, 5, 6, 8, 9]
if (radixSort(arr).toString() === answer.toString()) {
    console.log('passed')
} else {
    console.log('failed')
}

// radix-sort an array of integers

function radixSort(nums) {
    // define a function with a list of numbers
    // determine how many digits the largest numbers has for respective loops
    let maxDigitCount = mostDigits(nums)
    // for each loop, create buckets for each digit (0 to 9)
    for (let k = 0; k < maxDigitCount; k++) {
        let digitBuckets = Array.from({ length: 10 }, () => [])
        // place each number in it's respective bucket based on it's kth digit
        for (let i = 0; i < nums.length; i++) {
            digitBuckets[getDigit(nums[i], k)].push(nums[i])
        }
        // replace existing array with values from buckets
        nums = [].concat(...digitBuckets)
    }
    // return new array
    return nums
}

// create helper functions
function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10
}
function digitCount(num) {
    if (num === 0) return 1
    return Math.floor(Math.log10(Math.abs(num))) + 1
}
function mostDigits(nums) {
    let maxDigits = 0
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]))
    }
    return maxDigits
}