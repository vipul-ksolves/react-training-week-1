/* 

*********** JavaScript is a synchronous, blocking, single-threaded language ********


## Synchronous processing
Synchronicity in programming happens when the execution of operations is done sequentially. An operation will only be executed after the previous one is done.

## Asynchronous processing
asynchronous processing is done in parallel. Tasks that are not dependent on others can be offloaded and executed at the same time as the main operation and then report back the result when they are done.

## What Is The Difference Between Synchronous And Asynchronous?
The main difference when talking about operation synchronicity is in their thread usage. Synchronous processing uses only one thread where it executes all operations in succession. In contrast, each asynchronous operation is done in a different thread that reports back to the main thread with the result when complete or with an error in case of failure, leaving that thread open to process other requests.


*/

// Synchronous JavaScript
document.write("Hi"); // First
document.write("<br>");

document.write("Mayukh"); // Second
document.write("<br>");

document.write("How are you"); // Third

// Asynchronous JavaScript
document.write("Hi");
document.write("<br>");

setTimeout(() => {
  document.write("Let us see what happens");
}, 2000);

document.write("<br>");
document.write("End");
document.write("<br>");

/* 
## Synchronous vs Asynchronous: Advantages and Disadvantages

   -> Synchronous  advantage
    A simple, default method of programming: 
    Synchronous programming is by far the simplest method and thus the default for many programs and also learning material. You need very little setup to do a project with this methodology.

   -> Synchronous disadvantage
    Can be slow: 
    A synchronous project can become slow and unresponsive if it depends on computational-heavy algorithms, or a lot of operations in succession.

    -> Asynchronous advantages
    Faster and more responsive: 
    A program that has operations running in different threads can become faster and present information to the user as it is processed, never letting the project become unresponsive and thus providing a better user experience.
    Better error handling: 
    If an operation running in a different thread fails for some reason, you can handle that error or anomaly without shutting down the entire project.
    Higher scalability: 
    By offloading operations to different threads, you can easily add new features or scale up your processing power to handle more requests.

    -> Asynchronous disadvantages
    Code complexity: 
    This is the biggest disadvantage asynchronous programming brings. Your code becomes vastly more complex and harder to debug. Also, depending on the language you’re using, asynchronous programming operations can either be relatively easy or a nightmare.
    Operation overload: 
    Take care not to overdo it with threads. Your processing can easily get swamped and then your project’s asynchronicity becomes a hindrance, rather than a boon.

*/
