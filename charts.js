google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {


    var data = google.visualization.arrayToDataTable([
        ['Location', 'Revenue', { role: 'style' }],
        ['Canada', 8.94, '#40BF99'],            // RGB value
        ['Atlanta', 10.49, '#40BF99'],            // English color name
        ['Pittsburgh', 19.30, '#40BF99'],
        ['Ukraine', 21.45, '#40BF99' ],
        ['India', 10.49, '#40BF99'], // CSS-style declaration
     ]);

   

      var options = {
        title: 'Revenue By Job Location',
        chartArea: {width: '30%'},
        hAxis: {
          title: 'Total Revenue',
          minValue: 0
        },
        vAxis: {
          title: 'Job Location' 
        }
      };

      var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

      chart.draw(data, options);
    }

   


    google.charts.load('current', {packages: ['corechart', 'bar']});
    google.charts.setOnLoadCallback(drawMultSeries);
    
    function drawMultSeries() {
          var data = google.visualization.arrayToDataTable([
            ['City', '2020 Revenue', '2010 Revenue'],
            ['Doctors', 8175000, 8008000],
            ['Data scientist', 3792000, 3694000],
            ['Blockchain developer', 2695000, 2896000],
            ['Lawyer', 2099000, 1953000],
            ['Marketing manager', 1526000, 1517000]
          ]);
    
          var options = {
            title: 'Revenue By Job Types',
            chartArea: {width: '20%'},
            hAxis: {
              title: 'Total Revenue',
              minValue: 0
            },
            vAxis: {
              title: 'Tyep of jobs'
            }
          };
    
          var chart = new google.visualization.BarChart(document.getElementById('chart2_div'));
          chart.draw(data, options);
        }