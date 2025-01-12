// Select the button and the container where the image will be displayed
const button = document.getElementById('fetchDog');
const container = document.getElementById('dogContainer');

// Function to fetch and display a random dog image
function fetchDogImage() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json()) // Parse the JSON response
        .then(data => {
            // Clear any previous image
            container.textContent = '';

            // Create an img element
            const img = document.createElement('img');
            img.src = data.message; // Set the src attribute to the dog image URL
            img.alt = 'A cute dog';
            img.style.maxWidth = '300px'; // Optional styling
            img.style.border = '2px solid black';

            // Append the image to the container
            container.appendChild(img);
        })
        .catch(error => console.error('Error fetching dog image:', error)); // Handle errors
}

// Add a click event listener to the button
button.addEventListener('click', fetchDogImage);

// Fetch a dog image when the page loads
fetchDogImage();
