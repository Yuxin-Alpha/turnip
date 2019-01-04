// 定义字典
function Dictionary() {
  this.dataStore = new Array();
}
// 添加键值对
Dictionary.prototype.add = function(key, value) {
  this.dataStore[key] = value;
}
// 查找键值对
Dictionary.prototype.find = function(key) {
  return this.dataStore[key];
}
// 删除键值对
Dictionary.prototype.remove = function(key) {
  delete this.dataStore[key];
}
// 显示所有键值对
Dictionary.prototype.showAll = function() {
  Object.keys(this.dataStore).forEach(key => {
    console.log(key + '->' + this.dataStore[key]);
  })
}
let dicOne = new Dictionary();
dicOne.add('Mike', 18);
dicOne.add('Mary', 28);
dicOne.add('Fank', 25);
dicOne.add('Clement', 13);
dicOne.showAll();
dicOne.remove('Mary');
dicOne.showAll();

