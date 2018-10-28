let s = Symbol()
console.log(typeof s)
// symbol 是js第七种数据结构。 属于原始值。
// Symbol 不能使用new操作符，会报错。不能添加属性，只是一种类似于字符串的原始值。
let s1 = Symbol('foo')
let s2 = Symbol('bar')
let a1 = s1.toString()
let a2 = s2.toString()
console.log(s1, s2, a1, a2)