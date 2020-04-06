/*
Write a method that will take a string and
return an array of vowels used in that string.

Example:
vowels("The quick brown fox") should return ["e","u","i","o","o"]
vowels("Hello WOrld") should return ["e","o","O"]
*/

function vowels(string) {
	return string.match(/[aeiou]/gi)
}
