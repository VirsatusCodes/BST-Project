import {Node, Tree} from '../BST-Project/tree';

const threeTree = Tree([1,2,3]);
const twoTree = Tree([1,2]);
const bigTree = Tree([1,2,3,4,5,6,7,8,1,2,3,4,5,4,3,4,5,6,7,8]);
const twentyTree = Tree([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]);

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
    expect(testTree.getRoot().getRight().getData()).toBe(6);
    expect(testTree.getRoot().getRight().getLeft().getData()).toBe(5);
    expect(testTree.getRoot().getRight().getRight()).toBe(null);
    testTree.insert(8);
    expect(testTree.getRoot().getRight().getRight().getData()).toBe(8);
    expect(testTree.getRoot().getRight().getLeft().getData()).toBe(5);
    testTree.insert(4);
    expect(testTree.getRoot().getRight().getLeft().getLeft().getData()).toBe(4);
    testTree.insert(9);
    expect(testTree.getRoot().getRight().getRight().getRight().getData()).toBe(9);
    testTree.insert(10);
    expect(testTree.getRoot().getRight().getRight().getRight().getRight().getData()).toBe(10);
    testTree.insert(11);
    testTree.insert(12);
    testTree.insert(7);
    /* testTree.prettyPrint(testTree.getRoot()); */
});
/* insert can leave trees unbalanced the func should have a check for if its unbalanced
and if so it should rebalance the tree using rebalance in future versions, it also
doesnt work properly itself if the tree is too unbalanced*/

/* remove has issues with unbalanced trees */
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
    /* removeTree2.prettyPrint(removeTree2.getRoot()) */
    removeTree2.remove(2);
    /* removeTree2.prettyPrint(removeTree2.getRoot()) */
    expect(removeTree2.getRoot().getLeft().getData()).toBe(1);
    removeTree2.remove(5);
    /* removeTree2.prettyPrint(removeTree2.getRoot()) */
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
    const sixTree = Tree([1,2,3,4,5,6]);
    const eightTree = Tree([1,2,3,4,5,6,7,8]);
test('can return all values in levelOrder traversal', () => {
    expect(threeTree.levelOrder()).toStrictEqual([2,1,3]);
    expect(sixTree.levelOrder()).toStrictEqual([4,2,6,1,3,5]);
    expect(eightTree.levelOrder()).toStrictEqual([5,3,7,2,4,6,8,1]);
});

const func = (inp) => {
    return inp[0] * 2
   };

test('levelOrder can take a function', () => {
    const eightTree = Tree([1,2,3,4,5,6,7,8]);
    expect(eightTree.levelOrder(func)).toBe(10);
});

test('preOrder returns values in correct order', () => {
    expect(sixTree.preOrder()).toStrictEqual([4,2,1,3,6,5]);
    expect(eightTree.preOrder()).toStrictEqual([5,3,2,1,4,7,6,8]);
});

test('preOrder can use a function properly', () => {
    expect(eightTree.preOrder(func)).toBe(10);
});

test('inOrder returns values in correct order', () => {
    expect(sixTree.inOrder()).toStrictEqual([1,2,3,4,5,6]);
    expect(eightTree.inOrder()).toStrictEqual([1,2,3,4,5,6,7,8]);
});

test('inOrder can use a function', () => {
    expect(eightTree.inOrder(func)).toBe(2);
});

test('postOrder returns values in correct order', () => {
    expect(sixTree.postOrder()).toStrictEqual([1,3,2,5,6,4]);
    expect(eightTree.postOrder()).toStrictEqual([1,2,4,3,6,8,7,5]);
});

test('postOrder can use a function', () => {
    expect(eightTree.postOrder(func)).toBe(2);
});

test('height returns correct path length', () => {
    expect(threeTree.height(threeTree.find(3))).toBe(0);
    expect(threeTree.height(threeTree.find(2))).toBe(1);
   /*  twentyTree.prettyPrint(twentyTree.getRoot()); */
    expect(twentyTree.height(twentyTree.find(9))).toBe(2);
    expect(twentyTree.height(twentyTree.find(6))).toBe(3);
    expect(twentyTree.height(twentyTree.find(11))).toBe(4);
});

test('depth returns correct path length', () => {
    expect(threeTree.depth(threeTree.find(2))).toBe(0);
    expect(threeTree.depth(threeTree.find(3))).toBe(1);
    /* twentyTree.prettyPrint(twentyTree.getRoot()); */
    expect(twentyTree.depth(twentyTree.find(6))).toBe(1);
    expect(twentyTree.depth(twentyTree.find(9))).toBe(2);
    expect(twentyTree.depth(twentyTree.find(10))).toBe(3);
    expect(twentyTree.depth(twentyTree.find(7))).toBe(4);
});

test('isBalanced can differentiate between a balanced and non-balanced tree', () => {
    const balancedTest = Tree ([1,2,3])
    expect(balancedTest.isBalanced()).toBe(true);
    balancedTest.insert(4);
    balancedTest.insert(5);
    balancedTest.insert(6);
    /* balancedTest.prettyPrint(balancedTest.getRoot()); */
    expect(balancedTest.isBalanced()).toBe(false);

});

test('rebalance works', () => {
    const balancedTest = Tree ([1,2,3])
    balancedTest.insert(4);
    balancedTest.insert(5);
    balancedTest.insert(6);
    balancedTest.prettyPrint(balancedTest.getRoot());
    expect(balancedTest.getRoot().getData()).toBe(2);
    balancedTest.rebalance();
    balancedTest.prettyPrint(balancedTest.getRoot());
    expect(balancedTest.getRoot().getData()).toBe(4);
});

test('BST driver script', () => {
    const randomInt= (min, max) => {
        return Math.ceil(Math.random() * (max - min) + min);
      };
      
      const randomArrValues = () => {
      
      let finalArr = []
      for (let i = randomInt(6, 15) ; i > 0 ; i--) {
        finalArr.push(randomInt(1, 99))
      }
      return finalArr
      }

    const scriptTree = Tree(randomArrValues());
    expect(scriptTree.isBalanced()).toBe(true);
    console.log(scriptTree.levelOrder());
    console.log(scriptTree.preOrder());
    console.log(scriptTree.postOrder());
    console.log(scriptTree.inOrder());
    scriptTree.insert(101);
    scriptTree.insert(102);
    scriptTree.insert(103);
    expect(scriptTree.isBalanced()).toBe(false);
    scriptTree.rebalance();
    expect(scriptTree.isBalanced()).toBe(true);
    console.log(scriptTree.levelOrder());
    console.log(scriptTree.preOrder());
    console.log(scriptTree.postOrder());
    console.log(scriptTree.inOrder());
});