/**
 * 观察者模式-例子
 */

// DownloadTask
function DownloadTask(id) {
  this.id = id;
  this.loaded = false;
  this.url = null;
}

DownloadTask.prototype.finish = function(url) {
  this.loaded = true;
  this.url = url;
  console.log('Task ' + this.id + ' load data from ' + url);
};

// DownloadTaskList
function DownloadTaskList() {
  this.downloadTaskList = [];
}

DownloadTaskList.prototype.getCount = function() {
  return this.downloadTaskList.length;
};

DownloadTaskList.prototype.get = function(index) {
  return this.downloadTaskList[index];
};

DownloadTaskList.prototype.add = function(obj) {
  return this.downloadTaskList.push(obj);
};

DownloadTaskList.prototype.remove = function(obj) {
  const downloadTaskCount = this.downloadTasks.getCount();
  while (i < downloadTaskCount) {
    if (this.downloadTaskList[i] === obj) {
      this.downloadTaskList.splice(i, 1);
      break;
    }
    i++;
  }
};

// DataHub
function DataHub() {
  this.downloadTasks = new DownloadTaskList();
}

DataHub.prototype.addDownloadTask = function(downloadTask) {
  this.downloadTasks.add(downloadTask);
};

DataHub.prototype.removeDownloadTask = function(downloadTask) {
  this.downloadTasks.remove(downloadTask);
};

DataHub.prototype.notify = function(url) {
  const downloadTaskCount = this.downloadTasks.getCount();
  for (var i = 0; i < downloadTaskCount; i++) {
    this.downloadTasks.get(i).finish(url);
  }
};


var dataHub = new DataHub();
var downloadTask1 = new DownloadTask(1);
var downloadTask2 = new DownloadTask(2);

dataHub.addDownloadTask(downloadTask1);
dataHub.addDownloadTask(downloadTask2);

dataHub.notify('http://somedomain.someaddress');
