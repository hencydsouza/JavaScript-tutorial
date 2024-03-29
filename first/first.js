console.log("Connected with external js file");

var a = 1;
var b = 2;

if (a + b > 4) {
    console.log(a + b)
} else if (a + b < 1) {
    console.log(a + b)
} else
    console.log("hi")

for (var num = 0; num < 11; num += 2) {
    console.log(num)
}

var a = [1, 2, 3, 4]

a.forEach(item => console.log(item));

for (var item of a) {
    console.log(item);
}

var num = 0

while (num < 5) {
    console.log(num);
    num++
}

do {
    console.log(num)
    num++
} while (num < 5)

var itr = 10
console.log(itr++)
console.log(itr)

console.log(++itr)
console.log(itr)

var num1 = 8, n = 2;

console.log(num1 << n)
console.log(num1 >> n)

// console.log(x)
// const x = 10
// console.log(x)

for (var m = 0; m < 5; m++) {
    console.log(m)
}
console.log(m)

var m = 0
var m = 1

const c = 19;
// c = 100

var name = "Hency"

console.log(name + " is 21 years old");
console.log(`${name} is 21 years old`)

var obj = {
    name: "Hency",
    roll_no: 10,
    sing: function () {
        console.log(`${this.name} sings`)
    }
}

// objects
console.log(obj.name)
obj.sing();
console.log(obj["roll_no"])

// arrays
var arr = [1, 2, 3, 4, 5];
console.log(a[2])

var arr1 = [2, 34, 5, 6, , 77]
console.log(arr1[4])

arr.push("hency")
arr.push("taz")
console.log(arr.pop())

arr.unshift(1000)
arr.unshift(10)
console.log(arr[0])
console.log(arr.shift())

console.log(arr);

arr.splice(1, 3, "9999")
arr.splice(0, 3)

var b_arr = [1, 2, 3, 4, 5, 6]

var new_barr = b_arr.slice(0, 4);

var c_arr = [1, 2, 3, 4, 5, 6]
var new_carr = c_arr.slice(3)

var new_carr2 = c_arr.slice(3, 7)

// functions
// console.log(print(5, 7))

var a = 0;
console.log(a)
print();
function print() {
    var y = 0
}
console.log(a)
// console.log(y)

var prnt = function () {
    console.log("awesome")
}
prnt();

(function (a, b) {
    console.log(a + b)
})(4, 4);

// function print(){
//     console.log("Hello World!")
// }
// print.call()
// print.apply()

let animal = {
    name: "dog",
    eat(a, b) { console.log(this.name + " is eating " + a + " " + b) }
}

let human = {
    name: 'Ravi'
}

// animal.eat(5, "bones")
// animal.eat.call(human, 5, "chips")
// animal.eat.apply(human, [5, "chips"])

let human_eat = animal.eat.bind(human)
human_eat(5, "chips");

let ob = {
    prnt: function () {
        console.log(this)
    }
}
ob.prnt()

// arrow functions
let ob1 = {
    name: 'fur',
    prnt: function () {
        console.log('a', this)
        var an_prnt = () => {
            console.log('b', this)
        }
        an_prnt()
    }
}
ob1.prnt()

// higher order functions

// function canVote(age) { return (age >= 18) }
// function canDrive(age) { return age >= 18 }
// function canMarry(age) { return age >= 21 }

// console.log(canDrive(11))
// console.log(canVote(11))
// console.log(canMarry(11))

// console.log(canDrive(27))
// console.log(canVote(27))
// console.log(canMarry(27))

function age_req(r_age) {
    return function (age) { return age >= r_age }
}

console.log(age_req(18)(27))
console.log(age_req(16)(27))
console.log(age_req(16)(27))

// oops
//encapsulation
class box {
    constructor(length) {
        this.length = length
        console.log("constructor called")
    }
    display() {
        console.log(this)
    }
}

let obj2 = new box(20)
obj2.display()

let father = {
    name: 'jhon'
}

let son1 = {}
let son = Object.create(father)
console.log(father.isPrototypeOf(son))
console.log(father.isPrototypeOf(son1))

var parent = {
    name: "Father",
    sing() {
        console.log("singing")
    },
    eat: function () {
        console.log("eating")
    },
    drink: () => {
        console.log("drinking")
    }
}

var child = {
    name: "Son",
    eat: function () {
        console.log("eating")
    }
}

child.__proto__ = parent;

for (let p in child) {
    console.log(p + " " + child.hasOwnProperty(p))
}

//inheritance
class Fruits {
    constructor(color) {
        this.color = color
    }
    // print(size) { console.log(size) }
    print() { console.log(this) }
    // print(s1, s2) {
    //     console.log(s1 + s2)
    // }
}

class Apple extends Fruits {
    constructor(color, type) {
        super(color)
        this.type = type
    }
    print() { super.print() }
}

let obj4 = new Apple("red", "apple")
obj4.print()
let ob5 = new Fruits("red")
ob5.print()
// ob5.print(10)
// ob5.print(12, 12)

class Parent {
    live() {
        console.log("Iran")
    }
}

class Child extends Parent {
    live() { console.log("India") }
}

var ob3 = new Child()
ob3.live()

// exception handling 
try {
    console.log(a1)
    // console.log("hello")
}
catch { console.log("We got an error") }

function a2(age) {
    if (age < 16) {
        try {
            throw new Error("You are under aged");
        }
        catch (error) { console.log(error) }
        finally { console.log("Program ended") }
    } else {
        console.log("You can vote")
    }
}
a2(13)

try {
    console.log(a3)
}
finally { console.log("Program ended") }