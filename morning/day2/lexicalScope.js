/*
In the example given, the multiplySum function is not returning the expected result. Figure out why, and fix the problem by adding a single word to the provided code.

What is another way to fix the problem?
*/

// Multiplies the sum of the numbers in the array by some number
function multiplySum(num,arr) {
	sum = 0;
	for(num of arr) { //SOLUTION: let num of arr
		sum += num;
	}
	return sum*num;
}

let factor = 3;
let numArray = [3,2,1];
answer = multiplySum(factor,numArray);
console.log("Expect 3 * 6(18) and got: " + answer);


