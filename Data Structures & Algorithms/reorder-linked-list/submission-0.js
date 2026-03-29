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
    reorderList(head) {
         let st = [];
    let itr = head;
    while (itr != null) {
        st.push(itr);
        itr = itr.next;
    }

    itr = head;
    let tmp;
    while (itr != null) { // 1
        tmp = itr.next; // 2 
        let top = st.pop();// 5
        console.log("top ", top, tmp, itr);

        if (itr === top) {
            itr.next = null;
            break;
        }

        if (tmp == top) {
            itr.next = top;
            itr.next.next = null
            break;
        }
        
        itr.next = top;
        itr.next.next = tmp;
        itr = itr.next.next;
    }
    }
}
