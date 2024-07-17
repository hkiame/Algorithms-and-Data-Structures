// https://leetcode.com/problems/merge-sorted-array/description/

const merge = function (nums1, m, nums2, n) {
  let end = m + n - 1;
  let num1End = m - 1;
  let num2End = n - 1;

  while (num1End >= 0 && num2End >= 0) {
    if (nums1[num1End] >= nums2[num2End]) {
      nums1[end] = nums1[num1End];
      num1End -= 1;
      end -= 1;
    } else {
      nums1[end] = nums2[num2End];
      num2End -= 1;
      end -= 1;
    }
  }

  while (num2End >= 0) {
    nums1[end] = nums2[num2End];
    num2End -= 1;
    end -= 1;
  }

  return nums1;
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
console.log(merge([1], 1, [], 0));
console.log(merge([0], 0, [1], 1));
