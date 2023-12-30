/**
 * var numberArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
 * Instruction:
 * 1. Find Even and Odd numbers from this number array.
 * 2. Make two empty arrays for odd and even
 * 3. Push an even number into an even array and an odd array.
 * 4.  and show on the browser.
 *
 *** Note:
 * Use Module operator (%)  for the find even odd and for loop for the iteration.
 */

var numberArray = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

var evenArr = [];
var oddArr = [];

// find even and odd number and push it to the respective array

for (let i = 0; i < numberArray.length; i++) {
  if (numberArray[i] % 2 == 0) {
    // even
    evenArr.push(numberArray[i]);
  } else {
    oddArr.push(numberArray[i]);
  }
}

// console.log(evenArr);
// console.log(oddArr);

// Print Even Numbers
document.write("<h1>Even Numbers</h1>");
document.write("Even: ");
for (let i = 0; i < evenArr.length; i++) {
  document.write(evenArr[i] + ",");
}

// Print Odd Numbers
document.write("<h1>Odd Numbers</h1>");
document.write("Odd: ");
for (let i = 0; i < oddArr.length; i++) {
  document.write(oddArr[i] + ",");
}
