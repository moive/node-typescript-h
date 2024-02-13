console.log("Init program");
setTimeout(() => {
	console.log("First Timeout");
}, 3000);

setTimeout(() => {
	console.log("Secound Timeout");
}, 1);

setTimeout(() => {
	console.log("Thirty Timeout");
}, 0);

console.log("End program");
