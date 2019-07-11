Contents
- [JavaScript engine](#javascript-engine)
- [Chrome V8 Engine](#chrome-v8-engine)
- [NodeJS](#node-js)
- [NPM](#npm)
- [NVM](#nvm)

## [Javascript Engine](https://en.wikipedia.org/wiki/JavaScript_engine)
* a [computer program](https://en.wikipedia.org/wiki/Computer_program) that executes [JavaScript(JS)](https://en.wikipedia.org/wiki/JavaScript) code. 
* utilizes [just-in-time compilation](https://en.wikipedia.org/wiki/Just-in-time_compilation) for improved performance. Is a way of executing computer code that 
involves compilation during executing of a program - at [run time](https://en.wikipedia.org/wiki/Run_time_(program_lifecycle_phase)) -

## [Chrome V8 Engine](https://v8.dev/)
* [What is V8](#chrome-v8-engine)
	- implements [ECMAScript](https://tc39.es/ecma262/) and [WebAssembley](https://webassembly.github.io/spec/core/)
	- V8 is a C++ program, which receives JavaScript code, compiles, and executes it
	- V8 does:
		- Compiles and executes JS code
		- Handling call stack — running your JS functions in some order
		- Managing memory allocation for objects — the memory heap
		- Garbage collection — of objects which are no longer in use
		- Provide all the data types, operators, objects and functions
	- V8 is a single-threaded execution engine. It’s built to run exactly one thread per JavaScript execution context

## [NodeJs](https://nodejs.org/en/)
* Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side
* Node.js is a platform built on Chrome’s Javascript run-time for building fast and scalable network applications
* Node.js is NOT a framework. There are web-based frameworks, such as Express, which are based on Node.js
* [Why Node.js?][3]
	- Very fast (The speed of Node.js is mainly down to two things: the V8 engine and its non-blocking feature)
	- Asynchronous and event driven
	- Single Threaded but highly scalable
	- No Buffering

## [NPM](https://www.npmjs.com/)
* npm is a software registry
* [package.json](https://docs.npmjs.com/files/package.json)

## [NVM](https://github.com/nvm-sh/nvm)


---

References:
* https://hackernoon.com/javascript-v8-engine-explained-3f940148d4ef
* https://nodejs.dev/the-v8-javascript-engine
* [3]: https://codeburst.io/the-only-nodejs-introduction-youll-ever-need-d969a47ef219