/*
Function openDoor is passed an array of objects, each two properties: name (string) and hasCoffee (boolean).

openDoor should only return true if, for at least one of the objects in the input array, name is Simon and hasCoffee is true. Otherwise return false.
*/

function openDoor(input) {
    
    let open = false;
    
    input.forEach((item) => {
        if (item.name === "Simon" && item.hasCoffee) {
            open = true;
        }
    });
    
    return open;
}

arr = [{name: "Fred", hasCoffee: true}, {name: "Simon", hasCoffee: true}, {name: "Simon", hasCoffee: false}, {name: "Fred", hasCoffee: false}];

console.log(openDoor(arr));
