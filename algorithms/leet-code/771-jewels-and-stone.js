/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    
    var counter = 0;
    //we need to use REGEX
    var J = J.split('');    //create array of terms to search agianst
    var jewels;
    var match;
    //console.log("length",J.length);
    for(var i=0;i<J.length;i++) {
        jewels= new RegExp(J[i],"g");
        //console.log(jewels);
        match = (S || '').match(jewels);
        //console.log(match);
        counter +=  match ? match.length: 0;
        //console.log("counter",counter);
    }
    return counter;

    
};