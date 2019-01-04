// 双向链表节点定义
function Node(element) {
  this.element = element;
  this.next = null;
  this.previous = null;
}
// 链表定义
function douDeLinkedList() {
  this.head = new Node('head');
}
// 查找节点
douDeLinkedList.prototype.find = function(item) {
  let currNode = this.head;
  while (currNode.element != item) {
    currNode = currNode.next;
  }
  return currNode
}
douDeLinkedList.prototype.insert = function(newElment, item) {
  let newNode = new Node(newElment);
  let current = this.find(item);
  newNode.next = current.next;
  newNode.previous = current;
  current.next = newNode;
}
// 删除某个节点
douDeLinkedList.prototype.remove = function(item) {
  let currNode = this.find(item);
  if (!(prevNode.next == null)) {
    currNode.previous.next = currNode.next;
    currNode.next.previous = currNode.previous;
    currNode.next = null;
    currNode.previous = null;
  }
}