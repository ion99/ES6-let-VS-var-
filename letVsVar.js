for (let i = 1; i <= 5; i ++ ) {
  setTimeout(function() {
    console.log( i + " seconds!");
  }, 1000 * i);
}

// The output:

// 1 seconds!
// 2 seconds!
// 3 seconds!
// 4 seconds!
// 5 seconds!

for (var j = 1; j <= 5; j ++ ) {
  setTimeout(function() {
    console.log( j + " seconds!");
  }, 1000 * j);
}

// The output:

// 6 seconds!
// 6 seconds!
// 6 seconds!
// 6 seconds!
// 6 seconds!

// The solution for "var":

for (var j = 1; j <= 5; j ++ ) {
  setTimeout(function(x) { 
    return function(){ 
      console.log( x + " seconds!");
    }
  }(j), 1000 * j);
}

// The output:

// 1 seconds!
// 2 seconds!
// 3 seconds!
// 4 seconds!
// 5 seconds!

