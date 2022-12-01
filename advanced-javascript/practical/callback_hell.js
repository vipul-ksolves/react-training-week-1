/* 
Callback Hell: 
Callback Hell is essentially nested callbacks stacked below one another forming a pyramid structure.
Every callback depends/waits for the previous callback, thereby making a pyramid structure that affects the readability and maintainability of the code.

It kinda looks like this:
    firstFunction(args, function () {
    secondFunction(args, function () {
        thirdFunction(args, function () {
        // And so on…
        });
    });
    });



Solutions to callback hell
    There are four solutions to callback hell:

    Write comments
    Split functions into smaller functions
    Using Promises
    Using Async/await

*/

const makeBurger = nextStep => {
    getBeef(function (beef) {
      cookBeef(beef, function (cookedBeef) {
        getBuns(function (buns) {
          putBeefBetweenBuns(buns, beef, function(burger) {
            nextStep(burger)
          })
        })
      })
    })
  }
  
  // Make and serve the burger
  makeBurger(function (burger) => { serve(burger)})





