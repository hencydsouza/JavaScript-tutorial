console.log("connected")

function parent() {

    var x = 10
    console.log("hello")

    function child() {
        console.log(x + 10)
    }

    return child;
}

function f1(gf) {
    return function (f) {
        return function (s) {
            console.log(`${gf}-- ${f}-- ${s}`)
        }
    }
}

let f2 = (gf) => (f) => (s) => console.log(`${gf}-- ${f}-- ${s}`)

// currying

let add = function (x) {
    return function (y) {
        console.log(x + y)
    }
}

let addby5 = add(5)

console.log(addby5(2))
console.log(addby5(5))
console.log(addby5(10))

let mul = function (x, y) {
    console.log(x * y);
}
let mulBy10 = mul.bind(this,10);
mulBy10(7);
mulBy10(8);
mulBy10(9);