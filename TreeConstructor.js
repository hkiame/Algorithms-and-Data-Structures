// Have the function TreeConstructor( strArr ) take the array of strings stored in strArr,
// which will contain pairs of integers in the following format: (i1,i2) , where i1 represents
// a child node in a tree and the second integer i2 signifies that it is the parent of i1 .
// For example: if strArr is ["(1,2)", “(2,4)”, “(7,2)”], then this forms the following tree:

/**
 *                        4
 *                       /
 *                      /
 *                     2
 *                    / \
 *                   /   \
 *                  1     7
 */

// which you can see forms a proper binary tree. Your program should, in this case, return the string true
// because a valid binary tree can be formed. If a proper binary tree cannot be formed with the integer pairs,
// then return the string false . All of the integers within the tree will be unique, which means there can
// only be one node in the tree with the given integer value.

// Examples;
// Input: ["(1,2)", "(2,4)", "(5,7)", "(7,2)", "(9,5)"];
// Output: true;

// Input: ["(1,2)", "(3,2)", "(2,12)", "(5,2)"];
// Output: false;
function createNode(val) {
  const node = {};
  node.val = val;
  node.parent = false;
  node.left = null;
  node.right = null;

  return node;
}

function TreeConstructor(strArr) {
  const tree = new Map();
  let root = 0;
  for (let i = 0; i < strArr.length; i++) {
    const match = strArr[i].match(/\d+/g);
    const parent = match[1];
    const child = match[0];
    if (tree.has(parent)) {
      const side = Number(child) > Number(parent) ? "right" : "left";
      const parentNode = tree.get(parent);
      if (parentNode[side] !== null) {
        return false;
      }

      if (tree.has(child)) {
        const childNode = tree.get(child);
        if (childNode.parent !== false) {
          return false;
        } else {
          childNode.parent = parent;
          parentNode[side] = childNode;
        }
      } else {
        var childNode = createNode(child);
        childNode.parent = parent;
        parentNode[side] = childNode;
        tree.set(child, childNode);
      }
    } else {
      const parentNode = createNode(parent);
      if (tree.has(child)) {
        var childNode = tree.get(child);
        if (childNode.parent !== false) {
          return false;
        }
      } else {
        var childNode = createNode(child);
        tree.set(child, childNode);
      }

      childNode.parent = parent;
      const side = Number(child) > Number(parent) ? "right" : "left";
      parentNode[side] = childNode;
      tree.set(parent, parentNode);
    }
  }

  console.log(tree);

  for (const [key, value] of tree) {
    if (value.parent === false) {
      root += 1;
    }
    if (root > 1) {
      return false;
    }
  }

  return true;
}
console.log(TreeConstructor(["(7,2)", "(9,5)"]));
console.log(TreeConstructor(["(1,2)", "(2,4)", "(5,7)", "(7,2)", "(9,5)"]));
console.log(TreeConstructor(["(1,2)", "(3,2)", "(2,12)", "(5,2)"]));
console.log(
  TreeConstructor(["(2,3)", "(1,2)", "(4,9)", "(9,3)", "(12,9)", "(6,4)"])
);
