 /*
Write a function that will take a string as an argument. The method will check this string, and count the amount of 'x's and 'o's. It should return true if the amount of 'x's and 'o's are the same, and should return false if they are different. It should also be case insensitive.

E.g. exesAndOhs("ooxx") should return true

E.g. exesAndOhs("oOxXxoX") should return false
*/

const exesAndOhs = (string) => {
	// Your code here
	return (string === "") || (string.match(/x/gi).length === string.match(/o/gi).length);
}
