// 一 字符串操作方法。
// 1:concat:拼接字符串，参数任意多个 源字符串不变，返回新字符串
// var str = 'hello world'
// var str1 = str.concat('你好', '世界')
// console.log(str1)

// 2: indexOf & lastIndexOf 第二个参数表示开始位置，
//  lastIndexOf ()会从第二个参数向前搜索，忽略第二个参数之后的字符串。
// var str2 = '你好,世界'
// 皮一下
// var num = str2.indexOf(',')
// console.log(num) // 2 可以的
// var num1 = str2.lastIndexOf('世')
// console.log(num1) // 3

// slice()  
// substr()
// substring()  将所有参数负值 转换为0

var strNum = '123456'
var slice = strNum.slice(1, 4) //左闭右开 如果是负值 就会与当前字符串长度相加
console.log(slice)
var sub = strNum.substr(1, 4) // 第二个参数指定返回的字符串个数
// 第一个负值，与字符串长度相加，第二个转换为0
// 
console.log(sub)


// trim方法
// 删除前缀以及后缀的空格。返回新的字符串。

// 转换大小写的方法，不用写了


var uuu = 'iamastudent'
var um = uuu.charAt(3)
console.log(um)
// 很明显 在处理中文时候有问题。
var yu = uuu.charCodeAt(3)
console.log(yu)
//在处理英文时候还是很好用的。


// 以下是正则表达式。