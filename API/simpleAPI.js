document.querySelector('#fetchJoke').addEventListener('click', async () => {
    const jokeContainer = document.getElementById('jokeDisplay');

    try {
        const response = await fetch('https://official-joke-api.appspot.com/random_joke');
        if (!response.ok) {
            throw new Error('Failed to fetch joke');
        }
        const joke = await response.json();
        jokeContainer.textContent = `${joke.setup} - ${joke.punchline}`;
    } catch (error) {
        jokeContainer.textContent = 'Oops! Something went wrong.';
        console.error(error);
    }
});
