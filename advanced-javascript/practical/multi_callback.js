/* 
A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
*/

console.log("1");

setTimeout(function afterTwoSeconds() {
  console.log("2");
}, 2000);

console.log("3");
