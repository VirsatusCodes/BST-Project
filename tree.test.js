import {Node, Tree} from '../BST-Project/tree';

const testNode = Node('Wow it works');
const oneTree = Tree([1,2,3]);
const twoTree = Tree([1,2]);
const threeTree = Tree([1,2,3,4,5,6,7]);
const fourTree = Tree([1,2,3,4,5,6,7,8]);
fourTree.prettyPrint(fourTree.getRoot());

test('linked properly', () => {
    expect(Node);
    expect(Tree);
});

test('creates a node with an accessible value', () => {
    expect(testNode.getData()).toBe('Wow it works');
});

test('accurately chooses its root node', () => {
    expect(oneTree.getRoot().getData()).toBe(2);
});

test('accurately chooses its left and right value', () => {
    expect(oneTree.getRoot().getLeft().getData()).toBe(1);
    expect(oneTree.getRoot().getRight().getData()).toBe(3);
});

test('can make a tree with 2 nodes', () => {
    expect(twoTree.getRoot().getData()).toBe(2);
    expect(twoTree.getRoot().getLeft().getData()).toBe(1);
    expect(twoTree.getRoot().getRight()).toBe(null)
})

test('works on bigger trees(7)', () => {
    expect(threeTree.getRoot().getData()).toBe(4);
    expect(threeTree.getRoot().getLeft().getData()).toBe(2);
    expect(threeTree.getRoot().getLeft().getLeft().getData()).toBe(1);
    expect(threeTree.getRoot().getRight().getData()).toBe(6);
})

test('works on bigger trees(8)', () => {
    expect(fourTree.getRoot().getData()).toBe(5);
    expect(fourTree.getRoot().getLeft().getRight().getData()).toBe(4);
    expect(fourTree.getRoot().getLeft().getRight().getRight()).toBe(null);
})