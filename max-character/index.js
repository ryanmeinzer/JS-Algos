let str = 'abcccccc d34555 xbb e'
let answer = 'c'
if (maxChar(str) === answer) {
    console.log('passed')
} else {
    console.log('failed')
}

// return the most common character of a string 

// solved with character mapping in an object
function maxChar(str) {
    // convert to mapped object with keys as characters and values as counts
    let obj = {}
    let max = 0
    let maxChar = ''
    for (let char of str){
        // using if else statement
        // if (obj[char]) {
        //     obj[char]++
        // } else {
        //     obj[char] = 1
        // }
        // using ternary
        // obj[char] ? obj[char] = obj[char] + 1 : obj[char] = 1
        // using boolean logic
        obj[char] = obj[char] + 1 || 1
    }
    // loop through object (with for in, cannot use for of) to determine maxChar
    for (let char in obj) {
        // if (obj[char] > max) {
        //     max = obj[char]
        //     maxChar = char
        // }
        obj[char] > max ? (max = obj[char], maxChar = char) : ''
    }
    return maxChar
}