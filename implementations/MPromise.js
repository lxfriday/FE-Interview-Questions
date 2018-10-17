/**
 * 模拟实现的 Promise
 * 包含：then、catch、finally 三个原型方法，resolve、reject、all、race 四个静态方法
 *
 * @author lxfriday
 * @email liu3248184446@outlook.com
 * @doc http://es6.ruanyifeng.com/#docs/promise
 */
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

      if ((resV != null) && (typeof resV.then === 'function')) {
        return resV.then(resolve, reject);
      }

      this.$state = MPromise._FULFILLED;
      this.$internalValue = resV;

      for (const { onFulfilled } of this.$chained) {
        onFulfilled(resV);
      }
    };

    const reject = (rejV) => {
      if (this.$state !== MPromise._PENDING) return;

      this.$state = MPromise._REJECTED;
      this.$internalValue = rejV;
      for (const { onRejected } of this.$chained) {
        onRejected(rejV);
      }
    };

    try {
      executor(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }

  then(onFulfilled, onRejected) {
    return new MPromise((resolve, reject) => {
      const _onFulfilled = resV => {
        try {
          if (onFulfilled) {
            let res = onFulfilled(resV);
            if (res instanceof MPromise) {
              res.then(resolve, reject);
            } else {
              resolve(res);
            }
          } else {
            resolve(resV);
          }
        } catch (err) {
          reject(err);
        }
      };

      const _onRejected = rejV => {
        try {
          // 添加了捕捉，则直接捕捉，再 resolve 到后面去
          if (onRejected) {
            let res = onRejected(rejV);
            if (res instanceof MPromise) {
              res.then(resolve);
            } else {
              resolve(res);
            }
          } else {
            // 否则继续 reject ，直到被捕捉
            reject(rejV);
          }
        } catch (err) {
          reject(err);
        }
      };

      if (this.$state === MPromise._FULFILLED) {
        if (onFulfilled) {
          _onFulfilled(this.$internalValue);
        } else {
          resolve(this.$internalValue);
        }
      } else if (this.$state === MPromise._REJECTED) {
        if (onRejected) {
          // 之前被 rejected ，则这一轮直接继续 rejected 传递下去，直到被 catch
          _onRejected(this.$internalValue);
        } else {
          reject(this.$internalValue);
        }
      } else {
        this.$chained.push({
          onFulfilled: _onFulfilled,
          onRejected: _onRejected,
        });
      }
    });
  }

  catch(onRejected) {
    return this.then(null, onRejected);
  }

  /**
   * finally 会执行一个函数，函数没有参数，同时会将前面 then 传递的状态和值往后面传递
   *
   * @param {function} cb 想要在 finally 里面执行的函数
   */
  finally(cb) {
    const P = this.constructor;
    return this.then(
      val => P.resolve(cb()).then(() => val),
      val => P.reject(cb()).then(() => val),
    );
  }
}

MPromise.resolve = function (resV) {
  return new MPromise(res => res(resV));
};

MPromise.reject = function (rejV) {
  return new MPromise((res, rej) => rej(rejV));
};

MPromise.all = function (pa) {
  const newPa = [].slice.call(pa).map(v => {
    if (v instanceof MPromise) {
      return v;
    }
    // 将不是 Promise 的参数转换成 Promise
    return MPromise.resolve(v);
  });
  let pc = MPromise.resolve(newPa[0]);
  const resArr = [];

  for (let i = 1; i <= newPa.length; i++) {
    pc = pc.then((res) => {
      resArr.push(res);
      return newPa[i];
    });
  }

  return pc
    .then(() => resArr);
};

MPromise.race = function (pa) {
  const newPa = [].slice.call(pa).map(v => {
    if (v instanceof MPromise) {
      return v;
    }
    // 将不是 Promise 的参数转换成 Promise
    return MPromise.resolve(v);
  });

  return new MPromise((res, rej) => {
    newPa.forEach(p => p.then(res, rej));
  });
};


MPromise._PENDING = 'PENDING';
MPromise._FULFILLED = 'FULFILLED';
MPromise._REJECTED = 'REJECTED';


module.exports = MPromise;

// typeof: number string boolean function object undefined symbol
// base: number string boolean null undefined object symbol
/**
 * @TODO
 * 1. [x] Promise.all
 * 2. Promise.race
 */
