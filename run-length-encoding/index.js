// test
let string = "AAAAAAAAAAAAABBCCCCDD"
let answer = "9A4A2B4C2D"
if (runLengthEncoding(string) === answer) {
    console.log('passed')
} else {
    console.log('failed')
}

// lossless without 'long runs' of 10, with 0(n)
function runLengthEncoding(string) {
    // create list 'chars' to store result; no concatenating with a string as it isn't as efficient
    let chars = []
    // create variable 'length' to keep track of runs starting at 1
    let length = 1
    // loop through string starting at second character
    for (let i = 1; i < string.length; i++) {
        // if character is not the same as previous OR length is equal to 9
        if (string[i] !== string[i - 1] || length === 9) {
            // add 'length' to 'chars' + previous 'char'
            chars.push(length, string[i - 1])
            // reset length to 0 as next line will increment it by one regardless, 
            // handling both cases of inside this conditional and outside 
            // of the conditional for characters that are the same
            length = 0
        }
        // increment 'length', as character is the same as previous 
        length++
    }
    // handle last element by adding 'length' + 'char' to 'chars'
    chars.push(length, string[string.length - 1])
    // join 'chars' into string and return
    return chars.join('')
}