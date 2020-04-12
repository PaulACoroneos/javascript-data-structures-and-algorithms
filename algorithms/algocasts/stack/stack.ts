export class Stack {
    data: any[];

    constructor(data = []) {
        this.data = data;
    }

    push(record: any) {
        this.data.push(record);
    }

    pop() {
        return this.data.shift();
    }

    peek() {
        return this.data[0];
    }
}
