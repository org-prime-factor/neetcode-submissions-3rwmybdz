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
    mergeTwoLists(list1, list2) {
         let list = null;
    let head = null;
    let head1 = list1;
    let head2 = list2;
    while (head1 != null && head2 != null) {
        const node = new ListNode();
        if (list == null) {
            list = node;
            head = list;
        } else {
            list.next = node;
            list = list.next;
        }
        if (head1.val <= head2.val) {
            list.val = head1.val
            head1 = head1.next;
        } else {
            list.val = head2.val
            head2 = head2.next;
        }
    }

    while (head1 != null) {
        const node = new ListNode();
        if (list == null) {
            list = node;
            head = list;
        } else {
            list.next = node;
            list = list.next;
        }
        list.val = head1.val;
        head1 = head1.next;
    }

    while (head2 != null) {
        const node = new ListNode();
        if (list == null) {
            list = node;
            head = list;
        } else {
            list.next = node;
            list = list.next;
        }
        list.val = head2.val;
        head2 = head2.next;
    }

    return head;
    }
}
