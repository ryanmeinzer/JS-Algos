//input
let arr = [[-9, -9, -9, 1, 1, 1], [0, -9, 0, 4, 3, 2], [-9, -9, -9, 1, 2, 3], [0, 0, 8, 6, 6, 0], [0, 0, 0, -2, 0, 0], [0, 0, 1, 2, 4, 0]]
let answer = 28

// test solution = [11, -1]
if (hourglassSum(arr) === answer) {
    console.log('passed')
} else {
    console.log('failed')
}

// find the max hourglass sum within the 2D array
function hourglassSum(arr) {
    let max = -Infinity
    for (let y = 0; y <= 3; y++) {
        for (let x = 0; x <= 3; x++) {
            let sum = arr[y][x] + arr[y][x + 1] + arr[y][x + 2]
            sum += arr[y + 1][x + 1]
            sum += arr[y + 2][x] + arr[y + 2][x + 1] + arr[y + 2][x + 2]
            if (sum > max) {
                max = sum
            }
        }
    }
    console.log(max)
    return max
}