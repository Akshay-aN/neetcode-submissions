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
     * @return {boolean}
     */
    hasCycle(head: ListNode | null): boolean {
        if (!head || !head.next) {
            return false;
        }

        let slow: ListNode | null = head;
        let fast: ListNode | null = head;

        // Traverse the list with two pointers moving at different speeds
        while (fast && fast.next) {
            slow = slow!.next;          // Moves 1 step
            fast = fast.next.next;     // Moves 2 steps

            // If the pointers meet, a cycle exists
            if (slow === fast) {
                return true;
            }
        }

        // If fast reaches the end, no cycle exists
        return false;
        }
}
