//Explain why do we want sometimes to use setImmediate instead of using setTimeout?

/*
setTimeout runs in Timer phase, setImmediate runs in check phase.

when we needs to run just before close phase, we can use setImmediate instead of SetTimout.
*/

//Explain the difference between process.nextTick and setImmediate?
/*
A function passed to process.nextTick() found out of event loop and  is going to be executed on the current iteration of the event loop,
 after the current operation ends. 
This means it will always execute before setTimeout and setImmediate.

A setTimeout() callback with a 0ms delay is very similar to setImmediate(). 
The execution order will depend on various factors, but they will be both run in the next iteration of the event loop.



*/

//Name 10 global modules/methods available in Node environment.
/*
path
querystring
setImmediate
undefined
setInterval
timers
performance
url
repl 
stream
require



*/