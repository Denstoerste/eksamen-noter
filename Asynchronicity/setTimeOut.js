// Select elements from the DOM
const startButton = document.getElementById('startTimer');
const resetButton = document.getElementById('resetTimer');
const messageDiv = document.getElementById('message');

// Variable to store the timeout ID
let timeoutId;

// Event listener for starting the timer
startButton.addEventListener('click', () => {
    // Display the initial message
    messageDiv.textContent = "Timer started!";

    // Set a 5-second timeout
    timeoutId = setTimeout(() => {
        messageDiv.textContent = "5 seconds have passed!";
    }, 5000);
});

// Event listener for resetting the timer
resetButton.addEventListener('click', () => {
    // Clear the timeout if it exists
    if (timeoutId) {
        clearTimeout(timeoutId);
    }

    // Reset the message
    messageDiv.textContent = "Timer reset.";
});
