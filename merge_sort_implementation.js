/**
 * Split array in half recursively until two or less elements are left.
 * Sort these two elements and combine them back using the merge function
 */

function splitSort(array) {
  const size = array.length;

  if (size < 2) {
    return array;
  }

  if (size === 2) {
    return array[0] < array[1] ? array : [array[1], array[0]];
  }

  const half = Math.ceil(size / 2);

  return merge(splitSort(array.slice(0, half)), splitSort(array.slice(half)));
}

function merge(array1, array2 = []) {
  const mergedLength = array1.length + array2.length;
  const mergedArray = Array(mergedLength);

  // merge elements on a and b in asc order. Run-time O(a + b)
  for (let index = 0, i1 = 0, i2 = 0; index < mergedLength; index++) {
    if (
      i2 >= array2.length ||
      (i1 < array1.length && array1[i1] <= array2[i2])
    ) {
      mergedArray[index] = array1[i1];
      i1 += 1;
    } else {
      mergedArray[index] = array2[i2];
      i2 += 1;
    }
  }

  return mergedArray;
}

const arr = [9, 2, 5, 1, 7, 6];

console.log(splitSort(arr));
