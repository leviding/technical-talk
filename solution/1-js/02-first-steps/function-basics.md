# 函数

### 1. 是否需要 “else”？

没有区别。


### 2. 使用 '?' 或者 '||' 重写函数

使用问号运算符 `'?'`：

```js
function checkAge(age) {
  return (age > 18) ? true : confirm('Did parents allow you?');
}
```

使用或运算符 `||`（最短的变体）：

```js
function checkAge(age) {
  return (age > 18) || confirm('Did parents allow you?');
}
```

请注意此处不需要 `age > 18` 左右的括号。写上括号是为了提高可读性。


### 3. 函数 min(a, b)

使用 `if` 的解决方案：

```js
function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}
```

使用问号运算符 `'?'` 的解决方案：

```js
function min(a, b) {
  return a < b ? a : b;
}
```

P.S. 在 `a == b` 的情况下，返回什么都无关紧要。


### 4. 函数 pow(x,n)


```js run demo
function pow(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if (n < 1) {
  alert(`Power ${n} is not supported, use a positive integer`);
} else {
  alert( pow(x, n) );
}
```
