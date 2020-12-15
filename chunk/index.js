let array = [1, 2, 3, 4, 5]
let size = 4
let answer = [ [ 1, 2, 3, 4 ], [ 5 ] ]
if (JSON.stringify(chunk(array, size)) === JSON.stringify(answer)) {
    console.log('passed')
} else {
    console.log('failed')
}

// return 'chunked' subarrays of given length size 

// solved with loop, push and slice
function chunk(array, size) {
    // create a 'chunked' array
    let chunked = []
    // use 'index' starting at 0
    // while index is less than array length
    let index = 0
    while (index < array.length) {
        // push  a slice of length 'size' from 'array' into 'chunked'
        chunked.push(array.slice(index, index + size))
        // add 'size' to 'index'
        index += size
    }
    // return chunked
    return chunked
}

    // USSR
    // Understand - given size, return as many arrays as possible of that size. Inputs are integers, outputs are integers. Labels are present. Example is if size is 3 and array size is 10, four arrays returned with three being of size three and the last being of size 1
    // Sudo chop - 

    // Solve / skip - 

    // // create new array for chunks (chunked)
    // let chunked = []
    // // for each element in array, get last element in chunked
    // for (let element of array) {
    //     let last = chunked[chunked.length - 1]
    //     // if last element doesn't exist or if its length is equal to size
    //     if (!last || last.length === size) {
    //         // push a new[ chunk into chunked with the current element
    //         chunked.push([element])
    //         // else add the current element into current chunk
    //     } else {
    //         last.push(element)
    //     }
    // }
    // // return chunked
    // return chunked 

    // Refactor - 
