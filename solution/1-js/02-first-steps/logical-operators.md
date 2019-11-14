# 逻辑运算符


### 1. 或运算的结果是什么？

结果是 `2`，这是第一个真值。

```js
alert( null || 2 || undefined );
```


### 2. 或运算和 alerts 的结果是什么？

首先是 `1`，然后是 `2`。

```js
alert( alert(1) || 2 || alert(3) );
```

对 `alert` 的调用没有返回值。或者说返回的是 `undefined`。

1. 第一个或运算 `||` 对它的左值 `alert(1)` 进行了计算。这就显示了第一条信息 `1`。
2. 函数 `alert` 返回了 `undefined`，所以或运算继续检查第二个操作数以寻找真值。
3. 第二个操作数 `2` 是真值，所以执行就中断了。`2` 被返回，并且被外层的 alert 显示。

这里不会显示 `3`，因为运算没有抵达 `alert(3)`。


### 3. 与操作的结果是什么？

`null`，因为它是列表中第一个假值。

```js
alert( 1 && null && 2 );
```


### 4. 与运算连接的 alerts 的结果是什么？

`1`，然后 `undefined`。

```js
alert( alert(1) && alert(2) );
```

调用 `alert` 返回了 `undefined`（它只展示消息，所以没有有意义的返回值）。

因此，`&&` 计算了它左边的操作数（显示 `1`），然后立即停止了，因为 `undefined` 是一个假值。`&&` 就是寻找假值然后返回它，所以运算结束。


### 5. 或运算、与运算、或运算串联的结果

结果是 `3`。

```js
alert( null || 2 && 3 || 4 );
```

与运算 `&&` 的优先级比 `||` 高，所以它第一个被执行。

结果是 `2 && 3 = 3`，所以表达式变成了：

```
null || 3 || 4
```

现在的结果就是第一个真值：`3`。


### 6. 检查值是否位于范围区间内

```
if (age >= 14 && age <= 90)
```


### 7. 检测值是否位于范围之外

第一个表达式：

```js
if (!(age >= 14 && age <= 90))
```

第二个表达式：

```js
if (age < 14 || age > 90)
```


### 8. 一个关于 "if" 的问题

第一个和第三个将会被执行。

详解：

```js
// 执行。
// -1 || 0 的结果为 -1，真值
if (-1 || 0) alert( 'first' );

// 不执行。
// -1 && 0 = 0，假值
if (-1 && 0) alert( 'second' );

// 执行
// && 运算的优先级比 || 高
// 所以 -1 && 1 先执行，给出如下运算链：
// null || -1 && 1  ->  null || 1  ->  1
if (null || -1 && 1) alert( 'third' );
```


### 9. 登陆验证

代码如下：

```js
let userName = prompt("Who's there?", '');

if (userName == 'Admin') {

  let pass = prompt('Password?', '');

  if (pass == 'TheMaster') {
    alert( 'Welcome!' );
  } else if (pass == '' || pass == null) {
    alert( 'Canceled' );
  } else {
    alert( 'Wrong password' );
  }

} else if (userName == '' || userName == null) {
  alert( 'Canceled' );
} else {
  alert( "I don't know you" );
}
```

请注意 `if` 块中水平方向的缩进。技术上是非必需的，但会增加代码的可读性。
