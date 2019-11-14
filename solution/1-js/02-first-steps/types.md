# 数据类型


### 字符串的引号

反引号将包装在 `${...}` 中的表达式嵌入到了字符串。

```js
let name = "Ilya";

// 表达式为数字 1
alert( `hello ${1}` ); // hello 1

// 表达式是一个字符串 "name"
alert( `hello ${"name"}` ); // hello name

// 表达式是一个变量，嵌入进去了。
alert( `hello ${name}` ); // hello Ilya
```
