// https://leetcode.com/problems/longest-consecutive-sequence/
function longestConsecutiveElements(nums) {
  const numSet = new Set(nums);
  let longest = 0;

  for (let num of nums) {
    // find the start value for the first range of sequence
    // if there is no value less than 1 of the current number
    // means the number is the start of the sequence
    if (!numSet.has(num - 1)) {
      let len = 0;

      // while loop does not scale with n. Therefore, it's considered O(1)
      while (numSet.has(num + len)) {
        len += 1;
      }
      longest = Math.max(len, longest);
    }
  }

  return longest;
}

const nums1 = [100, 4, 200, 1, 3, 2];

console.log(longestConsecutiveElements(nums1));
