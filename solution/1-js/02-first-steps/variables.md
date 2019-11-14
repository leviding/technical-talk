## 变量


### 1. 使用变量

下面的代码，每一行都对应着任务列表中的对应项。

```js
let admin, name; // 一次声明两个变量。

name = "John";

admin = name;

alert( admin ); // "John"
```


### 2. 给出正确的名字

代表我们星球的变量，这很简单：

```js
let ourPlanetName = "Earth";
```

注意，我们也可以用一个更简短的名字 `planet`，但这样可能并不能表达清楚它指的是哪个星球。再啰嗦一点也挺好的。至少让这个变量别太长就行。

网站当前访问者的名字：

```js
let currentUserName = "John";
```

同样，如果我们的确知道用户就是当前的用户的话，我们可以使用更短的变量名 `userName`。

现代编辑器的自动补全可以让长变量名变得容易编写。不要浪费这个特性。一个名字中包含三个词挺好的。

如果你的编辑器没有合适的自动补全功能，换 [一个新的吧](https://zh.javascript.info/code-editors)。


### 3. 大写的常量？

我们通常用大写字母表示“硬编码（hard-coded）”的常量。或者，换句话说就是，当值在执行之前或在被写入代码的时候，我们就知道值是什么了。

在这个代码中 `birthday` 确实是这样的。因此我们可以使用大写。

在对照组中，`age` 是在程序运行时计算出的。今天我们有一个年龄，一年以后我们就会有另一个。它在某种意义上不会随着代码的执行而改变。但与 `birthday` 相比，它还是有一定的可变性：它是计算出来的，因此我们应该使用小写。