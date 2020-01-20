function disemvowel(str) {
  var vowels = "aeiouAEIOU";  //string holding vowels for comp
  var newStr ="";
  for (var i = 0; i<str.length;i++)
    if (vowels.indexOf(str[i]) === -1)  //is it not a vowel
      newStr += str[i];
  return newStr;
}