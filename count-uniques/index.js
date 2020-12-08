// test
let array = [1,1,2,3,3,4,5,5,7,8,10]
let answer = 8
if (countUniqueValues(array) === answer) {
    console.log('passed')
} else {
    console.log('failed')
}

// count the unique values in a sorted array

// solved with two pointers with 0(n)
function countUniqueValues(array) {
    // use two pointers 'i' and 'j' starting at first two elements of array, with i starting at index of 0 and j starting at index of 1
    let i = 0
    for (let j = 1; j < array.length; j++) {
        // if index of i is different than index of j, increment i and replace index of i with index of j
        if (array[i] !== array[j]) {
            i++
            array[i] = array[j]
        }
        // else increment j if the same with loop
    }
    // index of i + 1 is the number of unique elements
    return i + 1
}