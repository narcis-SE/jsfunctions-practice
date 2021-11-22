function logRectInfo(topLeft, bottomRight){ //This only works for positive cordinates
    a = (topLeft[1] - bottomRight[1]) * (bottomRight[0] - topLeft[0]);
    p = 2 * ((topLeft[1] - bottomRight[1]) + (bottomRight[0] - topLeft[0]));

  
    console.log("Your area is: " + a + " Your parameter is: " + p);
  }
  
  logRectInfo([0,5], [3,2]);


  
  /* Me tring to figure it out for all quadrants
  if(topLeft[0] < 0 || bottomRight[0] < 0){
    a = (topLeft[1] - bottomRight[1]) * (Math.abs(Math.abs(bottomRight[0]) - Math.abs(topLeft[0])));
    p = 2 * (topLeft[1] - bottomRight[1]) + ((Math.abs(bottomRight[0]) - Math.abs(topLeft[0]))); //()
  } else{
    a = (topLeft[1] - bottomRight[1]) * (bottomRight[0] - topLeft[0]);
    p = 2 * (topLeft[1] - bottomRight[1]) + (bottomRight[0] - topLeft[0]);

  }
  
    console.log("Your area is: " + a + " Your parameter is: " + p);
  }
*/ 
 