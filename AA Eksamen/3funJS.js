function multiplyNumbers(a, b){
    return a*b;
}


const result1 = multiplyNumbers(4,5);
console.log(`The product of 4 and 5 is: ${result1}`);

const result2 = multiplyNumbers(10, 3);
console.log(`The product of 10 and 3 is: ${result2}`);


const result = multiplyNumbers(4, 5);

// Select the <p> element by its ID
const resultP = document.getElementById('result');

// Render the result to the <p> element
resultP.textContent = `The product of 4 and 5 is: ${result}`;










