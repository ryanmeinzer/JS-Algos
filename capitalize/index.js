const fs = require('fs')

// test
// let str = 'Look here, this is a capitalized string.'
const myPromise = new Promise(function (resolve, reject) {
    fs.readFile('./data.json', (err, data) => {
        if (err) reject(err + ' bad fail')
        resolve(data)
    })
})
myPromise
    // .then and .catch need a callback/function
    // 'data' and 'err' can be named anything, are referencing 'resolve' and 'reject'
    .then(data => convertToObject(data))
    .catch(err => console.log('fail!', err))
function convertToObject(data) {
    let myObj = JSON.parse(data)
    // capitalize(myObj.strings[0].string)
    let answer = 'Look Here, This Is A Capitalized String.'
    if (capitalize(myObj.strings[0].string) === answer) {
        console.log('passed')
    } else {
        console.log('failed')
    }
}

// return a string with each word capitalized 

// solved with loop, push and slice
function capitalize(str) {
    // create capitalized array
    let capitalizedArray = []
    // loop over array
    // split each word of string by space into an array
    for (let word of str.split(' ')) {
        // capitalize the first letter of each word of the array
        // push each word into capitalizedArray
        capitalizedArray.push(word[0].toUpperCase() + word.slice(1))
    }
    // join capitalized array back into a string
    // return joined string
    return capitalizedArray.join(' ')
}

// // solved with standard loop (not ideal IMO)
// function capitalize(str) {
//     // create an empty string 'result' with the first character capitalized
//     let result = str[0].toUpperCase()
//     // for each character in string
//     for (i = 1; i < str.length; i++) {
//         // if the character to the left is a space or the first character
//         if (str[i - 1] === ' ') {
//             // capitalize it and add to 'result'
//             result += str[i].toUpperCase()
//             // else add it to 'result'
//         } else {
//             result += str[i]
//         }
//     }
//     // return result
//     return result
// }


// My USSR Approach
// Understand
    // reword - return each word of a string capitalized
    // inputs - string, characters
    // outputs - string
    // examples - capitalize('here's An example) --> 'Here's An Example'
// Sudo Chop
// Solve / Skip
// // <-- START UNCOMMENT
// // split each word of string by space into an array
// let splitString = str.split(' ')
// // create capitalized array
// let capitalizedArray = []
// // loop over array
// for (let word of splitString) {
//     // capitalize the first letter of each word of the array
//     word = word[0].toUpperCase() + word.slice(1)
//     // push each word into capitalizedArray
//     capitalizedArray.push(word)
// }
// // join capitalized array back into a string
// let joinedString = capitalizedArray.join(' ')
// // return joined string
// return joinedString
// // END UNCOMMENT -->