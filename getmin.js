const getMin = (array) => {
  let min;
  for (let i = 0; i < array.length; i++) {
    const cur = array[i];

    if (min === undefined || cur < min) {
      min = cur;
    }
  }

  return min;
};

console.log(getMin([9, 6, 8, 3, 5, 8, 7]));
