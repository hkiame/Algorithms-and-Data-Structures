// https://leetcode.com/problems/reverse-integer/description/

const reverse = (x) => {
  let str = x.toString().split("").reverse(),
    sign = false;

  if (str[str.length - 1] === "-") {
    sign = str.pop();
  }

  str = str.join("");

  if (
    parseInt(str, 10) < Math.pow(-2, 31) ||
    Math.pow(2, 31) - 1 < parseInt(str, 10)
  ) {
    return 0;
  }

  if (sign) {
    return "-" + str;
  }

  return str;
};

console.log(reverse(123));
console.log(reverse(-123));
