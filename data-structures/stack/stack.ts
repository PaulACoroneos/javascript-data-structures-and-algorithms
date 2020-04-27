interface Storage {
    [key: number]: any;
}

export default class Stack {
    private _storage: Storage;
    private _length: number;

    constructor() {
        this._storage = {};
        this._length = 0;
    }

    push(value: any) {
        this._storage[this._length++] = value;
    }

    pop() {
        if (this._length < 1) return undefined;
        return delete this._storage[--this._length];
    }

    peek() {
        return this._storage[this._length - 1];
    }
}
