function arrayAdder(numbersArray, numToAdd) {
    // Add the number to each element in the array
    const updatedArray = numbersArray.map(number => number + numToAdd);

    // Render the first element of the updated array to the page
    if (updatedArray.length > 0) {
        const firstElement = updatedArray[0];
        const outputElement = document.createElement('div');
        outputElement.textContent = `First element: ${firstElement}`;
        document.body.appendChild(outputElement);
    }

    // Return the updated array
    return updatedArray;
}

// Example usage:
const numbers = [1, 2, 3, 4, 5];
const addedNumber = 10;
const result = arrayAdder(numbers, addedNumber);
console.log(result);