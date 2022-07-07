import {cryptos} from './cryptoapi.js';

export const ctx = document.getElementById('myChart');
  export const myChart = async()=>{
    const {arrayCoinValue, arrayDates, arrayTest} = await cryptos('Semanal','BTC','MXN');
    console.log(arrayCoinValue);
    console.log(arrayDates);
    console.log(arrayTest);
    const test = arrayTest.map(value => value.date);
    console.log(test);

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: arrayDates,
            datasets: [{
                label: '# Precio btc',
                data: arrayCoinValue,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(153, 107, 255, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 2
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });


  }

  myChart()