const rotateMatrix = (matrix: number[][]) => {
    //empty matrix, size 1 matrix or not square matrix return as is
    if (matrix[0].length === 0 || matrix[0].length === 1 || matrix.length !== matrix[0].length) return;

    //now loop outside in of matrix breaking it up into smaller rings. number of loops will be length of matrix/2
    for (let i = 0; i < matrix.length / 2; i++) {
        //now for each ring we need to perform n swaps
        for (let j = i; j < matrix.length - i - 1; j++) {
            //store top left
            const topLeftOrig = matrix[i][j];

            //assign top left to bottom left
            matrix[i][j] = matrix[matrix.length - j - 1][i];

            //assign bottom left to bottom right
            matrix[matrix.length - j - 1][i] = matrix[matrix.length - 1 - i][matrix.length - j - 1];

            //assign bottom right to top right
            matrix[matrix.length - 1 - i][matrix.length - j - 1] = matrix[j][matrix.length - i - 1];

            //assign top right to orig top left
            matrix[j][matrix.length - i - 1] = topLeftOrig;
        }
    }
};

export default rotateMatrix;
