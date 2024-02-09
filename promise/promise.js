console.log('connected')

const promise = new Promise((resolve, reject) => {
    if (false)
        resolve("It worked")
    else
        reject("It did not work")
})

promise.then(result => result + " haha").catch(result => result + "hehe");