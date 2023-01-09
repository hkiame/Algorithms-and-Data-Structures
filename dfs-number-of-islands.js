// https://leetcode.com/problems/number-of-islands/

var numIslands = function (grid) {
  let numOfIslands = 0;

  const island = (grid, row, column) => {
    if (
      row < 0 ||
      column < 0 ||
      row >= grid.length ||
      column >= grid[row].length
    ) {
      return 0;
    }

    if (grid[row][column] === "0") {
      return 0;
    }

    grid[row][column] = "0";
    let num = 1;

    for (let r = row - 1; r <= row + 1; r++) {
      for (let c = column - 1; c <= column + 1; c++) {
        // This is not make sure it does not search diagonally
        if (row !== r && c !== column) {
          continue;
        }

        // This is to make sure it does not search the same position.
        if (row !== r || c !== column) {
          island(grid, r, c);
        }
      }
    }

    return num;
  };

  for (let row = 0; row < grid.length; row++) {
    for (let column = 0; column < grid[row].length; column++) {
      if (grid[row][column] === "1") {
        numOfIslands += island(grid, row, column);
      }
    }
  }

  return numOfIslands;
};

let grid = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
];

let grid2 = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
];

let grid3 = [
  ["0", "0", "0"],
  ["0", "1", "0"],
  ["0", "0", "0"],
];

let grid4 = [
  ["1", "1", "1"],
  ["1", "0", "1"],
  ["1", "1", "1"],
];

let grid5 = [["1", "0", "1", "1", "0", "1", "1"]];

let grid6 = [
  ["0", "1", "0"],
  ["1", "0", "1"],
  ["0", "1", "0"],
];

console.log(numIslands(grid6));
