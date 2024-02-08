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