const ctx = document.querySelector('#chart').getContext('2d');
const chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label:'chart',
            data: [12, 19, 3, 5, 2, 3],
        }
        ]
    },
    options: {
        onClick: (e) => {
            console.log(e)
        },
    }
});