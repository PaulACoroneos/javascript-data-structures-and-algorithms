import { LinkedList } from '../linked-list';

describe('linkedList', () => {
    it('initializes a link list', () => {
        const ll = new LinkedList();
        expect(ll).toEqual({ head: null, size: 0 });
    });
});
