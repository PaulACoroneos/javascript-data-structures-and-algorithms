import { circular } from './../circular';
import { List, ListNode } from '../../linked-list/linked-list';

test('circular function is defined', () => {
    expect(typeof circular).toEqual('function');
});

test('circular detects circular linked lists', () => {
    const l = new List();
    const a = new ListNode('a');
    const b = new ListNode('b');
    const c = new ListNode('c');

    l.head = a;
    a.next = b;
    b.next = c;
    c.next = b;

    expect(circular(l)).toEqual(true);
});

test('circular detects circular linked lists linked at the head', () => {
    const l = new List();
    const a = new ListNode('a');
    const b = new ListNode('b');
    const c = new ListNode('c');

    l.head = a;
    a.next = b;
    b.next = c;
    c.next = a;

    expect(circular(l)).toEqual(true);
});

test('circular detects non-circular linked lists', () => {
    const l = new List();
    const a = new ListNode('a');
    const b = new ListNode('b');
    const c = new ListNode('c');

    l.head = a;
    a.next = b;
    b.next = c;
    c.next = null;

    expect(circular(l)).toEqual(false);
});
