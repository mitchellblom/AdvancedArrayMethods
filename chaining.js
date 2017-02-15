// Using one single line of JavaScript code, complete the following tasks on the array of integers below.

var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

// 1.  Sort the numbers in descending order (10, 9, 8, 7, etc).

var integersDescending = integers.sort(function(a,b) {return b-a});

console.log("Integers descending in value: ", integersDescending);

// 2.  Remove any integers greater than 19.

var lessThan19 = integers.sort(function(a,b) {return b-a}).filter(function(num){return num < 19});

console.log("Integers less than 19: ", lessThan19)


// 3.  Multiply each remaining number by 1.5 and then subtract 1.

var timesMinus = integers.sort(function(a,b) {return b-a}).filter(function(num){return num < 19}).map(function(num){return (num * 1.5)-1});

	console.log("Times 1.5 then Subtract 1: ", timesMinus);

// 4.  Then output (either in the DOM or the console) the sum of all the resulting numbers.

var sumResulting = integers.sort(function(a,b) {return b-a}).filter(function(num){return num < 19}).map(function(num){return (num * 1.5)-1}).reduce(function(prev, curr){return prev + curr;});

console.log("Sum of the resulting numbers: ", sumResulting);


// Making 4 neater, but doing the same thing without console logging:

var chainingResult = integers.sort(function(a,b) {return b-a})
	.filter(function(num){return num < 19})
	.map(function(num){return (num * 1.5)-1})
	.reduce(function(prev, curr){return prev + curr;});