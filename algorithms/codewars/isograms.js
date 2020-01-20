function isIsogram(str){
  
    var used ="";
    var str = str.toLowerCase().split("");
    for(var i=0; i<str.length;i++)
      if(used.indexOf(str[i]) >-1)
        return false;
      else
        used+=str[i];
    return true;
        
  }