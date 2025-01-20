const ctx = document.querySelector('#chart').getContext('2d');
const chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["mon","tue","wed","thu"],
        datasets: [{
            label:'Temperatures',
            data: [12, 18, 20, 24, 30, 28],
            backgroundColor: ["","","",""]
        }
        ]
    },
});


/*
options: {
    onClick: (e) => {
        console.log(e)
    },
}
*/
