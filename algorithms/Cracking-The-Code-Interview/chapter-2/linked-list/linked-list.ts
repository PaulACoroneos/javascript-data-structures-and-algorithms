export class Node {
    element: any;
    next: null | Node;
    constructor(element: any) {
        this.element = element;
        this.next = null;
    }
}

export class LinkedList {
    head: null | Node;

    constructor(head = null) {
        this.head = head;
    }

    add(element: any) {
        const node = new Node(element);

        if (!this.head) {
            this.head = node;
            return this.head;
        }

        let tail = this.head;
        while (tail?.next !== null) {
            tail = tail?.next;
        }
        tail.next = node;

        return this.head;
    }
}
