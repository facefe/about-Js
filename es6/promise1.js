// var timeO = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log('你好，世界')
//         resolve()
//         reject()
//         // 需要调用函数。
//         // promise 用于处理异步函数。
//     }, 20);

// })
// timeO.then(function () {
//     console.log('成功')
//     //第一个函数代表resolve 
//     //第二个函数代表reject
// }, function () {
//     console.log('失败')
// })


// console.log('你会出现在哪里')

// // promise 好像会让某些东西变得更加简单。

// var con = new Promise(function (resolve, reject) {
//     console.log('我就是试一试')
//     resolve()
//     reject()
// })

// con.then(function () {
//     console.log('实验成功')
// }, function () {
//     console.log('实验失败')
// })

// 应该是没有什么问题吧 
var a = new Promise(function (resolve, reject) {
    console.log('shijie')
    resolve('成功') // 可以传入参数
    reject()

})
a.then(function (val) {
    console.log(val)

}, function (mse) {
    console.log(mse)
})


// var prom = new Promise(function (resolve, reject) {
// throw new Error('test')
// resolve()
// reject()
// })   

// prom.catch(function (error) {
//     console.log(error)

// })


console.log('应该不会输出吧')


let E = new Promise(function (resolve, reject) {
    var a = x + 2
    resolve()
    reject()
})
E.then(function () {
    console.log('不会打印这行代码')
})


console.log('就是证明以下')
