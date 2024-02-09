console.log('connected')

const promise = new Promise((resolve, reject) => {
    if (false)
        resolve("It worked")
    else
        reject("It did not work")
})

promise.then(result => result + " haha").catch(result => result + "hehe");

// advanced array functions
const add = (x, y) => x + y;

add(2, 3);

let arr = [10, 2, 3, 4, 30]
let newarr = arr.map(num => num * 2)
console.log(newarr)

// filter
let filarr = arr.filter(num => num > 9)
console.log(filarr)

// reduce
let redarr = arr.reduce((acc, num) => acc + num, 100);