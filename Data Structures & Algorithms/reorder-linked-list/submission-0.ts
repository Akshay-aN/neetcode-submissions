/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head: ListNode | null): void {
        if (!head || !head.next || !head.next.next) return;
 
        let slow: ListNode | null = head;
        let fast: ListNode | null = head;

        while (fast && fast.next) {
            slow = slow.next!;
            fast = fast.next.next;
        }
 
        let secondHalfHead = slow.next;
        slow.next = null;  

        let prev: ListNode | null = null;
        let curr: ListNode | null = secondHalfHead;

        while (curr) {
            const nextTemp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = nextTemp;
        } 
 
        let first: ListNode | null = head;
        let second: ListNode | null = prev;

        while (second) {
            const temp1 = first!.next;
            const temp2 = second.next;

            first!.next = second;
            second.next = temp1;

            first = temp1;
            second = temp2;
        }
    }
}
