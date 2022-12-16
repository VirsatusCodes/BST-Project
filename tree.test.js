import {Node, Tree} from '../BST-Project/tree';

const threeTree = Tree([1,2,3]);
const twoTree = Tree([1,2]);
const bigTree = Tree([1,2,3,4,5,6,7,8,1,2,3,4,5,4,3,4,5,6,7,8]);

test('linked properly', () => {
    expect(Node);
    expect(Tree);
});

test('setRoot works', () => {
    const rootTest = Tree([1]);
    expect(rootTest.getRoot().getData()).toBe(1);
    rootTest.setRoot(null);
    expect(rootTest.getRoot()).toBe(null);
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
    const testTree = Tree([1,2,3,5,6]);
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
});

test('can delete a node targeted based on value that has no children', () => {
    const removeTree = Tree([1,2,3,4]);
    expect(removeTree.getRoot().getRight().getData()).toBe(4);
    removeTree.remove(4);
    expect(removeTree.getRoot().getRight()).toBe(null);
    removeTree.remove(1);
    expect(removeTree.getRoot().getLeft().getLeft()).toBe(null);
    removeTree.remove(2);
    expect(removeTree.getRoot().getLeft()).toBe(null);
    removeTree.remove(3);
    expect(removeTree.getRoot()).toBe(null);
});

test('can delete a node that has 1 child and alter the tree accordingly', () => {
    const removeTree2 = Tree([1,2,3,4,5]);
    removeTree2.remove(2);
    expect(removeTree2.getRoot().getLeft().getData()).toBe(1);
    removeTree2.remove(5);
    expect(removeTree2.getRoot().getRight().getData()).toBe(4);
});

test('can delete a node that has 2 childen and alter the tree properly', () => {
    const removeTree3 = Tree([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]);
    expect(removeTree3.getRoot().getRight().getData()).toBe(13);
    expect(removeTree3.find(15).getLeft().getData()).toBe(14);
    removeTree3.remove(13);
    expect(removeTree3.getRoot().getRight().getData()).toBe(14);
    expect(removeTree3.find(15).getLeft()).toBe(null)
});

test('can find a node and return it to query instance', () => {
    expect(threeTree.find(3)).toMatchObject(threeTree.getRoot().getRight());
    expect(Object.is(threeTree.find(3), threeTree.getRoot().getRight())).toBe(true);
    expect(threeTree.find(3)).toBe(threeTree.getRoot().getRight());
    expect(threeTree.find(3).getData()).toBe(3);
    /* thought my object comparing was done wrong and in the process
    learned a few different ways to compare objects, leaving them here
    for reference*/
})

test('can return all values in levelOrder trave rsal', () => {
    expect(threeTree.levelOrder()).toStrictEqual([2,1,3]);
    const levelTree = Tree([1,2,3,4,5,6]);
    expect(levelTree.levelOrder()).toStrictEqual([4,2,6,1,3,5]);
    const levelTree2 = Tree([1,2,3,4,5,6,7,8]);
    expect(levelTree2.levelOrder()).toStrictEqual([5,3,7,2,4,6,8,1]);
});

test('levelOrder can take a function', () => {
    const func = (inp) => {
     return inp
    };
    const levelTree2 = Tree([1,2,3,4,5,6,7,8]);
    expect(levelTree2.levelOrder(func)).toStrictEqual([5,3,7,2,4,6,8,1]);
});