/*
 * Given a square matrix, calculate the absolute difference between the sums of its diagonals.
 * For example, the square matrix  is shown below:
 *
 * 1 2 3
 * 4 5 6
 * 9 8 9
 */

function diagonalDifference(arr) {
  let end = arr.length - 1;
  let sum1 = 0,
    sum2 = 0;

  for (let i = 0; i < arr.length; i++) {
    let firstDiagonal = arr[i][i];
    let secondDiagonal = arr[i][end];

    sum1 += firstDiagonal;
    sum2 += secondDiagonal;
    end -= 1;
  }

  return Math.abs(sum1 - sum2);
}

let arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 1, 2, 3],
  [4, 5, 6, 7],
];

console.log(diagonalDifference(arr));
