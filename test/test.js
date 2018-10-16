const MPromise = require('../implementations/MPromise');

const timeout = (ms) => {
  return new MPromise(function (res, rej) {
    setTimeout(() => {
      if (ms === 400) {
        rej('400err')
      } else {
        res(ms);
      }
    }, ms);
  });
};

// const p0 = timeout(500);
// p0.then((t) => {
//   console.log(t);
//   return timeout(t + 500);
// })
//   .then((t) => {
//     console.log(t);
//     dasdasd
//     return timeout(t + 500);
//   })
//   .then((param) => {
//     console.log('resolve le ->', param);
//     return 2;
//   }, (err) => {
//     console.log('------ err ------', err);
//     return timeout(500);
//   })
//   .then((t) => {
//     console.log(t);
//     return timeout(t + 500);
//   })
//   .then((t) => {
//     console.log(t);
//   })

// const thenable = {
//   then: function (res, rej) {
//     console.log('thenable');
//     res(1);
//   }
// };

// const thenable2 = {
//   then: function (res, rej) {
//     console.log('thenable');
//     res(2);
//   }
// };


// new MPromise((res, rej) => {
//   res(1);
// })
//
// MPromise.resolve(1)
//   .then(() => dasfsdf)
//   .then(d => d + 1)
//   .then(d => console.log(d))
//   .catch(err => console.log('handled error1111 => ', err))
//   .then(() => 'go on')
//   .then(d => {
//     console.log(d);
//     return dasdsa;
//   })
//   .then()
//   .catch(err => console.log('handled error2222 => ', err))
//   .then(d => console.log('', d))
//   .finally((data) => console.log('执行finally => ', data))

MPromise.all([
  timeout(500),
  timeout(600),
  timeout(700),
  timeout(400),
]).then(data => {
  console.log('这是结果', data)
}).catch(err => console.log('出错了，被捕捉了', err));