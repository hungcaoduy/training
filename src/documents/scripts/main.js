$(document).ready(function() {

// chap2.printCharacters("#",9);
// chap2.fizzBuzz();
// chap2.chesBoard();

// chap3 = exercise3();
// console.log(chap3.min(5,2));
// console.log(chap3.isEven(35));
// console.log(chap3.isEven(-2));
// console.log(chap3.countChar("BaaaBcBdBeeB","B"));

var chap4 = exports;
var arr1 = chap4.range(1,10,2);
console.log("sum(range(1,10,2)): " + arr1.join(" ") + " = " + chap4.sum(chap4.range(1,10,2)));
console.log("----------reversed but keep the origin unchanged--------");
console.log("reversed:" + chap4.reverseArray(arr1));
console.log("origin: " + arr1);
console.log("----------reversed the array in place--------");
var arr2 = chap4.rev(arr1);
console.log("returned array and the origin one are equal? " + (arr1===arr2));
console.log("origin: " + arr1);
console.log("new: " + arr2);
console.log("----------Compare two objects--------------");
console.log(journal[0]);
console.log( " and ");
console.log(journal[1]);
console.log(" are equal? " + chap4.deepEqual(journal[0],journal[1]));

});
