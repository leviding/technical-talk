# 条件运算符：if 和 '?'


### 1. if（值为 0 的字符串）

**是的，它会**

任何非空字符串（`"0"` 不是空字符串）的逻辑值都是 `true`。

我们可以执行下面的代码来进行验证：

```js
if ("0") {
  alert( 'Hello' );
}
```


### 2. JavaScript 的名字

代码如下：

```html
<!DOCTYPE html>
<html>

<body>
  <script>
    'use strict';

    let value = prompt('What is the "official" name of JavaScript?', '');

    if (value == 'ECMAScript') {
      alert('Right!');
    } else {
      alert("You don't know? ECMAScript!");
    }
  </script>

</body>

</html>
```


### 3. 显示符号

代码如下：

```js
let value = prompt('Type a number', 0);

if (value > 0) {
  alert( 1 );
} else if (value < 0) {
  alert( -1 );
} else {
  alert( 0 );
}
```


### 4. 使用 '?' 重写 'if' 语句

代码如下：

```js
let result = (a + b < 4) ? 'Below' : 'Over';
```


### 5. 使用 '?' 重写 'if..else' 语句

代码如下：

```js
let message = (login == 'Employee') ? 'Hello' :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';
```
