interface Head {
  value: any;
  next: any;
}

export default class LinkedList {

  private head: Head;
  private tail: any;

  constructor(value: any) {
    this.head = { value: value, next: null };
    this.tail = this.head;
  }

  append(value: any) {
    const node = { value, next: null };
    if (!this.head.next) this.head.next = node;
    this.tail.next = node;
    this.tail = node;
    return this;
  }

  removeNode(value: any) {
    let currentNode = this.head;
    let previousNode = { value: null, next: null };
    while (currentNode) {
      if (currentNode.value === value) {
        break;
      }
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    if (!currentNode) return false;

    if (currentNode === this.head) {
      this.head = this.head.next;
      return;
    }
    previousNode.next = currentNode.next;
  }

  removeTail() {
    let currentNode = this.head;
    let previousNode = { value: null, next: null };

    while (currentNode) {
      if (!currentNode.next) break;
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    previousNode.next = null;
    this.tail = previousNode;
  }

  print() {
    const printArr = [];
    let currentNode = this.head;
    while (currentNode) {
      printArr.push(currentNode.value)
      currentNode = currentNode.next;
    }
    return printArr;
  }
}