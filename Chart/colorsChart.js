const data = [2,3,4,5];
const labels = ["Red","Blue","Green","Yellow"];
const colors = ["#FF6384", "#36A2EB", "#4CAF50", "#FFCE56"];

const ctx = document.querySelector('#colorsChart').getContext('2d');
const colorsChart = new Chart(ctx,{
    type: 'pie',
    data: {
        labels: labels,
        datasets: [{
            data: data,
            backgroundColor: colors
        }]
    }
});