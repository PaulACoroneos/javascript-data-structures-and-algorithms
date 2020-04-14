import { TreeNode } from '../tree/tree';

export const levelWidth = (node: TreeNode) => {
    const inFlightArr = [node, 's'];
    const levelCount = [0];
    while (inFlightArr.length > 1) {
        const node = inFlightArr.shift();
        if (node === 's') {
            levelCount.push(0);
            inFlightArr.push('s');
        } else {
            //TODO: Any is used here because original implementation always assumed we only have nodes
            inFlightArr.push(...((node as any)?.children || []));
            levelCount[levelCount.length - 1]++;
        }
    }
    return levelCount;
};
