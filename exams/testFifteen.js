// 输入一个链表，反转链表后，输出链表的所有元素。

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function ReverseList(pHead){
    var newHead, temp;
    if(!pHead){
        return null;
    }
    if(pHead.next === null){
        return pHead;
    } else {
        newHead = ReverseList(pHead.next);
    }
    temp = pHead.next;
    temp.next = pHead;
    pHead.next = null;
    temp = null;
    return newHead;
}