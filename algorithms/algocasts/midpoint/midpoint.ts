import { List } from '../linked-list/linked-list';

export const midpoint = (list: List) => {
    let slow = list.getFirst();
    let fast = list.getFirst();

    while (fast?.next && fast.next.next) {
        slow = slow?.next || null;
        fast = fast?.next.next;
    }
    return slow;
};
