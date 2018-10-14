// 三种状态：PENDING、FULFILLED、REJECTED
class MPromise {
  constructor(executor) {
    if (typeof executor !== 'function') {
      throw new Error('executor must be a function!');
    }

    this.$state = MPromise._PENDING;
    this.$chained = [];

    const resolve = (resV) => {
      if (this.$state !== MPromise._PENDING) return;

      if (resV !== null && resV.then === 'function') {
        return res.then(resolve, reject);
      }

      this.$state = MPromise._FULFILLED;
      this.$internalValue = resV;

      for (const { onFulfilled } of this.$chained) {
        onFulfilled(resV);
      }
    };

    function reject(rejV) {
      if (this.$state !== MPromise._PENDING) return;

      this.$state = MPromise._REJECTED;
      this.$internalValue = rejV;

      for (const { onRejected } of this.$chained) {
        onRejected(rejV);
      }
    };

    try {
      executor(resolve.bind(this), reject.bind(this));
    } catch (err) {
      console.log('catch err => ', err);
      reject(err);
    }
  }

  then(onFulfilled, onRejected) {
    const ret = new MPromise((resolve, reject) => {
      const _onFulfilled = resV => {
        try {
          resolve(onFulfilled(resV));
        } catch (err) {
          reject(err);
        }
      };

      const _onRejected = rejV => {
        try {
          reject(onRejected(rejV));
        } catch (err) {
          reject(err);
        }
      };

      if (this.$state === MPromise._FULFILLED) {
        _onFulfilled(this.$internalValue);
      } else if (this.$state === MPromise._REJECTED) {
        _onRejected(this.$internalValue);
      } else {
        this.$chained.push({
          onFulfilled: _onFulfilled,
          onRejected: _onFulfilled,
        });
      }
    });


    return ret;
  }
}

MPromise._PENDING = 'PENDING';
MPromise._FULFILLED = 'FULFILLED';
MPromise._REJECTED = 'REJECTED';

const timeout = (ms) => {
  return new MPromise(function(res) {
    // setTimeout(() => {
      res(ms);
    // }, ms);
  });
};

timeout(3000).then((t) => {
  console.log(t);
  return timeout(1000);
}).then((t) => {
  console.log(t);
  return timeout(2000);
}).then((t => console.log(t)));
 