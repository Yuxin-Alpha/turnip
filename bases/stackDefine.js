function Stack() {
  this.dataStore = [];
  this.top = 0;
}
// 入栈
Stack.prototype.push = function(element) {
  this.dataStore[this.top++] = element;
}
// 出栈
Stack.prototype.pop = function() {
  return this.dataStore[--this.top];
}
// 返回栈顶元素
Stack.prototype.peek = function() {
  return this.dataStore[this.top - 1];
}
// 栈长
Stack.prototype.len = function() {
  return this.top;
}
// 清空一个栈
Stack.prototype.clearStack = function() {
  this.top = 0;
}
// 进制转换
function mulBase(num, base) {
  let stackOne = new Stack();
  do {
    stackOne.push(num % base);
    num = Math.floor(num /= base);
  } while ( num > 0);
  let counters = '';
  while (stackOne.len() > 0) {
    counters += stackOne.pop();
  }
  return counters;
}
console.log(mulBase(32, 8));

// 判定回文
function isPalindrome(word) {
  let stackTwo = new Stack();
  for (let i = 0; i < word.length; i++) {
    stackTwo.push(word[i]);
  }
  let reWord = '';
  while (word.len() > 0) {
    reWord += stackTwo.pop();
  }
  if (word === reWord) {
    return true;
  } else {
    return false;
  }
}