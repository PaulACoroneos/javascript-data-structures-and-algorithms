function isTriangle(a,b,c)
{
  console.log(a,b,c);
  if(a <=0 || b <=0 || c<=0)
    return false
  else if(a+b<=c || b+c<=a || c+a<=b)  //check 3 cases
    return false;
  else
    return true;
}