// test
let sentence = "How much wood could a wood-chuck chuck, if 345 wood chucks could chuck wood?"
let answer = 13
if (howMany(sentence) === answer) {
    console.log('passed')
} else {
    console.log('failed')
}
// console.log(howMany(sentence))

// // take three (solved) with simpler regex
// function howMany(sentence) {
//     // USSR
//     // create results variable to hold result
//     // globally counting only words (excluding numbers), including hyphen
//     let result = sentence.match(/[a-z'-]+/gi)
//     // return result if not null and 0 if null
//     return result ? result.length : 0
// }

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

// take one (now solved) - brute force multiple loops (terrible runtime) without regex
function howMany(sentence) {
     // My USSR Method
     // Understand
         // reword - given a sentence, return how many words are separated by a space
         // inputs - a string
         // outputs - an integer
         // examples - input - 'How many eggs are there in a half-dozon, 13?' output - 7 
     // Sudo / Chop
         // using regex or not? TBD
         // create a counter variable 'count' set to 0
        let count = 0
         // create a validation array, 'validateArr' with a - z
        let validateArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
        // split sentence
        let splitString = sentence.split(' ')
        // console.log(splitString)
         // create a checker array 'checkArr'
        let checkArr = []
        // loop over splitString and enter each element into checkArr
        for (let element of splitString) {
            checkArr.push(element)
        }
        // console.log(checkArr)
        // loop through 'checkArr', evaluating each element to see if it includes 'validateArr'
        for (let element of checkArr) {
            // loop through every character of element to determine if it includes a - z
            for (let char of element) {
                if (validateArr.includes(char)) {
                    count++
                    break
                }
            }
        }
        // return 'count'
        return count
// Solve / Skip
// Refactor
}