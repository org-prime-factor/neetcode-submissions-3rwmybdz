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
    hasCycle(head) {
        let slow = head;
        let fast = head;
        let cycle = false;
        while (fast && fast.next && fast.next.next) {
            fast = fast.next.next;
            if (fast == slow) {
                return true;
            }
            slow = slow.next;
        }
        return false;
    }
}
