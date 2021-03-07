//input
let arr = [10, 20, 20, 10, 10, 30, 50, 10, 20]
let answer = [3]

// test solution = [11, -1]
if (countPairs(arr).toString() === answer.toString()) {
    console.log('passed')
} else {
    console.log('failed')
}

// count the number of pairs in the array
function countPairs(arr) {
    let obj = {}
    for (let el of arr) {
        obj[el] = obj[el] + 1 || 1
    }
    let count = 0
    for (let el in obj) {
        count = count + Math.floor(obj[el] / 2)
    }
    return count
}