// https://leetcode.com/problems/plus-one/description/

const plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i] += 1;
      return digits;
    } else {
      digits[i] = 0;
    }
  }

  digits.unshift(1);

  return digits;
};

let arr1 = [1, 2, 3];
// console.log(plusOne(arr1));

// console.log(plusOne([1, 2, 9]));
console.log(plusOne([9]));
