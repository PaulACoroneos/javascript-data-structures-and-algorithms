import LinkedList from '../linked-list';

describe('Queue', () => {
  test('Handles 1 item inserted into the linked list', () => {
    const linkedList = new LinkedList("hello");
    linkedList.insert("world");
  });
  test('Handles an element being removed from tail', () => {
    const linkedList = new LinkedList("hello");
    linkedList.insert("world");
    linkedList.removeTail();
  });
  test('Handles a specific element being removed', () => {
    const linkedList = new LinkedList("hello");
    linkedList.insert("world");
    linkedList.removeNode('world');
  });
})