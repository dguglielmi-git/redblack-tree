import { Color, Node } from "./Node";

export class RedBlackTree<T> {
  private root: Node<T> | null;

  constructor() {
    this.root = null;
  }
  public getRoot(): Node<T> | null {
    return this.root;
  }

  public search(key: T): Node<T> | null {
    let currentNode: Node<T> | null = this.root;

    while (currentNode !== null) {
      if (key === currentNode.key) {
        return currentNode; // node with the value was found
      } else if (key < currentNode.key) {
        currentNode = currentNode.left; // Searched value is lower, searching in the left subtree
      } else {
        currentNode = currentNode.right; // Searched value is greater, searching in the right subtree
      }
    }

    return null; // Value was not found
  }

  public exists(key: T): boolean {
    let currentNode: Node<T> | null = this.root;

    while (currentNode !== null) {
      if (key === currentNode.key) {
        return true;
      } else if (key < currentNode.key) {
        currentNode = currentNode.left; 
      } else {
        currentNode = currentNode.right;
      }
    }

    return false;
  }

  public insert(key: T): void {
    const newNode = new Node(key);

    if (this.root === null) {
      this.root = newNode;
      this.root.color = Color.BLACK;
    } else {
      let currentNode: Node<T> | null = this.root;
      let parent: Node<T> | null = null;

      while (currentNode !== null) {
        parent = currentNode;

        if (key < currentNode.key) {
          currentNode = currentNode.left;
        } else {
          currentNode = currentNode.right;
        }
      }

      newNode.parent = parent;

      if (key < parent!.key) {
        parent!.left = newNode;
      } else {
        parent!.right = newNode;
      }

      this.fixInsertViolation(newNode);
    }
  }

  private fixInsertViolation(node: Node<T>): void {
    while (
      node !== this.root &&
      node.parent !== null &&
      node.parent.color === Color.RED
    ) {
      let uncle: Node<T> | null = null;

      if (node.parent === node.parent.parent?.left) {
        uncle = node.parent.parent.right;

        if (uncle !== null && uncle.color === Color.RED) {
          node.parent.color = Color.BLACK;
          uncle.color = Color.BLACK;
          if (node.parent.parent) {
            node.parent.parent.color = Color.RED;
            node = node.parent.parent;
          }
        } else {
          if (node === node.parent.right) {
            node = node.parent;
            this.leftRotate(node);
          }

          if (node.parent) {
            node.parent.color = Color.BLACK;
            if (node.parent.parent) {
              node.parent.parent.color = Color.RED;
              this.rightRotate(node.parent.parent);
            }
          }
        }
      } else {
        uncle = node.parent.parent!.left;

        if (uncle !== null && uncle.color === Color.RED) {
          node.parent.color = Color.BLACK;
          uncle.color = Color.BLACK;
          if (node.parent.parent) {
            node.parent.parent.color = Color.RED;
            node = node.parent.parent;
          }
        } else {
          if (node === node.parent.left) {
            node = node.parent;
            this.rightRotate(node);
          }

          if (node.parent) {
            node.parent.color = Color.BLACK;
            if (node.parent.parent) {
              node.parent.parent.color = Color.RED;
              this.leftRotate(node.parent.parent);
            }
          }
        }
      }
    }

    if (this.root) {
      this.root.color = Color.BLACK;
    }
  }

  private leftRotate(node: Node<T>): void {
    const rightChild = node.right;

    if (!rightChild) {
      return;
    }

    node.right = rightChild.left;

    if (rightChild.left !== null) {
      rightChild.left.parent = node;
    }

    rightChild.parent = node.parent;

    if (node.parent === null) {
      this.root = rightChild;
    } else if (node === node.parent.left) {
      node.parent.left = rightChild;
    } else {
      node.parent.right = rightChild;
    }

    rightChild.left = node;
    node.parent = rightChild;
  }

  private rightRotate(node: Node<T>): void {
    const leftChild = node.left;

    if (!leftChild) {
      return;
    }

    node.left = leftChild.right;

    if (leftChild.right !== null) {
      leftChild.right.parent = node;
    }

    leftChild.parent = node.parent;

    if (node.parent === null) {
      this.root = leftChild;
    } else if (node === node.parent.left) {
      node.parent.left = leftChild;
    } else {
      node.parent.right = leftChild;
    }

    leftChild.right = node;
    node.parent = leftChild;
  }
}
