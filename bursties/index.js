const data = require('./data.json')

// create a data file to process and return incoming 'bursty' users based on interval length and maximum frequency

let jsonData = data.jsonData

// transform into object:
// { 8: [1, 4, 5], 23244: [2] }
function transformToIpsWithTimes(jsonData) {
    // create object
    let obj = {}
    // iterate through each object of jsonData array
    for (let el of jsonData) {
        // for each ip of each object's IPs
        for (let ip of el.ipAddresses) {
            // assign IP as key and create empty array as value
            obj[ip] = obj[ip] || []
            // push timeStamps into IP key's value array
            obj[ip].push(el.timeStamp)
        }
    }
    // return transformed jsonData
    return obj
}

// set parameters
// let intervalLength = 5
// changed intervalLength to 4 for better testing
let intervalLength = 4
let maxFrequency = 3

function filterForBursties(transformedData, intervalLength, maxFrequency) {
    // loop over all ips
    for (let ip in transformedData) {
        // if total number of timeStamps exceeds maxFrequency
        if (transformedData[ip].length >= maxFrequency) {
            // create 'stacked' array to shift/push from/on
            let stackedArr = []
            // loop over timeStamps
            for (let timeStamp of transformedData[ip]) {                
                if (stackedArr.length < maxFrequency) {
                    // add to top of stackedArr
                    stackedArr.push(timeStamp)
                }
                // if stackedArr has maxFrequency of timestamps
                if (stackedArr.length === maxFrequency) {
                    // determine if within intervalLength
                    if (stackedArr[2] - stackedArr[0] < intervalLength) {
                        // if within intervalLength, return bursty's IP and timestamps
                        return `User with IP Address:${ip} is a bursty with timestamps of ${stackedArr[0]}s, ${stackedArr[1]}s and ${stackedArr[2]}s.`
                    } else {
                        // else, remove first timestamp from stackedArr and continue loop
                        stackedArr.shift()
                    }
                } 
            }
        }
        // if loop exited, return that no bursty was found
        return 'No bursty found.'
    }
}

let transformedData = transformToIpsWithTimes(jsonData)
console.log(filterForBursties(transformedData, intervalLength, maxFrequency))