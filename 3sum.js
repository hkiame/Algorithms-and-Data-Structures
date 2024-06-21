// https://leetcode.com/problems/3sum/
// To avoid a runtime of O(n ^ 3) and have a runtime of O(n ^ 2), if we sort items first and
// then use one loop and two pointers to find the solutions.
const threeSum = (nums) => {
  nums.sort((a, b) => a - b);

  const results = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] != nums[i - 1]) {
      let low = i + 1;
      let high = nums.length - 1;

      while (low < high) {
        const sum = nums[low] + nums[high] + nums[i];
        if (sum === 0) {
          results.push([nums[i], nums[low], nums[high]]);

          // so we may not have duplicates triplets
          while (low < high && nums[low] === nums[low + 1]) {
            low++;
          }
          while (low < high && nums[high] === nums[high - 1]) {
            high--;
          }

          low++;
          high--;
        } else if (sum > 0) {
          high--;
        } else {
          low++;
        }
      }
    }
  }

  return results;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
