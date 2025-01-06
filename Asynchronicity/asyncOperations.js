// Select the button and output elements
const button = document.querySelector('#fetchActivity');
const output = document.querySelector('#output');

// Add a click event listener to the button
button.addEventListener('click', () => {
    // Display a fetching message
    output.textContent = 'Fetching activity...';

    // Simulate a delay using setTimeout
    setTimeout(() => {
        // Fetch a random activity from the Bored API
        fetch('https://www.boredapi.com/api/activity/')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch activity');
                }
                return response.json();
            })
            .then(data => {
                // Display the fetched activity
                output.textContent = `Activity: ${data.activity}`;
            })
            .catch(error => {
                // Handle any errors
                output.textContent = 'Oops! Something went wrong.';
                console.error(error);
            });
    }, 2000); // 2-second delay
});
