/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    // const set = new Set();

    // let dummy = head;

    // while (dummy !== null) {
    //     if (set.has(dummy)) {
    //         return true;
    //     }

    //     set.add(dummy);
    //     dummy = dummy.next;
    // }

    // return false;

    const dummy = new ListNode(0);
    dummy.next = head;

    let slow = dummy, fast = dummy;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            return true;
        }
    }

    return false;
};