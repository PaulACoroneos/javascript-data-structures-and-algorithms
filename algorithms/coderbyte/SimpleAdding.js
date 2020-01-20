
//this js function accepts a user input number then sums the integers from 1 to the value of the number submitted

function SimpleAdding(num) { 

  // code goes here  
  var iterate = num;    //store number to use as iteration counter
  for(i = iterate-1; i>0; i--)
    num = num+i;  //num sum will simply be the given number plus the value below it in incremetor count
    
  return num; 
         
}
   
// keep this function call here 
SimpleAdding(readline());