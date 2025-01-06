// Select the button from the DOM
const colorButton = document.querySelector('#colorButton');

// Function to generate a random color
function getRandomColor() {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}

// Add a click event listener to the button
colorButton.addEventListener('click', () => {
    // Change the background color of the body
    document.body.style.backgroundColor = getRandomColor();
});

