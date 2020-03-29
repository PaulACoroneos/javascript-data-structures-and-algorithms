export default class Queue {

  private _data: any[];
  private _rear: number;
  private _size: number;

  constructor(size: number) {
    this._data = [];
    this._rear = 0;
    this._size = size;
  }

  enqueue(element: any) {
    if (this._rear > this._size) return false;
    this._data[this._rear++] = element;
    return true;
  }

  length() {
    return this._rear;
  }

  isEmpty() {
    return !this._rear;
  }

  getFront() {
    if (this.isEmpty()) return false;
    return this._data[0];
  }

  getLast() {
    if (this.isEmpty()) return false;
    return this._data[this._rear - 1];
  }

  dequeue() {
    if (this.isEmpty()) return false;
    this._rear--;
    this._data.shift();
    return true;
  }

  print() {
    return this._data;
  }

  clear() {
    this._data.length = 0;
    this._rear = 0;
    return;
  }
}