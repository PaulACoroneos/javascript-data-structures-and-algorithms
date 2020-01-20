function persistence(num) {
    var persistence = 0;  //hold number of times we multiply
    var multiplicand = 0 ; //hold sum of multiplied numbers
    num_working = num.toString();
    
    while(num_working.length != 1) {
      persistence++;
      for(var i=0; i<num_working.length; i++)
      {
        if(i === 0)
          multiplicand = parseInt(num_working.charAt(i));
        else
          multiplicand *= parseInt(num_working.charAt(i));
      }
      num_working = multiplicand.toString();  //set working num to new result
      
    }
    return persistence;  //return number of multiplies
 }