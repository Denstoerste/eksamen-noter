// Select elements from the DOM
const nameInput = document.getElementById('name');
const ageInput = document.getElementById('age');
const submitButton = document.getElementById('submitButton');

// Add an event listener to the button
submitButton.addEventListener('click', () => {
    // Get the user's input
    const name = nameInput.value.trim();
    const age = parseInt(ageInput.value);

    // Validate the input
    if (!name || isNaN(age)) {
        alert('Please enter both your name and a valid age.');
        return;
    }

    // Determine the message based on age
    const ageMessage = age > 40 ? 'You are old.' : 'You are young.';

    // Create a message to display
    const message = `Hello, ${name}! ${ageMessage}`;

    // Display the message on the page
    const resultDiv = document.createElement('div');
    resultDiv.textContent = message;
    resultDiv.style.marginTop = '20px';
    resultDiv.style.fontSize = '1.2em';

    // Append the result to the body
    document.body.appendChild(resultDiv);
});
