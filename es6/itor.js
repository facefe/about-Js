// 迭代器 (遍历器) Iterator  生成器
// 数据的迭代
// 数组 对象 Map Set
// 数组的迭代 
// for
// map forEach filter
// 


//迭代器是一个对象
let = Iterator = {
    next() {
        return {
            value,
            done
        }
    }
}

// 特点:
// 每个迭代器对象都有next方法  ，返回结果对象，
// value:每次迭代的对象，done:迭代是否已经结束 Boolen

// 每个迭代器都有专用指针，开始时候指向第一个数据，
// 每次迭代，指针下移，done:变化
// 迭代器支持 for of 循环

let arr = [1, 2, 3, 4]

// arr.Iterator.next() {
//         value: 1,
//         done: false
//     }

//     .....
// arr.Iterator.next() {
//     value: undefined,
//     done: true
// }

function oIterator(arr = []) {
    //创建一个可以迭代数组的迭代器，
    let nextI = 0
    return {
        next() {
            if (arr.length - 1 < nextI) {
                return {
                    value: undefined,
                    done: true
                }

            } else {
                return {
                    value: arr[nextI++],
                    done: false
                }
            }
        }
    }
}

// 理解以下就好

// 有哪些默认的Iterator接口
// Array
// Map 
// Set
// String
// arguments
// Nodelists



// Array Map Set 
// entries() key() values()  forEach()

let map = new Map(['name', '张'], ['age', 23], ['like', 'gril'])
let set = new Set([1, 2, 3, 4, 5, 6, 7])
var arrN = new Array('十', '九', '八')

let mapEntries = map.entries()
let setEntries = set.entries()
let attEntries = arrN.entries()
// console.log(mapEntries(), mapEntries(), mapEntries(), mapEntries())
let a = mapEntries.next()
console.log(a)