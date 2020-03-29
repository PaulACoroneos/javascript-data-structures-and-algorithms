import Queue from '../queue'

describe('Queue', () => {
  test('Handles 1 item in the queue', () => {
    const queue = new Queue(10);
    queue.enqueue('hello')
    expect(queue.getFront()).toBe('hello');
    expect(queue.getLast()).toBe('hello');
    expect(queue.length()).toBe(1);
    expect(queue.isEmpty()).toBe(false);
    queue.clear();
    expect(queue.isEmpty()).toBe(true);
  })
  test('Handles 2 items in the queue', () => {
    const queue = new Queue(10);
    queue.enqueue('hello');
    queue.enqueue('world');
    expect(queue.getFront()).toBe('hello');
    expect(queue.getLast()).toBe('world');
    expect(queue.length()).toBe(2);
    expect(queue.isEmpty()).toBe(false);
    queue.dequeue();
    expect(queue.getFront()).toBe('world');
    expect(queue.getLast()).toBe('world');
  })
  test('print() works', () => {
    const queue = new Queue(10);
    queue.enqueue('hello');
    expect(queue.print()).toStrictEqual(['hello'])
    queue.dequeue();
    expect(queue.print()).toStrictEqual([])
  })
  test('Does not enqueue an item if queue is full', () => {
    const queue = new Queue(0);
    queue.enqueue('hello')
    expect(queue.enqueue('hello2')).toBe(false);
  })
  test('getFront() returns false if empty', () => {
    const queue = new Queue(0);
    expect(queue.getFront()).toBe(false);
  })
  test('getLast() returns false if empty', () => {
    const queue = new Queue(0);
    expect(queue.getLast()).toBe(false);
  })
  test('dequeue() returns false if empty', () => {
    const queue = new Queue(0);
    expect(queue.dequeue()).toBe(false);
  })
})