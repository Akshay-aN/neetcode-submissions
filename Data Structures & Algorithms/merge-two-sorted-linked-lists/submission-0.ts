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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode {
        const dummy = new ListNode(-1);
        let current = dummy;

        // Loop through until one list runs completely empty
        while (list1 !== null && list2 !== null) {
            if (list1.val <= list2.val) {
                current.next = list1;
                list1 = list1.next; // Move list1 pointer forward
            } else {
                current.next = list2;
                list2 = list2.next; // Move list2 pointer forward
            }
            current = current.next; // Move the tail tracker forward
        }

        // Connect the remaining non-empty list elements
        current.next = list1 !== null ? list1 : list2;

        // Return the actual head of the merged list
        return dummy.next;
    }
}
