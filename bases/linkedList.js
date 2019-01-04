// 节点
function Node(element) {
  this.element = element;
  this.next = null;
}
// 链表
function linkedList() {
  this.head = new Node('head');

}
// 查找节点
linkedList.prototype.find = function() {
  let currNode = this.head;
  while (currNode.element != item) {
    currNode = currNode.next;
  }
  return currNode
}
// 插入节点
linkedList.prototype.insert = function(newElement, item) {
  let newNode = new Node(newElement);
  let current = this.find(item);
  newNode.next = current.next;
  current.next = newNode;
}
// 显示所有节点
linkedList.prototype.display = function() {
  let currNode = this.head;
  while (!(currNode.next == null)) {
    console.log(currNode.next.element);
    currNode = currNode.next;
  }
}
// 检查下一个节点
linkedList.prototype.findPrevious = function(item) {
  let currNode = this.head;
  while (!(currNode.next == null)
    && (currNode.next.element != item)) {
      currNode = currNode.next;
  }
  return currNode;
}
// 删除某个节点
linkedList.prototype.remove = function(item) {
  let prevNode = this.findPrevious(item);
  if (!(prevNode.next == null)) {
    prevNode.next = prevNode.next.next;
  }
}
