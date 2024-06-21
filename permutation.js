function getPermutations(word = "", prefix = "") {
  if (word.length <= 1) {
    return [prefix + word];
  }
  return Array.from(word).reduce((result, char, index) => {
    const reminder = word.slice(0, index) + word.slice(index + 1);
    return result.concat(getPermutations(reminder, prefix + char));
  }, []);
}

console.log(getPermutations("abc"));
