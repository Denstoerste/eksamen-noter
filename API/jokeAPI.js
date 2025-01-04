// Function to fetch and display a joke
function fetchJoke() {
    fetch('https://official-joke-api.appspot.com/random_joke')
        .then(response => response.json())
        .then(data => {
            const jokeDiv = document.getElementById('joke');
            jokeDiv.innerHTML = `<p><strong>Setup:</strong> ${data.setup}</p>
                           <p><strong>Punchline:</strong> ${data.punchline}</p>`;
        })
        .catch(error => {
            console.error('Error fetching joke:', error);
        });
}

// Fetch a joke when the page loads
fetchJoke();

// Fetch a new joke when the button is clicked
document.getElementById('getJoke').addEventListener('click', fetchJoke);
