import { LinkedList } from '../../linked-list/linked-list';
import partition from '../partition';

describe('partition()', () => {
    it.skip('handles an empty LL', () => {
        const ll = new LinkedList();

        expect(partition(ll.head, 5)).toMatchObject(ll);
    });
    it.skip('handles LL of size 1 with partion value', () => {
        const ll = new LinkedList();
        ll.add(5);

        expect(partition(ll.head, 5)).toMatchObject(ll);
    });
    it.skip('handles LL of size 2 with partion value less than other value', () => {
        const ll = new LinkedList();
        ll.add(5);
        ll.add(10);

        expect(partition(ll.head, 5)).toMatchObject(ll);
    });
    it.skip('handles LL of size 2 with partion value greater than other value', () => {
        const ll = new LinkedList();
        ll.add(10);
        ll.add(5);

        expect(partition(ll.head, 5)).toMatchObject(ll);
    });
    it('handles LL of size 5 with values greater than or less than partition value', () => {
        const ll = new LinkedList();
        ll.add(10);
        ll.add(5);
        ll.add(1);
        ll.add(7);
        ll.add(4);

        const resultLL = new LinkedList();
        resultLL.add(4);
        resultLL.add(1);
        resultLL.add(10);
        resultLL.add(5);
        resultLL.add(7);

        expect(partition(ll.head, 5)).toMatchObject(resultLL.head!);
    });
});
