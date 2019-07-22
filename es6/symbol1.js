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

// let s = Symbol()
// console.log(typeof s)
// // symbol 是js第七种数据结构。 属于原始值。
// // Symbol 不能使用new操作符，会报错。不能添加属性，只是一种类似于字符串的原始值。
// let s1 = Symbol('foo')
// let s2 = Symbol('bar')
// let a1 = s1.toString()
// let a2 = s2.toString()
// console.log(s1, s2, a1, a2)

/**
 * Symbol.prototype.description 返回字符串的描述符号
 * 
 */
// 默认读取 Symbol 会调用Symbol 的toString方法
// es2019提供了一个 Symbol.prototype.description
// var sym = Symbol('foo');
// var s = sym.description;
// console.log(s);
// 貌似node环境不支持

// Symbol 不支持 对象.的方式。只支持[]方式 对象.的方式只支持后面跟字符串的方式
// let mySymbol = Symbol();

// // 第一种写法
// let a = {};
// a[mySymbol] = 'Hello!';

// // 第二种写法
// let a = {
//   [mySymbol]: 'Hello!'
// };

/**
 * Symbol 定义的属性不会出现在 ( for in )  ( for of ) 循环中
 *
 */

 /**
  * Symbol.for 定义的symbol 定义的symbol 会出现在定义在全局 可以定义相同的 Symbol 属性
  */
 /**
  * Symbol.keyFor 定义的属性会返回 Symbol.for 定义的描述字符串
  */


  let sy = Symbol.for('foo');
  let sy1 = Symbol.keyFor(sy);
  console.log(sy1);
