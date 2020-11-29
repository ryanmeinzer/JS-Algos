//input
let array = [8, 5, 2, 9, 5, 6, 3]
let answer = [2, 3, 5, 5, 6, 8, 9]

if (insertionSort(array).toString() === answer.toString()) {
    console.log('passed')
} else {
    console.log('failed')
}

// solved in 0(n^2)
function insertionSort(array) {
    // initialize loop for length of array, starting at second index
    for (let i = 1; i < array.length; i++) {
        // set 'j' variable equal to i index
        let j = i
        // while current index of j > 0 (after the beginning of the array) AND while the value of j is less than the value of the element to the left/front of it
        while (j > 0 && array[j] < array[j - 1]) {
            // swap the two elements at the indexes
            let temp = array[j]
            array[j] = array[j - 1]
            array[j - 1] = temp
            // decrement j by one
            j--
        }
    }
    // return array
    return array
}