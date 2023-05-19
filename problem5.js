// ৫. জাভাস্ক্রিপ্ট এ array এর map, forEach, filter, find কোনটা দিয়ে কি হয়। সেটার একটা সামারি লিখে ফেলো। 

/* map() method: The map() method applies a provided function to each element of an array and returns a new array with the results. It allows you to transform each element of the array based on the logic defined in the function. */

/* const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers);
// Output: [2, 4, 6, 8, 10] */



/* filter() method: The filter() method creates a new array containing elements from the original array that pass a provided condition. It tests each element against the condition and returns a new array with the elements that satisfy it. */

/* const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);
// Output: [2, 4] */


/* 
forEach() method: The forEach() method executes a provided function once for each element in an array. It allows you to perform an action on each element of the array, such as logging, updating variables, or invoking other functions.

const fruits = ['apple', 'banana', 'orange'];
fruits.forEach(fruit => console.log(fruit));
// Output:
// apple
// banana
// orange */


/* find() method: The find() method returns the first element in an array that satisfies a provided condition. It searches for an element that matches the condition defined in the function and returns that element. If no element is found, it returns undefined.
Example:

javascript
Copy code
const numbers = [1, 2, 3, 4, 5];
const foundNumber = numbers.find(num => num > 3);
console.log(foundNumber);
// Output: 4 */