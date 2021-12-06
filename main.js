async function main() {

    // LOAD JSON DATA 
    const httpResponse = await fetch('nfl/profiles_1512362725.022629.json'); 
    const nflData = await httpResponse.json();
    console.log('NFL PLAYER DATA:', nflData);

    // GET NFL PLAYERS NAMES && HEIGHT
    let player = []; 
    let playerHeight = [];

    for(const playerData of nflData) {
        
        //PLAYER NAME
        console.log('Name:', playerData.name);
        player.push(playerData.name);
        
        //PLAYER HEIGHT 
        console.log('Height:', playerData.height);
        playerHeight.push(parseFloat(playerData.height));
    }

    // Draw the chart
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
    type: 'bar',
    options: {
        indexAxis: 'y'
    }, 
    data: {
        labels: player,
        datasets: [{
            axis: 'y', 
            label: 'NFL PLAYERS HEIGHT AVG',
            data: playerHeight,
            fill: false,
            backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
            
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
                
            ],
            borderWidth: 1
        }]
        },
    
});




}

main();