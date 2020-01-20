//this js function takes the user inputted number and calculates the first factorial

function FirstFactorial(num) { 

  // code goes here 
  
  //store initial value for loop counter to calculate factorial value of num
  var passedNum = num;
  
  //we are going to used the provided number as an iteration counter and decrement each time (start 1 less than provided value)
  for (i = passedNum-1; i> 0; i--)
    num = num*(i);    //num will be existing num for this iteration mutliplied by iteration counter value
  
  return num; 
         
}
   
// keep this function call here 
FirstFactorial(readline());
