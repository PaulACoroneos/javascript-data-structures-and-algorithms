import kthToLast from '../kth-to-last';
import { LinkedList } from '../../linked-list';

describe('kth to last', () => {
    it('returns undefined kth is < 0', () => {
        const ll = new LinkedList();
        expect(kthToLast(-1, ll.head)).toBe(undefined);
    });
    it('returns undefined if list is empty', () => {
        const ll = new LinkedList();
        expect(kthToLast(5, ll.head)).toBe(undefined);
    });
    it('returns undefined if kth is greater than LL length', () => {
        const ll = new LinkedList();
        expect(kthToLast(5, ll.head)).toBe(undefined);
    });
    it('returns 4 for LL of size 3 returning 2nd to last element', () => {
        const ll = new LinkedList();
        ll.add(1);
        ll.add(4);
        ll.add(3);
        expect(kthToLast(2, ll.head)).toBe(4);
    });
});
