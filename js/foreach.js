console.log("foreach :");
var text=["food","sea","fish","boat"];
console.log("Original Array: ",text);
var length = text.length;
console.log("Length of orginal Array: ", length);
console.log("Method: text.foreach(myfuction) :", "used to call a function for each element in array ");
function myFunction(item){
console.log(item);
}
console.log("change in Array: ");
text.forEach(myFunction);
var LengthafterforEach= text.length;
console.log("Change in Length of orginal Array after includes():", LengthafterforEach);