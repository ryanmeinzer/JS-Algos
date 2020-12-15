const data = require('./data.json')

// test
// let string1 = 'anagram'
// let string2 = 'nagaram'
let string1 = data.jsonData[0].string1
let string2 = data.jsonData[1].string2
let answer = true
if (validAnagram(string1, string2) === answer) {
    console.log('passed')
} else {
    console.log('failed')
}

// evaluate if two strings are anagrams of each other

// solved with regex and sort
function validAnagram(string1, string2) {
    return string1.replace(/[^\w]/g, '').toLowerCase().split('').sort().join() === string2.replace(/[^\w]/g, '').toLowerCase().split('').sort().join()
}

// // solved using character maps comparison
// function validAnagram(string1, string2) {
//     // create 'obj1'
//     let obj1 = {}
//     // loop over 'string1', assigning each 'char' to key of 'obj1' and 'count' as the frequency of the 'char' to be the value of 'obj1' 
//     for (let char of string1) {
//         // assign obj1[char] = obj[char] + 1 (if it exists) or 1 if it doesn't exist
//         obj1[char] = obj1[char] + 1 || 1
//     }
//     // repeat for 'obj2'
//     let obj2 = {}
//     for (let char of string2) {
//         obj2[char] = obj2[char] + 1 || 1
//     }
//     // if the length of the keys of obj1 !== obj2, return false
//     if (Object.keys(obj1).length !== Object.keys(obj2).length) {
//         return false
//     }
//     // else, loop through obj1's keys and evaluate against obj2's keys to determine if there are any unequal and if so, return false
//     for (let key in obj1) {
//         if (obj1[key] !== obj2[key]) {
//             return false
//         }
//         // else, return true
//         return true
//     }
// }