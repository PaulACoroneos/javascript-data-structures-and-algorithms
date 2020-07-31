/*
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const swapPairs = function (head) {
    const ptr1 = head;
    const ptr2 = ptr1?.next;
    const ptr3 = ptr2?.next;
    console.log('1,2', ptr1, ptr2);
    if (!ptr1 || !ptr2) return head;
    ptr2.next = ptr1;
    ptr1.next = swapPairs(ptr3);
    return ptr2;
};
