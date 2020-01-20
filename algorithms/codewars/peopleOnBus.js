var number = function(busStops){
    var sum =0;
    for(var i=0; i<busStops.length;i++)
      sum += busStops[i].reduce((acc, val) => { return acc - val;});
    return sum;
  }