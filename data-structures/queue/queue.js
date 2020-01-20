export default class Queue {

  constructor(size) {
    this._data = [];
    this._rear = 0;
    this._size = size;
  }

  enqueue(element) {
    if (this._rear > this._size) return console.error("Error: Cannot enqueue. Queue is full.");
    this._data[this._rear++] = element;
  }

  length() {
    return this._rear;
  }

  isEmpty() {
    return !this._rear;
  }

  getFront() {
    if (this.isEmpty()) return console.error("Error: Cannot getFront() as queue is empty");
    return this._data[0];
  }

  getLast() {
    if (this.isEmpty()) return console.error("Error: Cannot getLast() as queue is empty");
    return this._data[this._rear - 1];
  }

  dequeue() {
    if (this.isEmpty()) return console.error("Error: Cannot dequeue() as queue is empty");
    this._rear--;
    return this._data.shift();
  }

  print() {
    if (this.isEmpty()) return console.log("No elements to return. Queue is empty");
    return this._data.forEach(element => console.log(element));
  }

  clear() {
    this._data.length = 0;
    this._rear = 0;
    return;
  }
}