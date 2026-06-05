
// Definition for singly-linked list.
// class ListNode {
//     val: number;
//     next: ListNode | null;
//     constructor(val = 0, next = null) {
//         this.val = val;
//         this.next = next;
//     }
// }
 

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head: ListNode | null): ListNode {
        let prev: ListNode | null = null;
        let current: ListNode | null = head;

        while (current !== null) {
            const nextNode: ListNode | null = current.next; 
            current.next = prev;                            
            prev = current;                                 
            current = nextNode;                             
        }

        return prev;
    }
}
