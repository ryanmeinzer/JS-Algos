let logs = []

let tenthIndexWindow = logs[logs.length - 1] - logs[logs.length - 11]

function sayHello() {
    let curTime = new Date()
    logs.push(curTime)
    console.log('hello world', `- invocation #${logs.length} at ${tenthIndexWindow || logs[logs.length - 1] - logs[0]}ms`)
    rateLimiter()
}

function rateLimiter() {
    // console.time('sayHello')
    if (logs.length < 11 || tenthIndexWindow >= 1000) {
    // console.timeEnd('sayHello')
        return console.log('invocation within bounds')
    } else {
        throw new Error(`invocation out of bounds`)
    }
}

const firstSecondTest = () => {
    setTimeout(sayHello, 100)
    setTimeout(sayHello, 200)
    setTimeout(sayHello, 300)
    setTimeout(sayHello, 400)
    setTimeout(sayHello, 500)
    setTimeout(sayHello, 600)
    setTimeout(sayHello, 700)
    setTimeout(sayHello, 800)
    setTimeout(sayHello, 900)
    setTimeout(sayHello, 950)
    // out of bounds
    setTimeout(sayHello, 1000)
}

firstSecondTest()