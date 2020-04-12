import { Stack } from '../stack/stack';

export class QueueFromStack {
    stack1: Stack;
    stack2: Stack;

    constructor() {
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    }

    add(record: any) {
        this.stack1.push(record);
    }

    remove() {
        while (this.stack1.peek()) {
            this.stack2.push(this.stack1.pop());
        }
        const val = this.stack2.pop();
        while (this.stack2.peek()) {
            this.stack1.push(this.stack2.pop());
        }
        return val;
    }

    peek() {
        while (this.stack1.peek()) {
            this.stack2.push(this.stack1.pop());
        }
        const val = this.stack2.peek();
        while (this.stack2.peek()) {
            this.stack1.push(this.stack2.pop());
        }
        return val;
    }
}
