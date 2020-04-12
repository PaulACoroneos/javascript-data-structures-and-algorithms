import { Queue } from '../queue/queue';

export const weave = (queue1: Queue, queue2: Queue) => {
    const queue = new Queue();
    while (queue1.peek() && queue2.peek()) {
        queue1.peek() && queue.add(queue1.remove());
        queue2.peek() && queue.add(queue2.remove());
    }
    return queue;
};
