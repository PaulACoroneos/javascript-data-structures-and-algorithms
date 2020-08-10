import { LinkedList } from '../../linked-list/linked-list';
import removeDupes from '../remove-dupes';

describe('removeDupes()', () => {
    it('handles an empty LL', () => {
        const ll = new LinkedList();
        expect(removeDupes(ll)).toMatchObject(ll);
    });
    it('handles a LL with 1 element', () => {
        const ll = new LinkedList();
        ll.add(1);
        expect(removeDupes(ll)).toMatchObject(ll);
    });
    it('handles a LL with 3 elements', () => {
        const ll = new LinkedList();
        ll.add(1);
        ll.add(2);
        ll.add(1);
        const dedupedLL = new LinkedList();
        dedupedLL.add(1);
        dedupedLL.add(2);

        const deduped = removeDupes(ll);
        expect(deduped).toMatchObject(dedupedLL);
    });
});
