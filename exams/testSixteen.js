// 输入两个单调递增的链表，输出两个链表合成后的链表，当然我们需要合成后的链表满足单调不减规则。

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function Merge(pHead1, pHead2){
    if(!pHead1){
        return pHead2 ? pHead2 : null
    } else if(!pHead2){
        return pHead1;
    }
    // debugger;
    var curr1 = pHead1;
    var curr2 = pHead2;
    var result = new ListNode(-1);
    var curr = result;
    while(curr1 && curr2){
        if(curr1.val < curr2.val){
            curr.next = curr1;
            curr1 = curr1.next;
        } else{
            curr.next = curr2;
            curr2 = curr2.next;
        }
        curr = curr.next;
    }
    if(curr1){
        curr.next = curr1;
    }
    if(curr2){
        curr.next = curr2;
    }
    //防止内存泄露
    curr = result.next;
    result.next = null;
    result = curr;
    curr = curr1 = curr2 = null;
    return result;
}