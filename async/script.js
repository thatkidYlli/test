/* const example = async() => {
    var x = await "Hello World"
    console.log(x)
}

console.log('Akademia')
example()
console.log('jCoders')
console.log(2022)

new Promise((resolve, reject) => {
    if(success)
    resolve(data);
    if(error)
    reject(reason)
}) */

const Akademia = new Promise((resolve, reject) => {
    let x = 'Akademia jCoders'

    if( x == 'Akademia jCoders') resolve('Success!')
    else reject('Error!')
})

Akademia.then((res) => {
    console.log(res)
}).catch((e) => {
    console.log(e)
})