# 对象

### 1. 你好，对象

```js
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;
```


### 2. 检查空对象

只需要遍历这个对象，如果对象存在任何属性则 `return false`。

```js
function isEmpty(obj) {
  for (let key in obj) {
    // 如果进到循环里面，说明有属性。
    return false;
  }
  return true;
}
```


### 3. 不可变对象

当然，有效，没有问题。

关键字 `const` 只保护变量本身不被改变。

换句话说，`user` 保存的是对象的引用。引用不能被改变。但是对象可以。

```js
const user = {
  name: "John"
};

// 成功
user.name = "Pete";

// 报错
user = 123;
```


### 4. 对象属性求和

```
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}

alert(sum); // 390
```


### 5. 数值属性都乘以 2

```
function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == 'number') {
      obj[key] *= 2;
    }
  }
}
```
