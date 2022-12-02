/* 
Async: It simply allows us to write promises based code as if it was synchronous and it checks that we are not breaking the execution thread. It operates asynchronously via the event-loop. Async functions will always return a value. It makes sure that a promise is returned and if it is not returned then JavaScript automatically wraps it in a promise which is resolved with its value.
*/

let getDataAsync = async () => {
  var data = "Hello Vipul";
  return data;
};

getDataAsync().then((data) => console.log(data));

/* 
Await: Await function is used to wait for the promise. It could be used within the async block only. It makes the code wait until the promise returns a result. It only makes the async block wait.
*/

let getDataAsyncAwait = async () => {
  var y = await "Hello AsyncAwait";
  console.log(y);
};

console.log(1);
getDataAsyncAwait();
console.log(2);
