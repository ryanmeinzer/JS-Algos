const data = require('./data.json')

// // convert an object (or an array) into JSON string data
// let myJSON = JSON.stringify(data)

// // convert JSON string data into an object
// let myObj = JSON.parse(myJSON)

// console.log(data)
// console.log(myJSON)
// console.log(myObj)

function printEmployees(data) {
    let arr = []
        for (let el in data.employees) {
            arr.push(data.employees[el].firstName)
        }
    console.log(arr)
}

printEmployees(data)