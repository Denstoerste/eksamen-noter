// Select the button and prices container
const button = document.getElementById('refresh-prices');
const pricesDiv = document.getElementById('prices');

// Function to fetch and display cryptocurrency prices
async function fetchPrices() {
    try {
        // Display loading message
        pricesDiv.textContent = 'Fetching prices...';

        // Fetch prices from the CoinGecko API
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd');
        if (!response.ok) {
            throw new Error('Failed to fetch prices.');
        }

        const data = await response.json();

        // Extract prices
        const bitcoinPrice = data.bitcoin.usd;
        const ethereumPrice = data.ethereum.usd;

        // Display prices
        pricesDiv.innerHTML = `
      <p>Bitcoin: $${bitcoinPrice}</p>
      <p>Ethereum: $${ethereumPrice}</p>
    `;
    } catch (error) {
        // Handle errors
        pricesDiv.textContent = 'Error fetching prices. Please try again.';
        console.error('Error:', error);
    }
}

// Add event listener to the button
button.addEventListener('click', fetchPrices);

// Fetch prices when the page loads
fetchPrices();
