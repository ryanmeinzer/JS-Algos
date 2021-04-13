let logs = {}

let tenthIndexWindow = logs[Object.keys(logs).length - 1] - logs[Object.keys(logs).length - 11]

function sayHello() {
    let curTime = new Date()
    logs[Object.keys(logs).length] = curTime
    console.log('hello world', `- invocation #${Object.keys(logs).length} at ${tenthIndexWindow || logs[Object.keys(logs).length - 1] - logs[0]}ms`)
    rateLimiter()
}

const rateLimiter = () => {
    // console.time('sayHello')
    if (Object.keys(logs).length < 11 || tenthIndexWindow >= 1000) {
    // console.timeEnd('sayHello')
        return console.log('invocation within bounds')
    } else {
        throw new Error(`invocation out of bounds`)
    }
}

const firstSecondTest = (increment = 50) => {
    if (increment >= 1000) {
        return console.log('done!')
    }
    setTimeout(sayHello, increment)
    increment = increment + 50
    return firstSecondTest(increment)
}

firstSecondTest(100)