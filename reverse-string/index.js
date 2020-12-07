// test
let str = "hello"
let answer = "olleh"
if (reverse(str) === answer) {
    console.log('passed')
} else {
    console.log('failed')
}

// return a reversed string

function reverse(str) {
    // solved with reverse() 
    // return str.split('').reverse().join('')

    // // solve with for loop 
    let reversed = ''
    // for (let i = 0; i < str.length; i++){
    //     reversed = str[i] + reversed
    for (let character of str) {
        reversed = character + reversed
        // debugger
    }
    return reversed
    // console.log(reversed)

    // solved with reduce 
    //     return str.split('').reduce((reversed, character) => character + reversed, '')

}