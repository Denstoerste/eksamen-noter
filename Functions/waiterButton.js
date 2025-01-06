// Define the waiter function
function waiter(seconds) {
    setTimeout(() => {
        console.log(`Waited ${seconds} seconds`);
    }, seconds * 1000);
}

// Create a button and add it to the page
const button = document.createElement('button');
button.textContent = 'Click to Start Waiting';
button.style.padding = '10px';
button.style.fontSize = '16px';
document.body.appendChild(button);

// Add an event listener to the button
button.addEventListener('click', () => {
    const seconds = prompt('Enter the number of seconds to wait:');
    if (!isNaN(seconds) && seconds > 0) {
        waiter(Number(seconds));
    } else {
        alert('Please enter a valid positive number.');
    }
});
