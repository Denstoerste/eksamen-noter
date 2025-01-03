// Initial data
const salesData = {
    months: ['January', 'February', 'March', 'April', 'May', 'June'],
    sales: [150, 200, 300, 400, 250, 500],
};

// Get the canvas element
const ctx = document.getElementById('salesChart').getContext('2d');

// Create the initial chart
let salesChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: salesData.months,
        datasets: [{
            label: 'Monthly Sales',
            data: salesData.sales,
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
        }],
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    },
});

// Function to update chart data
function updateChart() {
    // Generate random sales data
    // Update the chart data
    salesChart.data.datasets[0].data = salesData.months.map(() => Math.floor(Math.random() * 401) + 100);

    // Update the chart
    salesChart.update();
}

// Attach event listener to the button
document.getElementById('updateButton').addEventListener('click', updateChart);