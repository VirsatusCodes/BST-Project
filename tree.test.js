import {Node, Tree} from '../BST-Project/tree';

const testNode = Node('Wow it works');
const testTree = Tree([1,2,3,4,5,6,7]);

test('linked properly', () => {
    expect(Node);
    expect(Tree);
});

test('creates a node with an accessible value', () => {
    expect(testNode.getData()).toBe('Wow it works');
});

test('accurately chooses its root node', () => {
    expect(testTree.getLeft()).toBe(2);
});


/* test('accurately chooses its left and right value', () => {
    expect(testTree.getLeft()).toBe(2);
    expect(testTree.getLeft()).toBe(6);
}); */