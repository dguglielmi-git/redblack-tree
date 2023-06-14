# Red-Black Tree

<p align="center">
  <img src="src/assets/red-black-tree.svg" alt="Arbol" width="500">
</p>


This project implements a Red-Black Tree data structure in TypeScript. A Red-Black Tree is a self-balancing binary search tree that ensures efficient insertion, deletion, and retrieval operations.

## Features

- Insertion: Insert new elements into the Red-Black Tree while maintaining balance and preserving the Red-Black Tree properties.
- Search: Find elements in the Red-Black Tree by their key value.
- Visualization: Print the Red-Black Tree structure in a readable format for easy visualization and debugging.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/redblack-tree.git
```

2. Navigate to the project directory:
```bash
cd redblack-tree
```

3. Install the dependencies:
```bash
npm install
```

## Usage

1. Import the `RedBlackTree` class into your Typescript file:
```js
import { RedBlackTree } from './RedBlackTree';
```

2. Create a new instance of the Red-Black Tree:
```js
const tree = new RedBlackTree<number>();
```

3. Insert elements into the Red-Black Tree:
```js
tree.insert(10);
tree.insert(20);
tree.insert(30);
```

4. Perform search operations:
```js
const result = tree.search(20);
console.log(result); // Output: true
```

5. Visualize the Red-Black Tree:
```js
tree.print();
```

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

This project was inspired by the Red-Black Tree data structure and built using TypeScript.

## Contact

For any inquiries or questions, you can reach out to [dag@danielguglielmi.dev](mailto:dag@danielguglielmi.dev).



