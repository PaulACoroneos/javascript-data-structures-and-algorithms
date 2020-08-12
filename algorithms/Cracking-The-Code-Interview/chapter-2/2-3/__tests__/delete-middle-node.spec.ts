import { LinkedList } from '../../linked-list/linked-list';
import deleteMiddleNode from '../delete-middle-node';

describe('deleteMiddleNode() ', () => {
    it('It handles case where we have a null middle node', () => {
        const ll = new LinkedList();
        deleteMiddleNode(ll.head);
        expect(ll).toMatchObject(ll);
    });
    it('It handles case where middle node is only node', () => {
        const ll = new LinkedList();
        ll.add(1);
        const middle = ll!.head!;
        deleteMiddleNode(middle);
        expect(ll).toMatchObject(ll);
    });
    it('It removes the middle node of an even sized linked list ', () => {
        const ll = new LinkedList();
        ll.add(1);
        ll.add(2);
        ll.add(3);
        ll.add(4);

        const newLL = new LinkedList();
        newLL.add(1);
        newLL.add(3);
        newLL.add(4);

        const middle = ll.head!.next!;

        deleteMiddleNode(middle);
        expect(ll).toMatchObject(newLL);
    });
    it('It removes the middle node of an odd sized linked list ', () => {
        const ll = new LinkedList();
        ll.add(1);
        ll.add(2);
        ll.add(3);
        ll.add(4);
        ll.add(5);

        const newLL = new LinkedList();
        newLL.add(1);
        newLL.add(2);
        newLL.add(4);
        newLL.add(5);

        const middle = ll.head!.next!.next!;
        deleteMiddleNode(middle);
        expect(ll).toMatchObject(newLL);
    });
});
