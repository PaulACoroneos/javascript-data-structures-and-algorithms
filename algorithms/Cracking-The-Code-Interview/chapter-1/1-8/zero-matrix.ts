const zeroOutCol = (col: number, matrix: number[][]) => {
    //for a fixed column zero out each value in correspond row
    for (let i = 0; i < matrix.length; i++) {
        matrix[i][col] = 0;
    }
};

const zeroOutRow = (row: number, matrix: number[][]) => {
    //for a fixed row zero out each value in correspond column
    for (let i = 0; i < matrix[0].length; i++) {
        matrix[row][i] = 0;
    }
};

const zeroMatrix = (matrix: number[][]) => {
    //base case. 0 or 1 sized matrix
    if (matrix.length <= 1 || matrix[0].length <= 1) return;

    //now lets loop through each row finding zeroes
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                zeroOutCol(j, matrix);
                zeroOutRow(i, matrix);
                //no point in iterating through rest of row. we are all zeroes
                return;
            }
        }
        console.log(matrix);
    }
};

export default zeroMatrix;
