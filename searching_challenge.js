// have the function SearchingChallenge(strArr) take the array of
// strings stored in strArr, which will be a 2D matrix of 0 and 1's,
// and determine how many holes, or contiguous regions of 0's, exist
// in the matrix. A contiguous region is one where there is a connected
// group of 0's going in one or more of four directions: up, down, left,
// or right. For example: if strArr is
// ["10111", "10101", "11101", "11111"], then this looks like the
// following matrix:

// 1 0 1 1 1
// 1 0 1 0 1
// 1 1 1 0 1
// 1 1 1 1 1

// For the input above, your program should return 2 because there are
// two separate contiguous regions of 0's, which create "holes" in the
// matrix. You can assume the input will not be empty.

// Input:"01111", "01101", "00011", "11110"
// Output:3

// Input:"1011", "0010"
// Output:2

function SearchingChallenge(strArr) {
  let num = 0;

  const getNums = (strArr, row, column) => {
    if (
      row < 0 ||
      column < 0 ||
      row >= strArr.length ||
      column >= strArr[row].length
    ) {
      return 0;
    }

    if (strArr[row][column] != "0") {
      return 0;
    }

    let currentRow = strArr[row].split("");
    currentRow.splice(column, 1, "1");

    strArr[row] = currentRow.join("");

    for (let r = row - 1; r <= row + 1; r++) {
      for (let c = column - 1; c <= column + 1; c++) {
        if (r != row && c != column) {
          continue;
        }

        if (r != row || c != column) {
          getNums(strArr, r, c);
        }
      }
    }

    return 1;
  };

  for (let row = 0; row < strArr.length; row++) {
    for (let column = 0; column < strArr[row].length; column++) {
      if (strArr[row][column] == "0") {
        num += getNums(strArr, row, column);
      }
    }
  }

  return num;
}
