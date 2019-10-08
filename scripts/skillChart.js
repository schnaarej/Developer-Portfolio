var ctx = document.getElementById('radar-chart');

new Chart(ctx, {
    type: 'radar',
    data: {
        labels:["Software Engineering", "Back-End Development",
         "Business Admin.", "Front-End Development", "Graphic Design", 
         "Data Visualization", "Math & Science", "Big Data Analysis"],
        datasets: [
            {
                label: "Skill",
                fill: true,
                backgroundColor: "#fc005815",
                pointRadius: 5,
                pointHoverRadius: 10,
                pointBackgroundColor: "#fc0058",
                borderColor: "#fc005850",
                data: [10, 7, 10, 9, 10, 6, 10, 4]
            }
        ]
    },
    options: {
        scale: {
            display: false,
            ticks: {
                beginAtZero: true
            }
        },
        legend: {
            display: false
        }
    }
});

Chart.defaults.global.defaultFontColor = "White";