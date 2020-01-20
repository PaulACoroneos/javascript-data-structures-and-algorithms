/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {

    var str = str.split('').map(str => str.toLowerCase()).join('');
    return str;
    
};