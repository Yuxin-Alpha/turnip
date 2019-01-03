// 实现列表类
function List() {
  this.listSize = 0;
  this.pos = 0;
  this.dataStore = [];
  
}
// 给列表下一个元素增加新元素
List.prototype.append = function(element) {
  this.dataStore[this.listSize++] = element;
}
// 找寻列表中某一个元素
List.prototype.find = function(element) {
  for(let i = 0; i < this.dataStore.length; i++) {
    if (this.dataStore[i] === element ) {
      return i;
    }
  }
  return -1;
}
// 删除某一个元素
List.prototype.remove = function(element) {
  let eleIndex = this.find(element);
  if (foundAt > -1) {
    this.dataStore.splice(eleIndex, 1);
    this.listSize --;
    return true;
  }
  return false;
}
// 返回列表中元素的数量
List.prototype.length = function() {
  return this.listSize;
} 
// 插入一个元素
List.prototype.insert = function(element, after) {
  let insertIndex = this.find(after);
  if (insertIndex > -1) {
    this.dataStore.splice(insertIndex+1, 0, element);
    this.listSize ++;
    return true;
  }
  return false;
}
// 查询是否包含
List.prototype.contains = function(element) {
  for(let i = 0; i < this.dataStore.length; i++) {
    if (this.dataStore[i] == element) {
      return true;
    }
  }
  return false;
}