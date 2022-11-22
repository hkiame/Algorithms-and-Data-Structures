// https://leetcode.com/problems/reverse-bits/description/

const reverseBits = (n) => {
  let str = n.toString(2).padStart(32, "0");
  let strReverse = str.split("").reverse().join("");
  let output = parseInt(strReverse, 2);
  return output;
};

console.log(reverseBits("00000010100101000001111010011100"));
