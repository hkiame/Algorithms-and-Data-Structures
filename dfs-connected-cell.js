function connectedCell(matrix){
    let maxRegion = 0;

    const getRegionSize = (matrix, row, column) => {
        if(row < 0 || column < 0 || row >= matrix.length || column >= matrix[row].length){
            return 0;
        }

        if(matrix[row][column] === 0){
            return 0;
        }

        let size = 1;
        matrix[row][column] = 0;

        for(let r = row - 1; r <= row + 1; r++){
            for(let c = column - 1; c <= column + 1; c++){
                if(c != column || r != row){
                    size += getRegionSize(matrix, r, c);
                }
            }
        }

        return size;
    };

    for(let row = 0; row < matrix.length; row++){
        for(let column = 0; column < matrix[row].length; column++){
            if(matrix[row][column] === 1){
                let size = getRegionSize(matrix, row, column);
                maxRegion = Math.max(maxRegion, size);
            }
        }
    }

    return maxRegion;
}

const grid = [
    [1, 1, 0, 0],
    [0, 1, 1, 0],
    [0, 0, 1, 0],
    [1, 0, 0, 0]
];
console.log(connectedCell(grid));