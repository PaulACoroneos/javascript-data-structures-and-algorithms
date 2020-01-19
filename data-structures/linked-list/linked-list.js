class LinkedList {
  constructor(value) {
    this.head = { value, next: null };
    this.tail = this.head;
  }

  insert(value) {
    const node = { value, next: null };
    this.tail.next = node;
    this.tail = node;
  }

  removeNode(value) {
    let currentNode = this.head;
    let previousNode;
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
    let previousNode;

    while (currentNode) {
      if (!currentNode.next) break;

      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    previousNode.next = null;
    this.tail = previousNode;
  }

  print() {
    let count = 0;
    let currentNode = this.head;
    while (currentNode) {
      console.log(`value at index ${count} is ${currentNode.value}`);
      count++;
      currentNode = currentNode.next;
    }
  }
}

const linkedList = new LinkedList("hello");

linkedList.print();
linkedList.insert("world");
linkedList.insert("Paul");
linkedList.print();
linkedList.removeNode("Paul");
linkedList.print();
linkedList.removeTail();
linkedList.print();