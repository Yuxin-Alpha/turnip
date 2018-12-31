// 输入一个链表，从尾到头打印链表每个节点的值

function ListNode(x){
    this.val = x;
    this.next = null;
}
function printListFromTailToHead(head){
    if(!head){
        return 0;
    } else {
        var arr = new Array();
        var curr = head;
        while(curr){
            arr.push(curr.val);
            curr = curr.next;
        }
        return arr.reverse();
    }
}