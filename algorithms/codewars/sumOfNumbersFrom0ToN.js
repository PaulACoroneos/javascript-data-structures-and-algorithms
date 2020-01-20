var SequenceSum = (function() {
    function SequenceSum() {}
  
    SequenceSum.showSequence = function(count) {
      var result = "";
      var counter = 0;
      var sum = 0;
      
      if( count === 0)
        return "0=0";
      if(count < 0)
      {
        result = result.concat(count).concat("<0");
        return result;
      }
      while(counter <=count)
      {
        if(counter === 0)
          result = result.concat(counter);
        else
          result = result.concat("+").concat(counter);
        sum+=counter;
        counter++;
      }
      result = result.concat(" = ").concat(sum);
      return result;
    };
  
    return SequenceSum;
  
  })();