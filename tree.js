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


const buildTree = (arr) => {

if (arr.length === 0) {
  return null
}
 
if(arr.length === 1) {
  const lastNode = Node(arr[0]);
  return lastNode;
}
const mid = Math.floor(arr.length/2);
const left = arr.slice(0, mid);
const right = arr.slice(mid + 1, arr.length);

/* the +1 offsets the right side to not include the
middle of the array */

const newNode = Node(arr[mid]);
newNode.setLeft(buildTree(left));
newNode.setRight(buildTree(right)); 

return newNode

}
const root = buildTree(arr);

const getRoot = () => root;

const prettyPrint = (node, prefix = '', isLeft = true) => {
    if (node.getRight() !== null) {
      prettyPrint(node.getRight(), `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.getData()}`);
    if (node.getLeft() !== null) {
      prettyPrint(node.getLeft(), `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
  }

return {prettyPrint, getRoot}
}