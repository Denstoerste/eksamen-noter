function multiplier (numberArray, singleNumber) {
console.log(numberArray.map(x => x * singleNumber));
return numberArray.map(x => x * singleNumber);
}

multiplier([1,2,3,4], 5);


// Query selectors to get the elements
const colorInput = document.querySelector('#colorInput');
const nameInput = document.querySelector('#nameInput');
const submitButton = document.querySelector('#submitButton');

// Add event listener with arrow function
submitButton.addEventListener('click', () => {

    event.preventDefault()

    // Get values from input fields
    const color = colorInput.value;
    const name = nameInput.value;

    // Change background color
    document.body.style.backgroundColor = color;

    // Log name to the console
    console.log(name);
});


