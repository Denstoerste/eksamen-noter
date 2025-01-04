//filter even numbers out

const numbers1 = [3, 5, 4, 11, 12, 10];
const oddNumbers = numbers1.filter(num => num % 2 !== 0);
console.log(`Odd numbers in the array: ${oddNumbers}`);
