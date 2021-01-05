//input
let arr = [8, 5, 2, 9, 5, 6, 3]
let answer = [2, 3, 5, 5, 6, 8, 9]

// test solution = [11, -1]
if (mergeSort(arr).toString() === answer.toString()) {
    console.log('passed')
} else {
    console.log('failed')
}

// return a merge-sorted array from an array of integers 

// solved with recursion and helper method
function mergeSort(arr) {
    // make sure the array has more than one element in it to split
    if (arr.length === 1) {
        return arr
    }
    // determine center of array
    let center = Math.floor(arr.length / 2)
    // split the array into two then split those halves by using slice starting with the first index and slicing up to (but not including) the center
    let left = arr.slice(0, center)
    let right = arr.slice(center)
    // recursively call mergeSort() into each half
    // mergeSort(left)
    // mergeSort(right)
    // recursively call mergeSort() into each half AND recursively call merge() on both left and right single-element arrays, and if a single-element array (sorted) only has one value, it's returned for the respective value in merge() per the first if statement in mergeSort()
    return merge(mergeSort(left), mergeSort(right))
}

// helper method
function merge(left, right) {
    // create an empty 'results' array to merge two sorted arrays
    let results = []
    // while there are still elements in both the sorted 'left' and sorted 'right' arrays
    while (left.length && right.length) {
        // if the first element of the left-half array is less than the first element of the right-half array
        if (left[0] < right[0]) {
            // remove the first element element from the left-half array and insert it into the end of 'results'
            results.push(left.shift())
            // else remove the first element element from the right-half array and insert it into the end of 'results'
        } else {
            results.push(right.shift())
        }
    }
    // (exits loop) return the remaining element of either array after the 'results' with the spread operator, inserting all elements of 'results', along with all of the left and right arrays
    return [...results, ...left, ...right]
    // same as:
    // return merged 'results' array
    // results.push(...left)
    // results.push(...right)
    // return results
}

// // solved with multiple helper functions in similar fashion:
// // find and removes the smallest element in a sorted array
// function findMinAndRemoveSorted(array) {
//     return array.shift()
// }
// // combine two sorted arrays into one larger array
// function merge(firstSubarray, secondSubArray) {
//     let sorted = []
//     while (firstSubarray.length != 0 && secondSubArray.length != 0) {
//         if (firstSubarray[0] < secondSubArray[0]) {
//             sorted.push(findMinAndRemoveSorted(firstSubarray))
//         } else {
//             sorted.push(findMinAndRemoveSorted(secondSubArray))
//         }
//     }
//     return sorted.concat(firstSubarray).concat(secondSubArray)
// }
// // mergeSort
// function mergeSort(array) {
//     let midpoint = array.length / 2
//     let firstHalf = array.slice(0, midpoint)
//     let secondHalf = array.slice(midpoint, array.length)
//     let sorted
//     if (array.length < 2) {
//         return array
//     } else {
//         sorted = merge(mergeSort(firstHalf), mergeSort(secondHalf))
//     }
//     return sorted
// }