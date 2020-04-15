export class BSTNode {
    data: any;
    left: BSTNode | null;
    right: BSTNode | null;

    constructor(data: any = null) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

    insert(data: any) {
        if (data < this.data && this.left) {
            this.left.insert(data);
        } else if (data < this.data) {
            this.left = new BSTNode(data);
        } else if (data > this.data && this.right) {
            this.right.insert(data);
        } else if (data > this.data) {
            this.right = new BSTNode(data);
        }
        return null;
    }

    contains(data: any): null | BSTNode {
        if (this.data === data) return this;
        if (data < this.data && this.left) return this.left.contains(data);
        if (data > this.data && this.right) return this.right.contains(data);
        return null;
    }
}

export const validate = (node: BSTNode, min: number | null = null, max: number | null = null) => {
    if (max !== null && node.data > max) return false;
    if (min !== null && node.data < min) return false;
    if (node.left && !validate(node.left, min, node.data)) return false;
    if (node.right && !validate(node.right, node.data, max)) return false;
    return true;
};
