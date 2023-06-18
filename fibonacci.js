function fibonacci(num) {
    // x is the first term,
    // y is the second term,
    // z is x + y.
    var x = 0;
    var y = 1;
    var z;
    var i = 0;
    for (i = 2; i < num; i++) {
      z = x + y;
      x = y;
      y = z;
    }
    return y;
  }
  
  var num = 11;
  answer = fibonacci(num);
  
  console.log(answer);

