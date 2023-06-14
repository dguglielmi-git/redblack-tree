import { Node } from './Node';
import { RedBlackTree } from './RedBlackTree';

// Printing the Tree structure
function printTree<T>(node: Node<T> | null, indent: string = '') {
  if (node === null) {
    console.log(indent + 'NULL');
    return;
  }

  console.log(indent + `Key: ${node.key}, Color: ${node.color}`);

  const childIndent = indent + '  ';
  printTree(node.left, childIndent);
  printTree(node.right, childIndent);
}

// Usage example of the Red-Black tree
const tree = new RedBlackTree<number>();
// tree.insert(10);
// tree.insert(20);
// tree.insert(30);
// tree.insert(15);
// tree.insert(25);

// Loading 100.000 nodes to test velocity
for (let i=0; i<100000; i++) {
  tree.insert(i)
}

// Tree visualization
// console.log('Árbol Red-Black:');
// printTree(tree.getRoot());
// console.log(tree.search(20))
console.log(`Exists node with value:20 ?: ${tree.exists(20)}`);
