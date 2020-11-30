// test
let string = "xyz"
let key = 2
let answer = "zab"
if (caesarCipherEncryptor(string, key) === answer) {
    console.log('passed')
} else {
    console.log('failed')
} 

// given alphabetic string, return new string with each character shifted by key integer
// solved with unicode values and modulo with 0(n)
function caesarCipherEncryptor(string, key) {
    // create new array 'result' to ultimately join into resultant string
    let result = []
    // take key and modulo it by 26 for 'newKey' to prevent out of bounds edge-cases
    let newKey = key % 26
    // for char of string
    for (let letter of string) {
        // use 'newLetter' helper function to get new letters then push into 'result'
        result.push(newLetter(letter, newKey))
    }
    // return joined resultant string
    return result.join('')
}
// helper function (see above)
function newLetter(letter, key) {
    // use Unicode value + key to get 'newLetterUni' Unicode value
    let newLetterUni = letter.charCodeAt() + key
    // if 'newLetterUni' is less than z's Unicode value, return it's converted letter 
    if (newLetterUni <= 'z'.charCodeAt()) {
        return String.fromCharCode(newLetterUni)
        // else, to wrap-around alphabet (z to a), return it's converted letter by calculating (a's unicode value - 1 + newLetterUni % z's unicode value)
    } else {
        return String.fromCharCode('a'.charCodeAt() - 1 + newLetterUni % 'z'.charCodeAt())
    }
}