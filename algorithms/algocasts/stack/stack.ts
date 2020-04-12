export class Stack {
    data: any[];

    constructor(data = []) {
        this.data = data;
    }

    push(record: any) {
        this.data.push(record);
    }

    pop() {
        return this.data.pop();
    }

    peek() {
        return this.data[this.data.length - 1];
    }
}
