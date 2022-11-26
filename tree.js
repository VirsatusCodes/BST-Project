export{Node, Tree};



const Node = (inp) => {
    let data = inp || null;
    let left = null;
    let right = null;
    const getData = () => data;
    const getLeft = () => left;
    const getRight = () => right;
    const setLeft = (inp) => left = inp;
    const setRight = (inp) => right = inp;

    return {getData, getLeft, getRight, setLeft, setRight}
}

/* will first test with a sorted array with no dupes, then incorporate
unsorted arrays after. */

const Tree = (arr) => {

const root = buildTree();

const buildTree = () => {

}

const prettyPrint = (node, prefix = '', isLeft = true) => {
    if (node.getRight() !== null) {
      prettyPrint(node.getRight(), `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    if (node.getLeft() !== null) {
      prettyPrint(node.getLeft(), `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
  }

return {prettyPrint, root}
}