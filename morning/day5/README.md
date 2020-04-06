#Common Characters

Write code which will return the common characters found in two different strings. Only return one copy of each common character. Character case should be ignored (your solution should be case-insensitive).

Examples:
commonCharacters("efg", "feg") => "efg"
commonCharacters("We are both dragon energy", "I am God's vessel") => "eaodg"
commonCharacters("Alright alright alright", "") => ""

Tests:
```
const commonCharacters = require('/home/commonCharacters').commonCharacters;

describe('Common Characters', () => {
  it('returns commons characters ignoring case', () => {
    expect(commonCharacters('Abc', 'abc')).toBe('abc');
  });

  it('returns common characters', () => {
    expect(commonCharacters("What is love?", "Baby don't hurt me")).toBe('hatoe');
  });

  it('returns common characters', () => {
    expect(commonCharacters('Riding on a buffalo makes me more approachable', 'so what')).toBe('oash');
  });

  it('returns empty string', () => {
    expect(commonCharacters('', 'No more')).toBe('');
  });

  it('returns empty string', () => {
    expect(commonCharacters('No more', '')).toBe('');
  });

  it('returns empty string', () => {
    expect(commonCharacters('', '')).toBe('');
  });
});
```

# Callbacks - Remove Function

This one is challenging! It will really test your understanding of functions, callbacks, and array methods.

Take your time, and help each other. You may want to work in pairs.

Create a function called remove that will take two arguments, an array and a function. 

remove(array, callback)
remove should remove all elements from array that callback function returns truthy for (and mutate the original array).

The callback function is called removeFunction and is invoked with one argument (value):

removerFunction(value)
removerFunction should return true when the value begins with the letter 't' or the letter 'T'. Otherwise it should return false.

Example:    
```
let people = ["tanya", "sue", "john", "garret"];
let removed = remove(people, removerFunction) ; // should remove "tanya" from people and return it in an array
console.log(people);  // should log: ["sue", "john", "garret"]
console.log(removed); // should log: ["tanya"]
```

Tests:
```
const {remove, removerFunction} = require('/home/remove.js');

describe('Does not remove anything if nothing starts with t',() => {
    it('Does not remove anything from ["cat", "dog"]', () => {
        let items = ["cat", "dog"];
        expect(remove(items, removerFunction)).toEqual([]);
        expect(items).toEqual(["cat", "dog"]);
    });
    it('Does not remove anything from []', () => {
        let    items = [];
        expect(remove(items,removerFunction)).toEqual([]);
        expect(items).toEqual([]);
    });
    it('Does not remove anything from ["one", "four"]', () => {
        let items = ["one", "four"];
        expect(remove(items, removerFunction)).toEqual([]);
        expect(items).toEqual(["one", "four"]);
    });
});

describe('Removes strings that start with t or T', () => {
    it('Removes toad from ["cat", "dog", "toad"]', () => {
        let items = ["cat", "dog", "toad"];
        expect(remove(items, removerFunction)).toEqual(["toad"]);
        expect(items).toEqual(["cat", "dog"]);
    });
    it('Removes Toad from ["cat", "dog", "Toad"]', () => {
        let items = ["cat", "dog", "Toad"];
        expect(remove(items, removerFunction)).toEqual(["Toad"]);
        expect(items).toEqual(["cat", "dog"]);
    });
})
```
