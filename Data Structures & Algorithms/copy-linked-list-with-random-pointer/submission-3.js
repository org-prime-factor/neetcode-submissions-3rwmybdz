// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
         let itr = head;
    let nodeMap = new Map();
    if(itr ==null) return null;
    while (itr != null) {
        const node = new Node(itr.val);
        nodeMap.set(itr, node);
        itr = itr.next;
    }

    itr = head;
    while (itr != null) {
        let clonedNode = nodeMap.get(itr);

        if (itr.next == null) {
            clonedNode.next = null;
        } else {
            let nextNode = nodeMap.get(itr.next);
            clonedNode.next = nextNode;
        }
        if (itr.random == null) {
            clonedNode.random = null;
        } else {
            let rNode = nodeMap.get(itr.random)
            clonedNode.random = rNode;
        }
        itr = itr.next;
    }
    return nodeMap.get(head);
    }
}
