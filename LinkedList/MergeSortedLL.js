/*
Merge two sorted linked lists and return it as a sorted list. 
The list should be made by splicing together the nodes of the first two lists.
Reference: https://leetcode.com/problems/merge-two-sorted-lists/
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */



 var mergeTwoLists = function(l1, l2) {
    let result=new ListNode(0,null);
    let res=result;
    if(!l1 && !l2) return result.next; //if both lists empty
    
    let temp1,temp2;
    if(l1) temp1=l1;    //checking for list empty cases
    else return l2;
    if(l2) temp2=l2;
    else return l1;
    
    while(temp1)
        {
            while(temp2)
                {
                if(temp2.val>temp1.val)
                {
                    break;
                }
                    res.next = new ListNode(temp2.val,null);
                    res=res.next;
                    temp2 =temp2.next;
                }
            
            res.next = new ListNode(temp1.val,null);
            res=res.next;
            temp1=temp1.next;
        }
    while(temp2){    //putting remaining element of second list into the result list
        
        res.next = new ListNode(temp2.val,null);
         res=res.next;
        temp2 =temp2.next;

    }
    
    return result.next;
    
};