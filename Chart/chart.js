// Data for the chart
const ages = [4, 23, 26, 28, 67];

// Function to initialize the line chart
function createChart() {
    const ctx = document.getElementById('myChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Person 1', 'Person 2', 'Person 3', 'Person 4', 'Person 5'], // x-axis labels
            datasets: [{
                label: 'Ages',
                data: ages,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                fill: false,
                pointBackgroundColor: 'rgba(75, 192, 192, 1)',
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Function to change the background color
function changeBackgroundColor() {
    document.body.style.backgroundColor = getRandomColor();
}

// Helper function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Initialize the chart when the page loads
window.onload = createChart;

// Add event listener to the button
document.getElementById('colorButton').addEventListener('click', changeBackgroundColor);
