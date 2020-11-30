// test
let sentence = "How much wood could a wood-chuck chuck, if 345 wood chucks could chuck wood?"
let answer = 13
if (howMany(sentence) === answer) {
    console.log('passed')
} else {
    console.log('failed')
}
console.log(howMany(sentence))

// take three with simpler regex
function howMany(sentence) {
    // USSR
    // create results variable to hold result
    // globally counting only words (excluding numbers), including hyphen
    let result = sentence.match(/[a-z'-]+/gi)
    // return result if not null and 0 if null
    return result ? result.length : 0
}

// // take two with just regex
// function howMany(sentence) {
//     // create counter variable
//     let counter = 0
//     // create 'checkArr' array for all elements of sentence split by a space
//     let checkArr = [sentence.split(' ').join()]
//     console.log(checkArr)
//     // loop through all elements of 'checkArr'
//     for (let i = 0; i < checkArr.length - 1; i++) {
//         // for (let i of checkArr){
//         // determine if the element has an alphanumeric character inside of it
//         if (i.match(/[a-z]/gi)) {
//             // if it does, increment counter
//             counter++
//         }
//     }
//     // return counter
//     return counter
// }