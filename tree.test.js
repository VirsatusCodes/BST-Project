import {Node, Tree} from '../BST-Project/tree';

const threeTree = Tree([1,2,3]);
const twoTree = Tree([1,2]);
const bigTree = Tree([1,2,3,4,5,6,7,8,1,2,3,4,5,4,3,4,5,6,7,8]);
const testTree = Tree([1,2,3,5,6]);

test('linked properly', () => {
    expect(Node);
    expect(Tree);
});

test('remove duplicate values', () => {
    expect(threeTree.removeDuplicates([1,2,3,3,4])).toStrictEqual([1,2,3,4])
});

test('mergeSort works', () => {
    expect(threeTree.mergeSort([2,3,4,7,4,1])).toStrictEqual([1,2,3,4,4,7])
});

test('can make a tree with 3 nodes', () => {
    expect(threeTree.getRoot().getLeft().getData()).toBe(1);
    expect(threeTree.getRoot().getRight().getData()).toBe(3);
});

test('can make a tree with 2 nodes', () => {
    expect(twoTree.getRoot().getData()).toBe(2);
    expect(twoTree.getRoot().getLeft().getData()).toBe(1);
    expect(twoTree.getRoot().getRight()).toBe(null)
});

test('works on bigger trees(8)', () => {
    expect(bigTree.getRoot().getData()).toBe(5);
    expect(bigTree.getRoot().getLeft().getRight().getData()).toBe(4);
    expect(bigTree.getRoot().getLeft().getRight().getRight()).toBe(null);
});

test('can add 1 node to a tree in the right spot', () => {
    expect(testTree.getRoot().getData()).toBe(3);
    expect(testTree.getRoot().getRight().getData()).toBe(6)
    expect(testTree.getRoot().getRight().getLeft().getData()).toBe(5)
    expect(testTree.getRoot().getRight().getRight()).toBe(null)
    testTree.insert(7);
    expect(testTree.getRoot().getRight().getRight().getData()).toBe(7);
    expect(testTree.getRoot().getRight().getLeft().getData()).toBe(5);
    testTree.insert(4);
    expect(testTree.getRoot().getRight().getLeft().getLeft().getData()).toBe(4);
    testTree.insert(8);
    expect(testTree.getRoot().getRight().getRight().getRight().getData()).toBe(8);
    testTree.insert(9);
    expect(testTree.getRoot().getRight().getRight().getRight().getRight().getData()).toBe(9);
})