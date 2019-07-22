// let s = Symbol();
// console.log(typeof s);
// symbol 是js第七种数据结构。 属于原始值。
// Symbol 不能使用new操作符，会报错。不能添加属性，只是一种类似于字符串的原始值。

/**
 *  js中的前六种数据结构是
 *   Undefined
 *   Null
 *   Boolean
 *   String
 *   Number
 *   Object
 *
 *   第七种 Symbol
 */

// let  s1 = Symbol();
// let  s2 = Symbol();
// console.log(s1 == s2); // false 虽然控制台都会输出 Symbol 但是 每个Symbol 都不同
// 就算参数相同也是false   Symbol('foo') == Symbol('foo') // false

/**
 * 还有Symbol 不能与其他数据类型进行运算 例如不能与字符串进行相加
 */

// 但是/symbol 可以显示转换为 字符串或者 boolean
// let s = Symbol('foo');
// let str = String(s);
// console.log(typeof  str) // string

// let s2 = Symbol();
// let s3 = Boolean(s2);
// console.log(typeof s3);  // boolean

/**
 * 另外如果symbol 内传入一个对象或者数组
 * 会调用对象或者数组的 toString方法
 * 然后
 */
// 一个栗子
// let obj = {
//     a:1,
//     toString () {
//         return '12345'
//     }
// };
//
// let sSym = Symbol(obj);
// console.log(sSym);// Symbol(12345)
