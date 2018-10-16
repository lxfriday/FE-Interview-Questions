/**
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
    const ret = new MPromise((resolve, reject) => {
      const _onFulfilled = resV => {
        try {
          let res = onFulfilled(resV);
          if (res instanceof MPromise) {
            res.then(resolve);
          } else {
            resolve(res);
          }
        } catch (err) {
          reject(err);
        }
      };

      const _onRejected = rejV => {
        try {
          let res = onRejected(rejV);
          if (res instanceof MPromise) {
            res.then(resolve);
          } else {
            resolve(res);
          }
        } catch (err) {
          reject(err);
        }
      };

      if (this.$state === MPromise._FULFILLED) {
        if (onFulfilled) {
          _onFulfilled(this.$internalValue);
        } else {
          resolve(res);
        }
      } else if (this.$state === MPromise._REJECTED) {
        if (onRejected) {
          // 之前被 rejected ，则这一轮直接继续 rejected 传递下去，直到被 catch
          _onRejected(this.$internalValue);
        } else {
          reject(err);
        }
      } else {
        this.$chained.push({
          onFulfilled: _onFulfilled,
          onRejected: _onRejected,
        });
      }
    });

    return ret;
  }

  catch(onRejected) {
    return this.then(null, onRejected);
  }

  finally(cb) {
    const P = this.constructor;
    return this.then(
      val => P.resolve(cb()).then(() => val),
      val => P.reject(cb()).then(() => val),
    );
  }
}

MPromise.resolve = function(resV) {
  return new MPromise(res => res(resV));
}

MPromise.reject = function (rejV) {
  return new MPromise((res, rej) => rej(rejV));
}


MPromise._PENDING = 'PENDING';
MPromise._FULFILLED = 'FULFILLED';
MPromise._REJECTED = 'REJECTED';


module.exports = MPromise;

// typeof: number string boolean function object undefined symbol
// base: number string boolean null undefined object symbol
