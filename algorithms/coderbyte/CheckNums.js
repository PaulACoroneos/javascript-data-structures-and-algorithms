//This function accepts two vars. If the second var is greater than the first return true. Otherwise if the first var
// is larger return false. If both vars are equal return -1

function CheckNums(num1,num2) { 

  // code goes here  
  if(num2 > num1)
    return true; 
  else if (num1 > num2)
    return false
  else
    return -1;
}
   
// keep this function call here 
CheckNums(readline());