function Queue() {
  this.dataStore = [];

}
// 入队
Queue.prototype.enqueue = function() {
  this.dataStore.push(element);
}
// 出队
Queue.prototype.dequeue = function() {
  return this.dataStore.shift();
}
// 返回队首元素
Queue.prototype.front = function() {
  return this.dataStore[0];
}
// 返回队尾元素
Queue.prototype.back = function() {
  return this.dataStore[this.dataStore.length - 1]
}
// 优先队列问题
function Patient(name, code) {
  this.name = name;
  this.code = code;
}
// 优先队列出队重定义
Queue.prototype.spliceCode = function() {
  let entry = 0;
  for (let i = 0; i < this.dataStore.length; i++) {
    if (this.dataStore[i].code < this.dataStore[entry].code) {
      entry = i;
    }
  }
  return this.dataStore.splice(entry, 1);
}