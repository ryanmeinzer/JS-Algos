// test
let str = 'Oh hello there!'
let subStr = 'the'
let answer = true
if (substringSearch(str, subStr) === answer) {
    console.log('passed')
} else {
    console.log('failed')
}

// evaluate if a substring is within a string

function substringSearch(str, subStr) {
    // loop over str
    for (let i = 0; i < str.length; i++) {
        // loop over subStr
        for (let j = 0; j < subStr.length; j++) {
            // look ahead, if characters don't match, break out of inner loop
            if (subStr[j] !== str[i + j]) break
            // if characters match, keep going
            // if you complete inner loop and find a match, return true
            if (j === subStr.length - 1) return true
        }
    }
    // return false if not found
    return false
}