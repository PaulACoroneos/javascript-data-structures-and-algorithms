export const matrix = (num: number) => {
    const resultMatrix = [];
    let counter = 1;
    let startCol = 0;
    let endCol = num - 1;
    let startRow = 0;
    let endRow = num - 1;
    //initialize matrix shape w/ zeroes
    for (let i = 0; i < num; i++) {
        resultMatrix.push(Array(num).fill(0));
    }

    //start iterative assignment
    while (startCol <= endCol && startRow <= endRow) {
        //top row
        for (let col = startCol; col <= endCol; col++) {
            resultMatrix[startRow][col] = counter;
            counter++;
        }
        startRow++;
        //right column
        for (let row = startRow; row <= endRow; row++) {
            resultMatrix[row][endCol] = counter;
            counter++;
        }
        endCol--;
        //bottom row
        for (let col = endCol; col >= startCol; col--) {
            resultMatrix[endRow][col] = counter;
            counter++;
        }
        endRow--;
        //left column
        for (let row = endRow; row >= startRow; row--) {
            resultMatrix[row][startCol] = counter;
            counter++;
        }
        startCol++;
    }
    return resultMatrix;
};
