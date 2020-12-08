// test
let n = -981
let answer = -189
if (reverseInt(n) === answer) {
    console.log('passed')
} else {
    console.log('failed')
}

// return a reversed integer

// solved with parseInt, split, reverse, joing and Math.sign"
function reverseInt(n) {
    return parseInt(n.toString().split('').reverse().join('')) * Math.sign(n)
}

module.exports = reverseInt;
