// 集合定义
function Set() {
  this.dataStore = [];
}
// 集合显示
Set.prototype.show = function() {
  return this.dataStore;
}
// 集合添加
Set.prototype.add = function(data) {
  if (this.dataStore.indexOf(data) < 0) {
    this.dataStore.push(data);
    return true;
  } else {
    return false;
  }
}
// 集合删除
Set.prototype.remove = function(data) {
  let pos = this.dataStore.indexOf(data);
  if (pos > -1) {
    this.dataStore.splice(pos, 1);
    return true;
  } else {
    return false;
  }
}
// 检查集合某个成员是否存在该集合中
Set.prototype.contains = function() {
  if (this.dataStore.indexOf(data) > -1) {
    return true;
  } else {
    return false;
  }
}
// 并集操作
Set.prototype.union = function() {
  let tempSet = new Set();
  for (let i = 0; i < this.dataStore.length; i++) {
    tempSet.add(this.dataStore[i]);
  }
  for (let i = 0; i < set.dataStore.length; i++) {
    if (!tempSet.contains(set.dataStore[i])) {
      tempSet.dataStore.push(set.dataStore[i]);
    }
  }
  return tempSet
}
// 交集操作
Set.prototype.intersect = function(set) {
  let tempSet = new Set();
  for (let i = 0; i < this.dataStore.length; i++) {
    if (set.contains(this.dataStore[i]));
  }
  return tempSet;
}