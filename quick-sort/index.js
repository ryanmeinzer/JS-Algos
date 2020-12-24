//input
let arr = [8, 5, 2, 9, 5, 6, 3]
let answer = [2, 3, 5, 5, 6, 8, 9]
if (quickSort(arr).toString() === answer.toString()) {
    console.log(quickSort(arr))
    console.log('passed')
} else {
    console.log('failed')
}

// quick-sort an array

function quickSort(arr, left = 0, right = arr.length - 1) {
    // create base case
    if (left < right) {
        // call pivot helper on the array
        let pivotIndex = pivot(arr, left, right)
        // recursively call quickSort on lefts and rights of index
        quickSort(arr, left, pivotIndex - 1)
        quickSort(arr, pivotIndex + 1, right)
    }
    return arr
}

function pivot(arr, start = 0, end = arr.length + 1) {
    // create a start index and an end index for the pivot
    // use pivot as start of array
    let pivot = arr[start]
    // store current pivot index in a variable
    let swapIndex = start
    // create swap function
    function swap(array, i, j) {
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
    // loop through array 
    for (let i = start; i < arr.length; i++) {
        // if pivot is greater than current element, increment pivot index variable and swap the current element with the same element at the pivot index
        if (pivot > arr[i]) {
            swapIndex++
            swap(arr, swapIndex, i)
        }
    }

    // swap the starting element (ie the pivot) with the pivot index
    swap(arr, start, swapIndex)
    // return pivot index
    return swapIndex
}


