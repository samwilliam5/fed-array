console.log("include :");
var text=["food","sea","fish","boat"];
console.log("Original Array: ",text);
var length = text.length;
console.log("Length of orginal Array: ", length);
console.log("Method: text.includes(food) :", "return true if array contains specific values and return false if value not found");
text.includes("food")
console.log ("Change in array: ",text.includes("food"));
var Lengthafterincludes= text.length;
console.log("Change in Length of orginal Array after includes():", Lengthafterincludes);