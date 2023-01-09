// https://leetcode.com/problems/maximum-depth-of-binary-tree/

const maxDepth = (root) => {
  if (root === null) {
    return 0;
  }

  console.log("left", root.left);
  let leftDepth = maxDepth(root.left);
  console.log("right", root.right);
  let rightDepth = maxDepth(root.right);

  console.log("leftDepth: ", leftDepth, "rightDepth: ", rightDepth);
  return Math.max(leftDepth, rightDepth) + 1;
};

const tree = {
  val: 3,
  left: {
    val: 9,
    left: null,
    right: null,
  },
  right: {
    val: 20,
    left: {
      val: 15,
      left: null,
      right: null,
    },
    right: {
      val: 7,
      left: null,
      right: null,
    },
  },
};

console.log(maxDepth(tree));
