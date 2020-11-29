//input
string = 'abcdcba'
answer = true

// test solution = [11, -1]
if (isPalindrome(string) === answer) {
    console.log('passed')
} else {
    console.log('failed')
}

function isPalindrome(string) {
    // solved with reverse
    let reversed = string.split('').reverse().join('')
    return string === reversed

    // solved with loop 
    // let reversed = ''
    //     for (let character of string){
    //         reversed = character + reversed
    //     }
    //     return string === reversed

    // solved with every
    // return string.split('').every((char, i) => {
    //     return char === string[string.length - i - 1]
    // })
}