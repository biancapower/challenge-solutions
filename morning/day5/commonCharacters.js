/*
Write code which will return the common characters found in two different strings. Only return one copy of each common character. Character case should be ignored (your solution should be case-insensitive).
*/

function commonCharacters(string1, string2) {
	
	// convert strings to arrays of characters, making all lower case
	let str1 = string1.toLowerCase().split("");
	let str2 = string2.toLowerCase().split("");
	
	// create sets
	let str1Set = new Set();
	let str2Set = new Set();
	
	// create sets out of arrays
	for (let c1 of str1) {
		str1Set.add(c1);
	}
	
	for (let c2 of str2) {
		str2Set.add(c2);
	}
	
	// create a set of common characters
	let commonCharsSet = new Set([...str1Set].filter(x => str2Set.has(x)));
	
	// convert set of common characters to a string, removing whitespace
	let commonCharsString = [...commonCharsSet].join('').replace(/\s+/g, '');
	
	return commonCharsString;
	
}

console.log(commonCharacters("abcda adsc", "stba1r ring2"));
