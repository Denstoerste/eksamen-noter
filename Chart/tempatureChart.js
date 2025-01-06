const tempatures = [15,16,17,18,19];
const days = ["monday","tuesday","wednesday","Thursday","Friday"];


const ctx = document.querySelector('#temperatureChart').getContext('2d');
const temperatureChart = new Chart(ctx, {
    type: 'line',
        data: {
        labels: days,
            datasets: [{
            label: 'Daily Temperatures (°C)',
            data: tempatures,
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderWidth: 2,
            fill: true
        }]
    },
    options: {
        responsive: true,
            scales: {
            y: {
                beginAtZero: false
            }
        }
    }
});

