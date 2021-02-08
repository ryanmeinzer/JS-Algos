//input
let str = 'abctacocatdcba'
let answer = 'tacocat'

// test solution = [11, -1]
if (findLongestPalindrome(str) === answer) {
    console.log('passed')
} else {
    console.log('failed')
}

// find the longest substring palindrome in a string

function findLongestPalindrome(str) {
    // loop through string
    for (let a = str.length - 1; a >= 0; a--) {
        let i = 0, b = a
        // while i < str.length
        while (b < str.length) {
            // let substr = i, k+1
            let substr = str.substring(i, b + 1)
            // if isPalindrome(substr), return substr
            if (isPalindrome(substr) && substr.length > 2) return substr
            // i++, b++
            i++, b++
        }
    }
    // else return 'none'
    return 'none'
}

// isPalindrome helper function
function isPalindrome(str) {
    // l = 0, r = str.length - 1
    let l = 0, r = str.length - 1
    // while l < r
    while (l < r) {
        // if str[l] !== str[r] return false
        if (str[l] !== str[r]) return false
        // l++, r--
        l++, r--
    }
    // return true
    return true
}

findLongestPalindrome(str)