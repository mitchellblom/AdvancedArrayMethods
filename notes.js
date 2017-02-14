var fruits = ["apple", "banana", "cherry"];

// function outputFruitOld (array) {
// 	for (i = 0; i < array.length; i++) {
// 		console.log(array[i]);
// 	}
// }

// outputFruitOld(fruits);

// function outputFruits (element, index) {
// 	console.log(element);
// 	console.log("array[" + index + "] " + element);	
// }

// fruits.forEach(outputFruits); /*does a callback FOR EACH of the elements in var "fruits" */

// fruits.forEach(function(fruit) {
// 	console.log(fruit);
// });

// 2A Write a function called backwardFruitsPld that reverses the letters in each word in the fruits array.

// function backwardFruitsOld(array) {
// 	var backwardsFruit = [];
// 	for (i = 0; i < array.length; i++) {
// 		backwardsFruit.push(array[i].split("").reverse().join(""));
// 	}
// 	console.log(backwardsFruit);
// }

// backwardFruitsOld(fruits);

// // 2B: Rewrite using map array method

// var backwardsFruit = fruits.map(function(e) {		 /*creates array and pushes elements into it*/
// 	return e.split("").reverse().join("");
// });
// console.log("reversing letters using .map: ", backwardsFruit);


// // 3A: Write a funciton called fiveLettersOnlyOld that only returns fruits that have 5 letters.

// function fiveLettersOnlyOld (array) {
// 	var filteredFruits = [];
// 	for (var i = 0; i < array.length; i++) {
// 		if(array[i].length === 5) {
// 			filteredFruits.push(array[i]);
// 		}
// 	}
// 	console.log("five letters only: ", filteredFruits);
// }

// fiveLettersOnlyOld(fruits);

// // 3B Rewrite using any filter array method

// function filterIt (cat) {
// 	if (cat.length === 5) {
// 		return cat;
// 	}
// }

// var filteredFruits = fruits.filter(filterIt);
// console.log(filteredFruits);



// var numbers = [0, 1, 2, 3, 4];

// // 4A: Write a function called addzOld that returns the sum of an array.

// function addzPld(array) {
// 	var sum = 0;
// 	for (var i = 0; i < array.length; i++) {
// 		sum += array[i];
// 	}
// 	console.log(sum);
// }

// addzOld(number);


// 4B: Rewrite using reduce array method

// applies function against an accumulator. 
// current value of the array from l to r. 
// iteraly reduce that into a final sum value. sum in the case below, but can be whatever operation

// var sum = [0,1,2,3,4].reduce(function(previousValue, currentValue, index){
// 	console.log("current index " + index);
// 	console.log("prevoiusValue", previousValue);
// 	console.log("currentValue ", currentValue);
// 	return previousValue + currentValue;
// });
// console.log(sum);

// 4C: my made up example of using a .reduce function but with multiplication

// var product = [1,2,3,4,5].reduce(function(previousValue, currentValue, index){
// 	console.log("current index ", index);
// 	console.log("prevoiusValue", previousValue);
// 	console.log("currentValue ", currentValue);
// 	return previousValue * currentValue;
// });
// console.log(product);


