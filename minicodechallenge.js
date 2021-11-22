function logRectInfo(topLeft, bottomRight){  
    a = topLeft[1] * bottomRight[0];
    p = 2 * (topLeft[1] + bottomRight[0]);
    console.log("Your area is: " + a + " Your parameter is: " + p);
  }
  
  logRectInfo([0,5], [3,2]);
  logRectInfo([0,3], [4,1]);
  logRectInfo([0,8], [3,2]);
  logRectInfo([1,5], [3,1]);