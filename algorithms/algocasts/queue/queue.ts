export class Queue {
    data: any[];

    constructor(data = []) {
        this.data = data;
    }

    add(record: any) {
        this.data.unshift(record);
    }

    remove() {
        return this.data.pop();
    }
}
