// Trips Chart
        const tripsCtx = document.getElementById('tripsChart').getContext('2d');
        const tripsChart = new Chart(tripsCtx, {
            type: 'line',
            data: {
                labels: ['Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue'],
                datasets: [{
                    label: 'Trips',
                    data: [1500, 1200, 900, 600, 800, 1100, 1300],
                    backgroundColor: 'rgba(67, 97, 238, 0.1)',
                    borderColor: '#4361ee',
                    borderWidth: 3,
                    tension: 0.3,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            drawBorder: false
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                }
            }
        });

        // Revenue Chart
        const revenueCtx = document.getElementById('revenueChart').getContext('2d');
        const revenueChart = new Chart(revenueCtx, {
            type: 'doughnut',
            data: {
                labels: ['Vans', 'Trucks'],
                datasets: [{
                    data: [30, 45, 25],
                    backgroundColor: [
                        '#4361ee',
                        '#4cc9f0',
                        '#3f37c9'
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                cutout: '70%',
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        });