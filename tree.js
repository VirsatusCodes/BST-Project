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
  const setData = (inp) => data = inp;

  return {getData,
          getLeft,
          getRight,
          setLeft,
          setRight,
          setData}
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
let numberOfElements = arr.length;
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
  
      inp > pointer.getData() ? 
      pointer = pointer.getRight() : 
      pointer = pointer.getLeft();
    }
    if(pointer.getLeft() === null && pointer.getRight() === null ){

      inp > pointerToPrevious.getData() ? 
      pointerToPrevious.setRight(null) : 
      pointerToPrevious.setLeft(null);

    } else if(pointer.getLeft() === null && pointer.getRight() !== null){

      inp > pointerToPrevious.getData()?
      pointerToPrevious.setRight(pointer.getRight()) :
      pointerToPrevious.setLeft(pointer.getRight())

    } else if(pointer.getLeft() !== null && pointer.getRight() === null){

      inp < pointerToPrevious.getData()?
      pointerToPrevious.setLeft(pointer.getLeft()) :
      pointerToPrevious.setRight(pointer.getLeft())
    } else {

      let originalTarget = pointer;
      pointer = pointer.getRight();

      while(pointer.getLeft() !== null) {
        pointerToPrevious = pointer;
        pointer = pointer.getLeft();
      };

      originalTarget.setData(pointer.getData());
      pointerToPrevious.setLeft(null);
    }
    }
  };

const find = (inp) => {
  let pointer = root;
  
  while(inp !== pointer.getData()){
  
    inp > pointer.getData() ? 
      pointer = pointer.getRight() : 
      pointer = pointer.getLeft();
  }
  return pointer
  }

const levelOrder = (func ,nodeVisitLog = [getRoot()], nodeValues = [], counter = 0) => {
if(!nodeVisitLog[0]) {
  return;
};
 nodeValues.push(nodeVisitLog[0].getData());

 if(nodeVisitLog[0].getLeft()) {
  nodeVisitLog.push(nodeVisitLog[0].getLeft());
 };
 if(nodeVisitLog[0].getRight()) {
  nodeVisitLog.push(nodeVisitLog[0].getRight());
 };

 nodeVisitLog.shift();

levelOrder(func, nodeVisitLog, nodeValues, counter+= 1);

counter--;

if(func === undefined && counter === 0) {
  return nodeValues;
};
if(typeof(func) === 'function' && counter === 0) {
return func(nodeValues);
}
else {
  return 'you didnt give me a proper functionnnn'
}
};
/* wont bother making a iterative version of levelorder as
i have no trouble with iteration, recursive is my struggle atm
so solving it that way is enough for me. */

const inOrder = (func, node = root, nodeValues = []) => {
  if(node === null ) {
    return
   }
   inOrder(func, node.getLeft(), nodeValues);

   nodeValues.push(node.getData());

   inOrder(func, node.getRight(), nodeValues);

   return nodeValues

}

const preOrder = (func, node = root, nodeValues = []) => {
   if(node === null ) {
    return
   }
   nodeValues.push(node.getData());
  
   preOrder(func, node.getLeft(), nodeValues);
   preOrder(func, node.getRight(), nodeValues);
   
   return nodeValues
}

const postOrder = () => {

}


return {prettyPrint,
        getRoot,
        setRoot, 
        removeDuplicates,
        mergeSort,
        insert,
        remove,
        find,
        levelOrder,
        inOrder,
        preOrder,
        postOrder}
}
/* many of these functions arent tested for if the BST is empty,
and definitely wouldnt work among a few other variables, not looking
to make it work for all use cases atm*/