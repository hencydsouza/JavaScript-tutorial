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