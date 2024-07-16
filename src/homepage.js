// JavaScript for weight graph (using Chart.js)
document.addEventListener('DOMContentLoaded', function() {
    drawWeightGraph();
});

function drawWeightGraph() {
    const weightGraph = document.getElementById('weightGraph').getContext('2d');

    new Chart(weightGraph, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Weight',
                data: [80, 78, 77, 75, 73, 72],
                borderColor: 'lightblue',
                borderWidth: 2,
                fill: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: false
                }
            }
        }
    });
}
