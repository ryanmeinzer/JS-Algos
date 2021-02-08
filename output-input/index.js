// test
let input = "aaaabbbcca"
let output = `[("a", 4), ("b", 3), ("c", 2), ("a", 1)]`
if (JSON.stringify(outputInput(input)) === JSON.stringify(output)) {
    console.log('passed')
} else {
    console.log('failed')
}

// convert the input to the output
function outputInput(input) {
    let tempArr = []
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