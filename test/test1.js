// 使用 for...of 遍历 对象，需要添加 Symbol.iterator 属性
const obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  [Symbol.iterator]: function *() {
    const keys = Object.keys(this);
    for (let i = 0; i < keys.length; i++) {
      yield obj[keys[i]];
    }
  },
};

for (let v of obj) {
  console.log(v);
}
