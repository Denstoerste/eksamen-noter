// Select the button and the paragraph to display the fact
const button = document.querySelector('#new-fact');
const factContainer = document.querySelector('#cat-fact');

// Function to fetch and display a random cat fact
function fetchCatFact() {
    fetch('https://catfact.ninja/fact')
        .then(response => response.json()) // Parse JSON response
        .then(data => {
            factContainer.textContent = data.fact; // Display the cat fact
        })
        .catch(error => {
            factContainer.textContent = 'Oops! Something went wrong.';
            console.error('Error fetching cat fact:', error);
        });
}

// Add event listener to the button
button.addEventListener('click', fetchCatFact);

