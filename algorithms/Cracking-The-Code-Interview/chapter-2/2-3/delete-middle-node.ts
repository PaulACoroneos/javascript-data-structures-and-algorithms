import { Node } from '../linked-list';

const deleteMiddleNode = (middle: Node | null) => {
    //error cases. middle is null or LL is of size 1
    if (middle === null || middle.next === null) return;
    //we dont have access to the head. So just update middle with the next node's value and pointer then point new middle "past" the next node
    middle.element = middle.next.element;
    middle.next = middle.next.next as Node;
};

export default deleteMiddleNode;
