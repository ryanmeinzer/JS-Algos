//input
let arr = [1, 6, 2, 3, 9]
let answer = [9, 3, 2, 6, 1]

// test solution = [11, -1]
if (reverseArray(arr).toString() === answer.toString()) {
    console.log('passed')
} else {
    console.log('failed')
}

// reverse the array
function reverseArray(arr) {
    let reversed = []
    for (let el of arr) {
        reversed.unshift(el)
    }
    return reversed
}