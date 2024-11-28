// This algorithm is used to find any loop in singly linked list
// /https://leetcode.com/problems/linked-list-cycle/?envType=study-plan-v2&envId=top-interview-150



function ListNode(val) {
    this.val = val;
    this.next = null;
}


var hasCycle = function(head) {
    let rabbit = head;
    let tortoise = head;
    while(rabbit && rabbit.next){
        rabbit = rabbit.next //rabbit started 1step
        if(rabbit === tortoise){
            return true;
        }
        rabbit = rabbit.next; //rabbit taken 2 step
        tortoise = tortoise.next; //tortoise running 1 step
    }
    return false;
    
};

let head = new ListNode(3);
head.next = new ListNode(2);
head.next.next = new ListNode(0);
head.next.next = new ListNode(-4);

hasCycle(head);