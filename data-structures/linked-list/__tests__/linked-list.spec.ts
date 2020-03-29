import LinkedList from '../linked-list';

describe('Queue', () => {
  test('Handles 1 item inserted into the linked list', () => {
    const linkedList = new LinkedList("hello");
    linkedList.append("world");
    expect(linkedList.print()).toStrictEqual(["hello", "world"]);
  });
  test('Handles an element being removed from tail', () => {
    const linkedList = new LinkedList("hello");
    linkedList.append("world");
    linkedList.removeTail();
    expect(linkedList.print()).toStrictEqual(["hello"]);
  });
  test('Handles a specific element being removed or not removed if doesnt expoist', () => {
    const linkedList = new LinkedList("hello");
    linkedList.append("world");
    linkedList.removeNode("world");
    expect(linkedList.print()).toStrictEqual(["hello"]);
    linkedList.append("world");
    linkedList.append("world3");
    linkedList.removeNode("hello");
    linkedList.removeNode("world3");
    expect(linkedList.print()).toStrictEqual(["world"]);
    linkedList.removeNode('hello2');
    expect(linkedList.print()).toStrictEqual(["world"]);
  });
})