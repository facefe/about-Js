// 1:includes 返回布尔值，表示是否找到了参数字符串
// 2:startsWith:返回布尔值，表示字符串是否在源字符串的头部
// 3:endsWith:返回布尔值，表示是否位于源字符串的尾部
let str = 'hello world'
console.log(str.startsWith('hello'))
console.log(str.endsWith('ld'))
console.log(str.includes('o w')) // 中间含有空格也可以。
// 三个方法都支持第二个参数，表示搜索开始的位置。
console.log(str.startsWith('worl', 3))
console.log(str.endsWith('ll', 4))
// 与上面两种方法不一样，表示只包含前面 n 个字符。
console.log(str.includes('l', 0))


//二
//1:repeat方法 返回新字符串，表示将原字符串重复 n 次。
// 如果传入的是小数，将会被取整数。
let strn = '你好,世界'
let strn1 = strn.repeat(3)
console.log(strn1)
// 如果传入的参数是Infinnity 会报错。

// strn.repeat(-1) 也会报错。
// 参数位于 0-1 之间会取整为 0 。
// NaN 会为0
let nan = strn.repeat('NaN')
console.log(`我是nan` + nan)

// 三
//padStart():在头部补全
//padEnd():在尾部补全
let pad = 'pad'

let padS = pad.padStart(8, '!')
console.log(padS)
let padN = pad.padEnd(8, '?')
console.log(padN)

//如果指定长度等于或者小于 源字符串长度，会原样输出。
let padY = pad.padEnd('3', '??')
console.log(padY)
// 如果指定字符串长度，按照原样截取超出指定长度，会截断。
let strJ = pad.padEnd(6, 'an')
console.log(strJ) // padana

//省略点第二个参数，会用空格补全。
let padH = pad.padEnd(7)
console.log(padH + '前面是空格')

// 重点模板字符串：`  ` 就是这个。
// 1:模板字符串可以用开代替普通字符串。

var m = `模板字符串`
console.log(m)
// 2:模板字符串可以多行输出。
var m1 = ` 这是第一行
 这是第二行
    并且多行中   前面的空格会保留`
console.log(m1)

// 3:字符串中可以嵌入变量，执行函数， 还可以放入对象。
// 如果里面需要用到 ` ,需要用反斜杠转义 \`
var a = `吴华容`
var b = `我叫${a}`
console.log(b)

function cons() {
    return '我的名字叫做'

}

var c = `${cons() + a}`
// 用人家的名字是不好的，但是  反正也没有人看
console.log(c)

var 转义字符 = `我是字符 \``
console.log(转义字符) // 这叫 假变量吧 忘了