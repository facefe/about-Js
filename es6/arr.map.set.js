// 数据结构:计算机中组织数据的方式。
// 数组特点:不定长，支持栈，队列操作。

// 数组去重方法： 利用对象不能重复。

// let arr = [1, 2, 3, 4, 5, 6, 5, 6, 8]
Array.prototype.unique = function () {
    let itemIndex = {}
    let resArr = []
    this.forEach(function (ele, index) {
        if (!itemIndex[ele]) {
            itemIndex[ele] = true
            resArr.push(ele)
        }
    })
    return resArr
}
let arrMapSet = [1, '1', 1]
var arr1 = arrMapSet.unique()
console.log(arr1)

// ES6 的数据结构:set map

// map 是 字典,加强的对象 指点指 目录。
let map = new Map()
let obj = {}
map.set(1, 1)
obj[1] = 1
// 传统的对象的key值好像是字符串，会发生类型转换。转换为字符串。
console.log(map, obj)
// 但是Map 数据结构的key值，数字和字符串可以分得开

// map.set()  map.get() 设置值 和 取值

// map.has() 判断是否含有某个key

// map.delete() 删除某个key

//map 支持  map.forEach() forEach()方法支持第二个参数，this
// map 支持 
// map.clear() 删除整个 map

// 初始化map结构的方法
let map1 = new Map([
    [1, 2],
    [3, 5],
    [5, 6]
])

// 。。map结构转换为数组
var nMap = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
    [4, 'four']
])
var oArr = [...nMap.keys()] // ...拔括号
console.log(oArr)


let len = map1.length
// 没有length
console.log(len)
len = map1.size
// 判断map 的长度。
console.log(len)


Array.prototype.mapunique = function () {
    let itemIndex = new Map()
    let resArr = []
    this.forEach(function (ele, index) {
        if (!itemIndex.has(ele)) {
            itemIndex.set(ele, true)
            resArr.push(ele)
        }
    })
    return resArr
}

var nArr = [1, 2, 3, '1', 3]

nArr = nArr.mapunique()
console.log(nArr)

// 重要：内存回收机制，两种情况
// 1:定时清理内存
// 2:内存达到一定量时候,清理内存

// set数据结构:相互独立，但是却不相同的值。` 

// set.add() 添加数据

var arr3 = [1, 2, 3, 3, 3, '3']
// 简单就可以实现数据去重

arr3 = new Set(arr3)
console.log(arr3)

// 对象总是不相等的。以为比较的是地址。

// Set.prototype.constructor()
// Set.prototype.size()

//set.size()
//set.has()
//set.delete()
//set.clear()

//set.keys() 
//set.values() 这两个相同, 因为set没有 values
//set.entries()
//set.forEach()


// WeakSet()
// 1:成员只能是对象，(数组或者类数组)
// 2:垃圾回收机制不会考虑WeaKSet()中的引用，就是当其他地方(结构中)，不在引用WeakSet中的对象，
//。。。里面的对象就会被回收。

// SeakSet含有三种方法：
// WeakSet.prototype.add()
// WeakSet.prototype.delete()
// WeakSet.prototype.has()

// map转换为各种数据结构的方法
// 数组转化为 map  直接传入

// map转化为数组,拔括号
