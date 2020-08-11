import { Node } from '../linked-list';

//method 1. recursive
// const kthToLast = (position: number, head: Node | null, length = 0): any => {
//     //error checking (position less than zero or linkedlist is empty)
//     if (position < 0 || !head) return undefined;

//     //increment length for every call
//     length++;
//     //define a holder for the node in list we iterate through
//     const node = kthToLast(position, head.next, length);
//     if (length === position) return head.element;
//     length--;
//     return node;
// };

//method 2. 2 pointer
const kthToLast = (position: number, node: Node | null) => {
    //error checking (position less than zero or linkedlist is empty)
    if (position < 0 || !node) return undefined;

    //We are going to us 2 pointer approach to get to end of list as fast as possible
    let ptr1 = node;
    let ptr2: Node | null = node;

    //offset ptr2 by what value we want to find
    while (position) {
        ptr2 = ptr2.next as Node;
        position--;
    }

    //now loop until ptr 2 falls off the end of the linked list
    while (ptr2) {
        ptr1 = ptr1?.next as Node; //skip one at a time. Cast to Node since we guarantee this will always exist
        ptr2 = ptr2?.next;
    }

    //we are at kth value return
    return ptr1.element;
};

export default kthToLast;
