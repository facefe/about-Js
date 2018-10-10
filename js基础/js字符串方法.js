// 一 字符串操作方法。
// 1:concat:拼接字符串，参数任意多个 源字符串不变，返回新字符串
var str = 'hello world'
var str1 = str.concat('你好', '世界')
console.log(str1)

// 2: indexOf & lastIndexOf 第二个参数表示开始位置，
//  lastIndexOf ()会从第二个参数向前搜索，忽略第二个参数之后的字符串。
var str2 = '你好,世界'
// 皮一下
var num = str2.indexOf(',')
console.log(num) // 2 可以的
var num1 = str2.lastIndexOf('世')
console.log(num1) // 3