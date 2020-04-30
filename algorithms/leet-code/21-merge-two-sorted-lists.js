//iterative soln'n
// const mergeTwoLists = function (l1, l2) {
//     const mergedList = new ListNode();
//     let mergedListPtr = mergedList;
//     while (l1 && l2) {
//         if (l1.val < l2.val) {
//             mergedListPtr.next = l1;
//             l1 = l1.next;
//         } else {
//             mergedListPtr.next = l2;
//             l2 = l2.next;
//         }
//         mergedListPtr = mergedListPtr.next;
//     }
//     mergedListPtr.next = l1 ? l1 : l2;
//     return mergedList.next;
// };
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = function (l1, l2) {
    if (!l1) return l2;
    if (!l2) return l1;
    if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
};
