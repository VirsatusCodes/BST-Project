import {Node, Tree} from '../BST-Project/tree';

const oneTree = Tree([1,2,3]);
const twoTree = Tree([1,2]);
const threeTree = Tree([1,2,3,4,5,6,7,8,1,2,3,4,5,4,3,4,5,6,7,8]);

test('linked properly', () => {
    expect(Node);
    expect(Tree);
});

test('remove duplicate values', () => {
    expect(oneTree.removeDuplicates([1,2,3,3,4])).toStrictEqual([1,2,3,4])
});

test('mergeSort works', () => {
    expect(oneTree.mergeSort([2,3,4,7,4,1])).toStrictEqual([1,2,3,4,4,7])
});

test('can make a tree with 3 nodes', () => {
    expect(oneTree.getRoot().getLeft().getData()).toBe(1);
    expect(oneTree.getRoot().getRight().getData()).toBe(3);
});

test('can make a tree with 2 nodes', () => {
    expect(twoTree.getRoot().getData()).toBe(2);
    expect(twoTree.getRoot().getLeft().getData()).toBe(1);
    expect(twoTree.getRoot().getRight()).toBe(null)
});

test('works on bigger trees(8)', () => {
    expect(threeTree.getRoot().getData()).toBe(5);
    expect(threeTree.getRoot().getLeft().getRight().getData()).toBe(4);
    expect(threeTree.getRoot().getLeft().getRight().getRight()).toBe(null);
});