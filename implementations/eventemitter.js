
function EventEmitter() {
  this.tasks = {};
}

EventEmitter.prototype = {
  constructor: EventEmitter,
  on: function (name, fn) {
    if (!this.tasks[name]) {
      this.tasks[name] = [];
    }
    this.tasks[name].push(fn);
  },
  once: function (name, fn) {
    if (!this.tasks[name]) {
      this.tasks[name] = [];
    }
    fn.tag = 'once';
    this.tasks[name].push(fn);
    //this.tasks[name][this.tasks[name].length-1].tag = 'once';
  },
  emit: function (name, args) {
    if (this.tasks[name] instanceof Array) {
      let task = this.tasks[name];
      for (let i = 0, len = task.length; i < len; i++) {
        args = Array.prototype.slice.call(arguments, 1);
        task[i].apply(this, args);
        //  debugger
        if (task[i].tag === 'once') {
          this.tasks[name].splice(i, 1)
        }
      }
    }
  },
  remove: function (name, fn) {
    if (this.tasks[name] instanceof Array) {
      for (var i = 0, len = this.tasks[name].length; i < len; i++) {
        if (fn === this.tasks[name][i]) {
          break;
        }
      }
      if (i < len) {
        this.tasks[name].splice(i, 1);
      }
    }
  }
}
