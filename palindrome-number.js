let isPalindrome = function (x) {
  const str = x.toString();
  const end = str.length - 1;

  for (let i = 0, j = end; i < j; i++, j--) {
    if (str[i] != str[j]) {
      return false;
    }
  }

  return true;
};

// console.log(isPalindrome("madama"));
// console.log(isPalindrome("tattarrattat"));
console.log(isPalindrome(-121));
