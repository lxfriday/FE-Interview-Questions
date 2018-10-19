/**
 * 发布订阅模式-例子
 * 发布订阅模式多了一个 channel ，发布者和订阅者解耦了
 */

// DataHub
function DataHub() {}

DataHub.prototype.notify = function(url, callback) {
  callback(url);
};

// DownloadManager
function DownloadManager() {
  this.events = {};
  this.uId = -1;
}

DownloadManager.prototype.publish = function(eventType, url) {
  if (!this.events[eventType]) {
    return false;
  }
  var subscribers = this.events[eventType],
    count = subscribers ? subscribers.length : 0;
  while (count--) {
    var subscriber = subscribers[count];
    // 触发对应的类型的事件
    subscriber.handler(eventType, subscriber.taskId, url);
  }
};

DownloadManager.prototype.subscribe = function(eventType, handler) {
  if (!this.events[eventType]) {
    this.events[eventType] = [];
  }
  var taskId = (++this.uId).toString();
  this.events[eventType].push({
    taskId: taskId,
    handler: handler
  });

  return taskId;
};

var dataHub = new DataHub();

var downloadManager = new DownloadManager();

var dataLoader = function(eventType, taskId, url) {
  console.log('Task ' + taskId + ' load data from ' + url);
};

var downloadTask1 = downloadManager.subscribe('dataReady', dataLoader);

dataHub.notify('http://somedomain.someaddress', function(url){
  downloadManager.publish('dataReady', url);
});
