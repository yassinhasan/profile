document.addEventListener('DOMContentLoaded', () => {
    // Programming Languages Chart
    const programmingCtx = document.getElementById('programmingChart').getContext('2d');
    const programmingChart = new Chart(programmingCtx, {
        type: 'bar',
        data: {
            labels: ['Python', 'JavaScript', 'HTML/CSS', 'Java', 'C#', 'C++', 'PHP'],
            datasets: [{
                label: 'Proficiency Level',
                data: [80, 95, 95, 75, 70, 65, 75],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(75, 192, 192, 0.7)',
                    'rgba(153, 102, 255, 0.7)',
                    'rgba(255, 159, 64, 0.7)',
                    'rgba(199, 199, 199, 0.7)',
                    'rgba(83, 102, 255, 0.7)'
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(199, 199, 199, 1)',
                    'rgba(83, 102, 255, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Programming Languages Proficiency',
                    font: {
                        size: 16,
                        weight: 'bold'
                    }
                },
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        }
                    }
                }
            }
        }
    });

    // Data Tools Chart
    const dataToolsCtx = document.getElementById('dataToolsChart').getContext('2d');
    const dataToolsChart = new Chart(dataToolsCtx, {
        type: 'polarArea',
        data: {
            labels: ['Excel', 'Power BI', 'Power Query', 'Data Visualization', 'SQL', 'AI Models'],
            datasets: [{
                label: 'Skill Level',
                data: [70, 70, 70, 80, 69, 76],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(75, 192, 192, 0.7)',
                    'rgba(153, 102, 255, 0.7)',
                    'rgba(255, 159, 64, 0.7)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Data Analysis Tools Expertise',
                    font: {
                        size: 14,
                        weight: 'bold'
                    }
                }
            }
        }
    });

    // DevOps Chart
    const devopsCtx = document.getElementById('devopsChart').getContext('2d');
    const devopsChart = new Chart(devopsCtx, {
        type: 'doughnut',
        data: {
            labels: ['Docker', 'Kubernetes', 'Linux/Bash', 'PowerShell', 'Virtualization', 'CCNA/MCSA'],
            datasets: [{
                data: [85, 80, 75, 70, 75, 70],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(75, 192, 192, 0.7)',
                    'rgba(153, 102, 255, 0.7)',
                    'rgba(255, 159, 64, 0.7)'
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'DevOps & Infrastructure Skills',
                    font: {
                        size: 14,
                        weight: 'bold'
                    }
                },
                legend: {
                    position: 'bottom'
                }
            }
        }
    });

    // Data Analysis Chart
    const analysisCtx = document.getElementById('analysisChart').getContext('2d');
    const analysisChart = new Chart(analysisCtx, {
        type: 'line',
        data: {
            labels: ['Data Cleaning', 'Statistical Analysis', 'Machine Learning', 'Data Visualization', 'Dashboard Creation', 'Predictive Modeling'],
            datasets: [{
                label: 'Skill Level',
                data: [80, 69, 75, 82, 87, 79],
                fill: true,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(75, 192, 192, 1)',
                tension: 0.3
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Data Analysis Capabilities',
                    font: {
                        size: 14,
                        weight: 'bold'
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        }
                    }
                }
            }
        }
    });

});
