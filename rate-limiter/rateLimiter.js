let logs = []

let tenthIndexWindow = logs[logs.length - 1] - logs[logs.length - 11]

function sayHello() {
    let curTime = new Date()
    logs.push(curTime)
    console.log('hello world', `- invocation #${logs.length} at ${tenthIndexWindow || logs[logs.length - 1] - logs[0]}ms`)
    rateLimiter()
}

const rateLimiter = () => {
    // console.time('sayHello')
    if (logs.length < 11 || tenthIndexWindow >= 1000) {
    // console.timeEnd('sayHello')
        return console.log('invocation within bounds')
    } else {
        throw new Error(`invocation out of bounds`)
    }
}

const firstSecondTest = () => {
    setTimeout(sayHello, 50)
    setTimeout(sayHello, 100)
    setTimeout(sayHello, 150)
    setTimeout(sayHello, 200)
    setTimeout(sayHello, 250)
    setTimeout(sayHello, 300)
    setTimeout(sayHello, 350)
    setTimeout(sayHello, 400)
    setTimeout(sayHello, 450)
    setTimeout(sayHello, 500)
    // out of bounds
    setTimeout(sayHello, 550)
}

firstSecondTest()