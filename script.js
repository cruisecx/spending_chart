const myChart = document.querySelector('#myChart')
const ctx = myChart.getContext('2d')

const chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'],
        datasets: [{
            label: 'spending p/ day',
            data: [61.53, 87.23, 53.70, 83.24, 69.45, 68.76, 54.42],
            backgroundColor: [
                'rgba(224, 127, 102, 1)',
                'rgba(224, 127, 102, 1)',
                'rgba(224, 127, 102, 1)',
                'rgba(224, 127, 102, 1)',
                'rgba(224, 127, 102, 1)',
                'rgba(224, 127, 102, 1)',
                'rgba(224, 127, 102, 1)'
            ],
            borderColor: [
                'rgba(224, 127, 102, 0.4)'
            ],
            borderRadius: 5,
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(54, 162, 235, 0.6)'
        }]
    },
    options: {
        responsive: false,
        maintainAspectRatio: true,
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    display: false
                }, 
                grid: {
                    display: false       
                }
            },
            x: {
                grid: {
                    display: false
                }
            }
        }
    }
})

const insertCSS = () => {
    document.styleSheets[0].insertRule(`
        canvas{
            margin-bottom: 20px;
        }
    `)
    document.styleSheets[0].insertRule(`
        .main{
            border-radius: 10px;
            background-color: white;
            width: 400px;
            padding: 15px;
        }
    `)
    document.styleSheets[0].insertRule(`
        .main-title{
            font-size: 24px;
            font-weight: 700;
            color: rgb(57, 28, 28);
            padding: 15px 0 25px 20px;
        }
    `)
    document.styleSheets[0].insertRule(`
        .main-stats{
            display: flex;
            justify-content: space-between;
            border-top: 1px solid rgba(224, 127, 102, 0.3);
            padding: 30px 20px 10px 20px;
        }
    `)
    document.styleSheets[0].insertRule(`
        .main-stats-1{
            color: rgba(57, 28, 28, 0.6);
            font-size: 14px;
        }
    `)
    document.styleSheets[0].insertRule(`
        .main-stats-2{
            font-size: 32px;
            font-weight: 700;
            color: rgba(57, 28, 28, 0.9);
            margin-top: 5px;
        }
    `)
    document.styleSheets[0].insertRule(`
        .main-stats-3{
            font-size: 16px;
            font-weight: 700;
            color: rgba(57, 28, 28, 0.9);
            text-align: end;
            margin-bottom: 5px;
        }
    `)
    document.styleSheets[0].insertRule(`
        .title{
            border-radius: 10px;
            width: 400px;
            height: 80px;
            padding: 20px;
            background-color: rgb(224, 127, 102);
            color: whitesmoke;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    `)
    document.styleSheets[0].insertRule(`
        .title-child{
            display: flex;
            flex-direction: column;
            gap: 15px;
        }
    `)
    document.styleSheets[0].insertRule(`
        .title-child div:last-child{
            font-size: 20px;
            font-weight: 700;
            letter-spacing: 1px;
        }
    `)
    document.styleSheets[0].insertRule(`
        .footer { 
            font-size: 10px; 
            text-align: center; 
            position: relative;
            bottom: -40px;
        }
    `)
    document.styleSheets[0].insertRule(`
        .footer a { 
            color: hsl(228, 45%, 44%); 
        }
    `)
}

insertCSS()