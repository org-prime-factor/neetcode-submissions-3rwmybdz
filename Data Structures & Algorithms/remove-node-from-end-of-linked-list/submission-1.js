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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
         let len = 0;
    let itr = head;
    while (itr != null) {
        len++;
        itr = itr.next;
    }
    itr = head;
    let idx = len - n;
    if (idx == 0) {
        if (head.next != null)
            return head.next;
        return null
    }

    while (--idx) {
        itr = itr.next;
    }

    if (itr && itr.next) {
        itr.next = itr.next.next
    }

    return head;
    }
}
