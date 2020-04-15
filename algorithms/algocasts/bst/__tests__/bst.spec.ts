import { BSTNode, validate } from './../bst';
test('BSTNode is a constructor', () => {
    expect(typeof BSTNode.prototype.constructor).toEqual('function');
});

test('BSTNode can insert correctly', () => {
    const node = new BSTNode(10);
    node.insert(5);
    node.insert(15);
    node.insert(17);

    expect(node.left?.data).toEqual(5);
    expect(node.right?.data).toEqual(15);
    expect(node.right?.right?.data).toEqual(17);
});

test('Contains returns node with the same data', () => {
    const node = new BSTNode(10);
    node.insert(5);
    node.insert(15);
    node.insert(20);
    node.insert(0);
    node.insert(-5);
    node.insert(3);

    const three = node.left?.left?.right;
    expect(node.contains(3)).toEqual(three);
});

test('Contains returns null if value not found', () => {
    const node = new BSTNode(10);
    node.insert(5);
    node.insert(15);
    node.insert(20);
    node.insert(0);
    node.insert(-5);
    node.insert(3);

    expect(node.contains(9999)).toEqual(null);
});

test('Validate recognizes a valid BST', () => {
    const n = new BSTNode(10);
    n.insert(5);
    n.insert(15);
    n.insert(0);
    n.insert(20);

    expect(validate(n)).toEqual(true);
});

test('Validate recognizes an invalid BST', () => {
    const n = new BSTNode(10);
    n.insert(5);
    n.insert(15);
    n.insert(0);
    n.insert(20);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    n.left!.left!.right = new BSTNode(999);

    expect(validate(n)).toEqual(false);
});
