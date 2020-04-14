import { List } from '../linked-list/linked-list';

export const fromLast = (list: List, indexFromLast: number) => {
    let slow = list.getFirst();
    let fast = list.getFirst();

    for (let i = 0; i < indexFromLast; i++) {
        fast = fast?.next || null;
    }
    while (fast?.next) {
        slow = slow?.next || null;
        fast = fast?.next || null;
    }

    return slow;
};
