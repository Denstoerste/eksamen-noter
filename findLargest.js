const numbers= [3,5,6,1,10,14]
const largestNumber = Math.max(...numbers);

console.log(`the largest number in the array is ${largestNumber}`);


const numbers1 = [3,5,4,11,12,10];
const evenNumbers = numbers1.filter(num => num % 2 === 0);
console.log(`Even numbers in the array: ${evenNumbers}`)