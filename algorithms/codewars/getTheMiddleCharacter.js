function getMiddle(s)
{
  var len = s.length;
  var newString ="";
  if (len %2 === 0)  //even?
  {
    newString += s.charAt((len/2)-1);
    newString += s.charAt(len/2);
  }
  else
    newString += s.charAt((len/2));
  
  return newString;
  //Code goes here!
}