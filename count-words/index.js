// test
let sentence = "How much wood could a wood-chuck chuck, if 345 wood chucks could chuck wood?"
let answer = 13
if (howMany(sentence) === answer) {
    console.log('passed')
} else {
    console.log('failed')
}

// take two with just regex
function howMany(sentence) {
    // create counter variable
    let counter = 0
    // create 'checkArr' array for all elements of sentence split by a space
    let checkArr = [sentence.split(' ').join()]
    console.log(checkArr)
    // loop through all elements of 'checkArr'
    for (let i = 0; i < checkArr.length - 1; i++) {
        // for (let i of checkArr){
        // determine if the element has an alphanumeric character inside of it
        if (i.match(/[a-z]/gi)) {
            // if it does, increment counter
            counter++
        }
    }
    // return counter
    return counter
}