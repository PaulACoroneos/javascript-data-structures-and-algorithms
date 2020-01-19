export default class Stack {
  constructor() {
    this._storage = {};
    this._length = 0;
  }

  push(value) {
    this._storage[this._length++] = value;
  }

  pop() {
    if (this._length < 1) return console.log("Cannot pop from a stack containing no elements");
    return delete this._storage[--this._length];
  }

  peek() {
    return this._storage[this._length - 1];
  }
}

var stack = new Stack();

stack.push("Hello");
stack.push("World");
stack.push("Paul");
stack.peek();
stack.pop();
stack.peek();
stack.pop();
stack.peek();
stack.push("Bye");
stack.peek();
stack.pop();
stack.pop();


