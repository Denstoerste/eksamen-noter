const button = document.querySelector('#button');
const message = document.querySelector('#ptag');

button.addEventListener('click', () => {
    console.log('Button clicked!');
    const colorInput = document.querySelector('#colorInput').value.trim(); // Get the input and trim whitespace

    if (colorInput) {
        // If the input is not empty
        message.textContent = `Your favorite color is ${colorInput}!`;
    } else {
        // If the input is empty
        message.textContent = 'Please enter a color!';
    }
});
