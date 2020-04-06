# Open Door
Open Door

Function openDoor is passed an array of objects, each two properties: name (string) and hasCoffee (boolean).

openDoor should only return true if, for at least one of the objects in the input array, name is Simon and hasCoffee is true. Otherwise return false.

Tests:
```
const openDoor = require("/home/openDoor").openDoor

function makeItem(name, hasCoffee) {
    item = new Object()
    item.name = name
    item.hasCoffee = hasCoffee
    return item
}

describe('openDoor', function () {

    let hash = []
    test('should return true if "Simon" and hasCoffee with single object', function () {
        hash = []
        hash.push(makeItem('Simon', true))
        expect(openDoor(hash)).toBe(true)
    })
    test('should return true if "Simon" and hasCoffee with multiple objects', function () {
        hash = []
        hash.push(makeItem('Simon', true))
        hash.push(makeItem('Scott', true))
        expect(openDoor(hash)).toBe(true)
    })
    test('should return false if !"Simon" and hasCoffee', function () {
        hash = []
        hash.push(makeItem('Scott', true))
        expect(openDoor(hash)).toBe(false)
    })
    test('should return false if "Simon" and !hasCoffee', function () {
        hash = []
        hash.push(makeItem('Simon', false))
        expect(openDoor(hash)).toBe(false)
    })
    test('should return false if empty array passed', function () {
        hash = []
        expect(openDoor(hash)).toBe(false)
    })
})
```

# Vowels
Vowels

Write a method that will take a string and
return an array of vowels used in that string.

Example:
vowels("The quick brown fox") should return ["e","u","i","o","o"]
vowels("Hello WOrld") should return ["e","o","O"]

Tests:
```
const vowels = require('/home/vowels').vowels;

describe('vowels', function () {
  test('Should return the vowels from a string', function () {
    expect(vowels("The quick brown fox")).toEqual(["e", "u", "i", "o", "o"]);
    expect(vowels("Hello World")).toEqual(["e", "o", "o"]);
  })
  test('Test vowels casing', function () {
    expect(vowels("cAse tEst")).toEqual(["A", "e", "E"]);
  })
})
```
