export const persistence = (num: number) => {
    let persistence = 0; //hold number of times we multiply
    let multiplicand = 0; //hold sum of multiplied numbers
    let numWorking = num.toString();

    while (numWorking.length != 1) {
        persistence++;
        for (let i = 0; i < numWorking.length; i++) {
            if (i === 0) multiplicand = parseInt(numWorking.charAt(i));
            else multiplicand *= parseInt(numWorking.charAt(i));
        }
        numWorking = multiplicand.toString(); //set working num to new result
    }
    return persistence; //return number of multiplies
};
