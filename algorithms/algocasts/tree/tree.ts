export class TreeNode {
    data: any;
    children: TreeNode[];

    constructor(data: any) {
        this.data = data;
        this.children = [];
    }

    add(data: any) {
        this.children.push(new TreeNode(data));
    }

    remove(data: any) {
        this.children = this.children.filter((child) => child.data !== data);
    }
}

export class Tree {
    root: TreeNode | null;

    constructor() {
        this.root = null;
    }

    traverseBF(fn: Function) {
        const dataInFlight = [this.root];
        while (dataInFlight.length) {
            const element = dataInFlight.shift();
            dataInFlight.push(...(element?.children || []));
            fn(element);
        }
    }

    traverseDF(fn: Function) {
        const dataInFlight = [this.root];
        while (dataInFlight.length) {
            const element = dataInFlight.shift();
            dataInFlight.unshift(...(element?.children || []));
            fn(element);
        }
    }
}
