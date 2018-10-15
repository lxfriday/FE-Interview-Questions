const MPromise = require('../implementations/MPromise');

const timeout = (ms) => {
  return new MPromise(function (res) {
    setTimeout(() => {
      res(ms);
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
MPromise.reject(1)
  .then(d => d + 1)
  .then(d => console.log(d))
  .catch(err => console.log('handled error => ', err))
  .then(() => 'go on')
  .finally((data) => console.log('执行finally => ', data))
  .then(d => console.log('finally 之前传递的值', d)); 
