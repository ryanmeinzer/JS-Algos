const data = require('./data.json')

// // convert an object (or an array) into JSON string data
// let myJSON = JSON.stringify(data)

// // convert JSON string data into an object
// let myObj = JSON.parse(myJSON)

console.log(data)
// console.log(myJSON)
// console.log(myObj)

function printNames(data) {
    let arr = []
        for (let el in data.dogs) {
            arr.push(data.dogs[el].name)
        }
    console.log('names:', arr)
}

printNames(data)

function printAges(data) {
    let arr = []
    for (let el in data.dogs) {
        arr.push(data.dogs[el].age)
    }
    console.log('ages:', arr)
    console.log('sum of ages:', arr.reduce((a, b) => a + b, 0))
}

printAges(data)