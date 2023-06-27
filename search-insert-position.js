// https://leetcode.com/problems/search-insert-position/description/

function searchInsert(nums, target) {
  let idx = nums.indexOf(target);
  if (idx === -1) {
    function searchRecursive(arr, target, offset = 0) {
      const half = parseInt(arr.length / 2, 10);
      const current = arr[half];

      if (arr.length === 1) {
        return arr[0] > target ? offset : offset + 1;
      }

      if (target > current) {
        const right = arr.slice(half);
        if (right.length === 1) {
          return target > right[0] ? arr.length + offset : offset + half;
        }
        return searchRecursive(right, target, offset + half);
      } else {
        const left = arr.slice(0, half);
        if (left.length === 1) {
          return left[0] > target ? offset : offset + 1;
        }
        return searchRecursive(left, target, offset);
      }
    }

    return searchRecursive(nums, target);
  }

  return idx;
}

// console.log(searchInsert([1, 3, 5, 6], 5));
// console.log(searchInsert([1, 3, 5, 6], 2));
// console.log(searchInsert([1, 3, 5, 6], 7));
// console.log(searchInsert([1], 0));
// console.log(searchInsert([1, 3, 5], 4));
console.log(searchInsert([1, 2, 4, 6, 7], 3));
