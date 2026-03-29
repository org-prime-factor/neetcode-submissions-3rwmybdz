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
     * @param {number} left
     * @param {number} right
     * @return {ListNode}
     */
    reverseBetween(head, left, right) {
            const st = [];
    let idx = 0;
    let itr = head;
    while (idx < right) {
        idx++;
        if (idx >= left && idx <= right) {
            st.push(itr.val);
        }
        itr = itr.next;
    }

    idx = 0;
    itr = head;
    while (idx < right) {
        idx++;
        if (idx >= left && idx <= right) {
            itr.val = st.pop();
        }
        itr = itr.next;
    }
    return head;
    }
}
