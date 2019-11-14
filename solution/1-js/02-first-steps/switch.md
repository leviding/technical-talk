# "switch" 语句


### 1. 将 "switch" 结构重写为 "if" 结构

为了精确实现 `switch` 的功能，`if` 必须使用严格相等 `'==='`。

对于给定的字符串，一个简单的 `'=='` 也可以。

```js
if(browser == 'Edge') {
  alert("You've got the Edge!");
} else if (browser == 'Chrome'
 || browser == 'Firefox'
 || browser == 'Safari'
 || browser == 'Opera') {
  alert( 'Okay we support these browsers too' );
} else {
  alert( 'We hope that this page looks ok!' );
}
```

请注意：将 `browser == 'Chrome' || browser == 'Firefox' …` 结构分成多行可读性更高。

但 `switch` 结构更清晰明了。


### 2. 将 "if" 结构重写为 "switch" 结构

前两个检查为前两个 `case`，第三个检查分为两种情况：

```js
let a = +prompt('a?', '');

switch (a) {
  case 0:
    alert( 0 );
    break;

  case 1:
    alert( 1 );
    break;

  case 2:
  case 3:
    alert( '2,3' );
*!*
    break;
*/!*
}
```

请注意：最后的 `break` 不是必须的。但是为了让代码可扩展我们要把它加上。

有可能之后我们想要再添加一个 `case`，例如 `case 4`。如果我们忘记在它之前添加一个 break，那么在 case 3 执行结束后可能会出现错误。所以这是一种自我保险。
