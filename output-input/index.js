// test
let input = "aaaabbbcca"
let answer = `[("a", 4), ("b", 3), ("c", 2), ("a", 1)]`
// if (outputInput(input).toString() === answer.toString()) {
if (JSON.stringify(outputInput(input)) === JSON.stringify(answer)) {
    console.log('passed')
} else {
    console.log('failed')
}

function outputInput(input) {
    tempArr = []
    let count = 1
    for (let i = 0; i < input.length; i++) {
        if (input[i] === input[i + 1]) {
            count++
        } else {
            tempArr.push(`("${input[i]}", ${count})`)
            count = 1
        }
    }
    let output = `[${tempArr.toString().split('),').join('), ')}]`
    return output
}

outputInput(input)