const friends = [12, 14, 13, 15, 16, 17, 18, 10];
// Remove elements from an Array
// and if necessary, insets new elements in their place,
// returning the deleted elements
// will change the original Array
const partial = friends.splice(2, 5, 5555, 9999, 4444)
console.log(partial)
console.log(friends)