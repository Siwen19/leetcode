### 本题思路
- 首先把数字转成字符串，再把字符串 从后向前 的一个个字符 push 进 一个数组里
- 数组遍历， 当数组内第一个 value 是 0 时，pop 这个 value
- 数组整理好后，join 一下串成字符串
- string 和 number 都是基本数据类型，在非严格模式下是 可以 比较的
- 最后判断这个 string 是否在 数值范围之内
