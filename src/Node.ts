export enum Color {
    RED,
    BLACK,
  }
  
  export class Node<T> {
    public key: T;
    public left: Node<T> | null;
    public right: Node<T> | null;
    public parent: Node<T> | null;
    public color: Color;
  
    constructor(key: T) {
      this.key = key;
      this.left = null;
      this.right = null;
      this.parent = null;
      this.color = Color.RED;
    }
  }
  