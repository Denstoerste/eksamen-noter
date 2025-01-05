const ctx = document.querySelector('#chart').getContext('2d');
const chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Danmark","Sweeden","Uganda","hat"],
        datasets: [{
            label:'Danmark',
            data: [1000,900,500],
            backgroundColor: ["blue","grey","red"]
        }
        ]
    },
    options: {
        onClick: (e) => {
            console.log(e)
        },
    }
});