// test
let str = "hello"
let answer = "olleh"
if (reverse(str) === answer) {
    console.log('passed')
} else {
    console.log('failed')
}

// return a reversed string 

// solved with recursion
function reverse(str) {
    // base case
    if (str.length == 1) {
        return str
    } else {
        // recurse, flipping respective characters via native substring method
        return reverse(str.substring(1)) + str[0]
    }
}

// // solved with reverse() 
// function reverse(str) {
//     // return str.split('').reverse().join('')
//     // // solve with for loop 
//     let reversed = ''
//     // for (let i = 0; i < str.length; i++){
//     //     reversed = str[i] + reversed
//     for (let character of str) {
//         reversed = character + reversed
//         // debugger
//     }
//     return reversed
//     // console.log(reversed)

//     // solved with reduce 
//     //     return str.split('').reduce((reversed, character) => character + reversed, '')
// }

reverse(str)