const MPromise = require('../implementations/MPromise');

const timeout = (ms) => {
  return new MPromise(function (res, rej) {
    setTimeout(() => {
      if (ms === 400) {
        rej(new Error('出错了哦， res===400'));
      }
      res(ms);
    }, ms);
  });
};

// Promise.all([
//   timeout(500),
//   timeout(300),
//   timeout(600),
//   timeout(400),
// ]).then(data => {
//   console.log('这是结果', data)
// }, err => console.log('出错了，被捕捉了', err));



Promise.reject(1)
  .then()
  .then(data => console.log('data => ', data), data => console.log('rej => ', data));
