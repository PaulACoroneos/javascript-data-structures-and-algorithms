export class ListNode {
    data: any;
    next: ListNode | null;

    constructor(data: string | number | boolean | object, next?: ListNode | null) {
        this.data = data;
        this.next = next || null;
    }
}

export class List {
    head: ListNode | null;

    constructor() {
        this.head = null;
    }

    insertFirst(data: any): void {
        this.head = new ListNode(data, this.head);
    }

    size() {
        let node = this.head;
        let count = 0;
        while (node) {
            count++;
            node = node.next;
        }
        return count;
    }

    getFirst(): ListNode | null {
        return this.head;
    }

    getLast(): ListNode | null {
        let node = this.head;
        while (node && node.next !== null) {
            node = node.next;
        }
        return node;
    }

    clear(): void {
        this.head = null;
    }

    removeFirst(): void {
        this.head = this.head?.next || null;
    }
    removeLast(): void {
        let node = this.head;
        if (!node) return;
        if (!node.next) this.head = null;
        while (node && node.next && node.next.next !== null) {
            node = node.next;
        }
        node.next = null;
    }
    insertLast(data: any) {
        const last = this.getLast();
        if (!last) {
            this.head = new ListNode(data);
        } else {
            last.next = new ListNode(data);
        }
    }
    getAt(index: number) {
        let node = this.head;
        let count = 0;
        while (node) {
            if (count === index) {
                return node;
            }
            node = node.next;
            count++;
        }
        return null;
    }
    removeAt(index: number) {
        if (index === 0) {
            if (!this.head) return;
            this.head = this.head.next;
            return;
        }

        const previous = this.getAt(index - 1);

        if (!previous || !previous.next) {
            return;
        }
        previous.next = previous.next.next;
    }
    insertAt(data: any, index: number) {
        if (index === 0) {
            this.insertFirst(data);
        }
        const previous = this.getAt(index - 1);
        if (!previous || !previous.next) {
            this.insertLast(data);
            return;
        }
        const node = new ListNode(data, previous.next);
        previous.next = node;
    }
    forEach(fn: Function) {
        let node = this.head;
        let counter = 0;
        while (node) {
            fn(node, counter);
            node = node.next;
            counter++;
        }
    }

    *[Symbol.iterator]() {
        let node = this.head;
        while (node) {
            yield node;
            node = node.next;
        }
    }
}
