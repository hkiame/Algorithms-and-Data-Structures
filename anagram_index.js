function anagram_index(hay, needle) {
  const hayLen = hay.length;
  const needleLen = needle.length;

  // if needle is longer than hay, no match possible
  if (needleLen > hayLen) return -1;

  function isAnagram(substr1, substr2) {
    const formated1 = substr1.split("").sort().join("");
    const formated2 = substr2.split("").sort().join("");

    return formated1 === formated2;
  }

  const lastSubstringIndex = hayLen - needleLen;

  for (let i = 0; i <= lastSubstringIndex; i++) {
    const substring = hay.substring(i, i + needleLen);

    if (isAnagram(needle, substring)) {
      return i;
    }
  }

  return -1;
}

console.log(anagram_index("henry", "hen"));
console.log(anagram_index("carrot", "rar"));
console.log(anagram_index("actor", "car"));
console.log(anagram_index("actor", "rot"));
console.log(anagram_index("actor", "cat"));
