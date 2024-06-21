function hasDuplicates(array) {
  const words = new Map();

  for (let i = 0; i < array.length; i++) {
    const word = array[i];
    if (words.has(word)) {
      return true;
    }

    words.set(word, i);
  }

  return false;
}
