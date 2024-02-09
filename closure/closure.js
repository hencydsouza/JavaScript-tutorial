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