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
})