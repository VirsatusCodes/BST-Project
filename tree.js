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

const Tree = (arr) => {

const removeDuplicates = (arr) => {

  const checkValue = (sorted) => {
    return sorted != arr[counter]
  }

  const sorted = [];
  let counter = 0

  while(counter < arr.length) {
    if(sorted.every(checkValue)) {
      sorted.push(arr[counter]);
    }
    counter++;
  }
  return sorted
}

const mergeSort = (arr) => {
  if (arr.length === 0) return "Please provide a non empty array!"
  if (arr.length === 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid, arr.length);
  return merge(mergeSort(left), mergeSort(right));
};

const merge = (leftArr, rightArr) => {
  const result = [];
  let iL = 0;
  let iR = 0;
  while (iL < leftArr.length && iR < rightArr.length) {
    if (leftArr[iL] < rightArr[iR]) {
      result.push(leftArr[iL]);
      iL++;
    } else {
      result.push(rightArr[iR]);
      iR++;
    }
  }
  while (iL < leftArr.length) {
    result.push(leftArr[iL]);
    iL++;
  }
  while (iR < rightArr.length) {
    result.push(rightArr[iR]);
    iR++;
  }
  return result;
};

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
let numberOfElements = arr.length;

let root = buildTree(mergeSort(removeDuplicates(arr)));

const getRoot = () => root;

const setRoot = (inp) => root = inp;
/* may want to have setRoot automatically create a node using
the inp value instead of setting the root to inp, potentially. */

const prettyPrint = (node, prefix = '', isLeft = true) => {
  if (node.getRight() !== null) {
    prettyPrint(node.getRight(), `${prefix}${isLeft ? '│   ' : '    '}`, false);
  }
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.getData()}`);
  if (node.getLeft() !== null) {
    prettyPrint(node.getLeft(), `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
}

const insert = (inp) => {
  /* would want to include checking if value is already
  present in the BST in further development of this function for sure */
let pointer = root;
let counter = 0;
numberOfElements++;

while(counter++ < Math.ceil(Math.log2(numberOfElements))){
if(inp > pointer.getData() && pointer.getRight() !== null) {
  pointer = pointer.getRight();
}
if (inp < pointer.getData() && pointer.getLeft() !== null) {
  pointer = pointer.getLeft();
}
}
if(inp > pointer.getData()) {
  pointer.setRight(Node(inp))
}
if (inp < pointer.getData()) {
  pointer.setLeft(Node(inp)) 
} 
};

const remove = (inp) => {
let pointer = root;
let pointerToPrevious;
if(pointer.getLeft() === null && pointer.getRight() === null && pointer.getData() === inp) {
  setRoot(null);
}

else {
while(inp !== pointer.getData()){
pointerToPrevious = pointer;

if(inp > pointer.getData()) {
  pointer = pointer.getRight();
}
if (inp < pointer.getData()) {
  pointer = pointer.getLeft();
}/* use the : statement here for if theres children */
}
if(inp > pointerToPrevious.getData()) {
  pointerToPrevious.setRight(null);
}
if (inp < pointerToPrevious.getData()) {
  pointerToPrevious.setLeft(null) ;
} 
}
};
/* 4 cases
  1, if it is the tip of a branch just set null
  2, if it has 1 child bring up next value as new node there
  3, if it has 2 children go to the right once, then go to the furthest left and
  use that value.
  4, but if theres another value after that (should only be right) to the right
  
  NOTE you only have to set child node as new node you dont have to necessarily change paths of
  all the different nodes constantly*/

/* insert and remove wont work on root i think with the current design
may or may not bother to fix that*/

const find = (inp) => {
  let pointer = root;
  
  while(inp !== pointer.getData()){
  
  if(inp > pointer.getData()) {
    pointer = pointer.getRight();
  }
  if (inp < pointer.getData()) {
    pointer = pointer.getLeft();
  }
  }
  return pointer
  }

return {prettyPrint,
        getRoot,
        setRoot, 
        removeDuplicates,
        mergeSort,
        insert,
        remove,
        find}
}