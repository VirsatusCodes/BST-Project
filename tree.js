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
const root = buildTree(mergeSort(removeDuplicates(arr)));

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

return {prettyPrint,
        getRoot, 
        removeDuplicates,
        mergeSort}
}