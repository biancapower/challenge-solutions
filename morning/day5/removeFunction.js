/*
Create a function called remove that will take two arguments, an array and a function. 

remove(array, callback)
remove should remove all elements from array that callback function returns truthy for (and mutate the original array).

The callback function is called removeFunction and is invoked with one argument (value):

removerFunction(value)
removerFunction should return true when the value begins with the letter 't' or the letter 'T'. Otherwise it should return false.
*/

function remove(items, callback) {
	
	let i = 0;
	
	while (i < items.length) {
	  
		if (callback(items[i])) {
			
			items.splice(i, 1);
			
		} else {
			i++;
		}
			
	}

}

function removerFunction(item) {
	// returns true if item starts with 't' or 'T', else returns false
	return (/^[t]/i).test(item);
}

