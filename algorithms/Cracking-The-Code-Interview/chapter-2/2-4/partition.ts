import { Node } from '../linked-list/linked-list';

const partition = (node: Node | null, partitionNum: number) => {
    if (node === null) return;

    let ptr: Node | null = node;
    let prevPtr = node;

    //we are going to work from left to right in LL
    while (ptr) {
        //if element in node has value less than partition value move it to front of list
        if (ptr.element < partitionNum) {
            //define new node for new head
            const newHead = new Node(ptr.element);
            newHead.next = node; //set new node next to existing head
            node = newHead; //post start of list to new head
            prevPtr.next = ptr.next;
        }
        prevPtr = ptr;
        ptr = ptr.next;
    }
    return node;
};
export default partition;
