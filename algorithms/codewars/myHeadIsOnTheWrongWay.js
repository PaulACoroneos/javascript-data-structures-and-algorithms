function fixTheMeerkat(arr) {
    var first = arr[0]; 
    var last = arr[arr.length-1]; 
    arr[0]=last; 
    arr[arr.length-1]=first;
    return arr;
  }

  //just use reverse method
  function fixTheMeerkat(arr) {
    return arr.reverse();
  }