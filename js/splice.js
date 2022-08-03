console.log("Splice :");
var text=["food","sea","fish","boat"];
console.log("Original Array: ",text);
var length = text.length;
console.log("Length of orginal Array: ", length);
console.log("Method: text.splice(food) :", "Used to add or remove elements in array");
text.splice(2,0,"food","food")
console.log ("Change in array: ",text);
var Lengthaftersplice= text.length;
console.log("Change in Length of orginal Array after splice():", Lengthaftersplice);