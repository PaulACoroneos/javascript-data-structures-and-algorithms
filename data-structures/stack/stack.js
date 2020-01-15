class Stack {
  constructor() {
    this._storage = {};
    this._length = 0;
  }

  push(value) {
    this._storage[this._length++] = value;
  }

  pop() {
    return delete this._storage[--this._length];
  }

  peek() {
    //console.log("hey in stack ", this._storage[this._length - 1]);
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


