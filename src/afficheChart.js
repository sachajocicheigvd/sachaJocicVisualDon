import ApexCharts from 'apexcharts';

function afficheChart(hydroVal, photoVal, nuclVal, dechVal, gazVal, biomVal, eolVal, petVal){

    hydroVal = parseInt(hydroVal)/1000;
    photoVal = parseInt(photoVal)/1000;
    nuclVal = parseInt(nuclVal)/1000;
    dechVal = parseInt(dechVal)/1000;
    gazVal = parseInt(gazVal)/1000;
    biomVal = parseInt(biomVal)/1000;
    eolVal = parseInt(eolVal)/1000;
    petVal = parseInt(petVal)/1000;

    console.log("afficheChart") 
    
    document.querySelector("#chart").innerHTML = "";

    let data = [];

    if (hydroVal !== 0) {
        data.push({
            data: [hydroVal],
            name: 'Hydraulique'
        });
    }

    if (photoVal !== 0) {
        data.push({
            data: [photoVal],
            name: 'Photovoltaique'
        });
    }

    if (nuclVal !== 0) {
        data.push({
            data: [nuclVal],
            name: 'Nucléaire'
        });
    }

    if (dechVal !== 0) {
        data.push({
            data: [dechVal],
            name: 'Déchets'
        });
    }

    if (gazVal !== 0) {
        data.push({
            data: [gazVal],
            name: 'Gaz Naturel'
        });
    }

    if (biomVal !== 0) {
        data.push({
            data: [biomVal],
            name: 'Biomasse'
        });
    }

    if (eolVal !== 0) {
        data.push({
            data: [eolVal],
            name: 'Eolienne'
        });
    }

    if (petVal !== 0) {
        data.push({
            data: [petVal],
            name: 'Petrole'
        });
    }

    var options = {
        series: data,
        chart: {
            type: 'bar',
            height: 350
        },
        plotOptions: {
            bar: {
                borderRadius: 4,
                horizontal: true,
                dataLabels: {
                    position: 'right',
                    textAnchor: 'start',
                    offsetX: 10
                }
            }
        },
        dataLabels: {
            enabled: true,
            formatter: function(val) {
                return val.toFixed(0) + ' k';
            },
            offsetY: -5,
            style: {
                fontSize: '12px',
                colors: ['#000000']
            }
        },
        xaxis: {
            categories: data.map(item => item.name),
            labels: {
                show: false
            }
        }
    };
    
    var chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();
}

export {afficheChart};
