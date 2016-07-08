# ES6 let VS var

The use of “let” in for loops


Using “var” to declare the counter in a for loop doesn't actually keep the counter local to the loop. Using “let” instead does. “Let” also has the major advantage of rebinding the loop variable on every iteration, so each loop gets its own copy, rather than sharing the globally-scoped variable.

for (let i = 1; i <= 5; i ++ ) {
    setTimeout(function() {
        console.log( i + " seconds!");
    }, 1000 * i);
}

for (var j = 0; j <= 5; j ++ ) {
        setTimeout(function() {
        console.log( j + " seconds!");
    }, 1000 * j);
}

The top loop does what you think it does. The bottom one prints "6 seconds!", every second.
