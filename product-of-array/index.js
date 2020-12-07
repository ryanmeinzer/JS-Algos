// test:
let arr = [1,2,3,10]
let answer = 60
if (productOfArray(arr) === answer) {
    console.log('passed')
} else {
    console.log('failed')
}

// return the product of all numbers in an array

function productOfArray(arr) {
    // base with exit
    if (arr.length === 0) return 1
    // changing inputs with recursion
    return arr[0] * productOfArray(arr.slice(1))
}

// recursion call stack mapped out
// productOfArray(1,2,3,10)
    // 1 * productOfArray(2, 3, 10) -> 
        // 2 * productOfArray(3, 10) -> 
            // 3 * productOfArray(10) -> 
                // 10 * productOfArray(0) ->
                    // 1
                        // 1 * 10 * 3 * 2 * 1 = 60