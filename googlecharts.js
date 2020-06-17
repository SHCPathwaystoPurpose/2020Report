//Charts

google.charts.load('current', {'packages':['corechart']});

//Chart: engagementParticipation
google.charts.setOnLoadCallback(drawchartEngagementParticipation);


function drawchartEngagementParticipation() {
  var data = google.visualization.arrayToDataTable([
          ['Number of Events', 'SLO1', 'SLO2', 'SLO3'],
          ['0 Events',  2.41,   2.19,  1.82],
          ['1 Event',   2.86,   2.67,  2.49],
          ['2+ Events',  3.35,   3.21,  2.98]
        ]);

        var options = {
          curveType: 'function',
          legend: { position: 'bottom' },
          pointSize: 10,
          colors: ['#f9a11b','#039691', '#ef4b24'],
         
        };

        var chart = new google.visualization.LineChart(document.getElementById('chartEngagementParticipation'));

        chart.draw(data, options);
      }


//Chart: FacStaff
google.charts.setOnLoadCallback(drawchartSophomoreDinner);


function drawchartSophomoreDinner() {
  var data = google.visualization.arrayToDataTable([
          ['Learning Outcome', '% Agree or Strongly Agree'],
          ['SLO1',  .84],
          ['SLO2',   .75],
          ['SLO3',  .82],
        ]);

        var options = {
          curveType: 'function',
          legend: { position: 'bottom' },
          colors: ['#039691'],
          hAxis: { format: 'percent',
          viewWindow: {
        min: 0,
        max: 1
    },}
          
        };

        var chart = new google.visualization.BarChart(document.getElementById('chartSophomoreDinner'));

        chart.draw(data, options);
      }

//Chart: CurriculumRatings
google.charts.setOnLoadCallback(drawchartCurriculumRatings);


function drawchartCurriculumRatings() {
 var data = google.visualization.arrayToDataTable([
          ['Number of Courses', '0 Courses', '1 Course', '2+ Courses'],
['SLO 1', 2.88, 3.42, 3.67],
['SLO 2', 2.74, 3.31, 3.52],
['SLO 3', 2.45, 3.00, 3.33]
        ]);

        var options = {
          curveType: 'function',
          legend: { position: 'bottom' },
          colors: ['#f9a11b','#039691', '#ef4b24'],
         
        };

        var chart = new google.visualization.ColumnChart(document.getElementById('chartCurriculumRatings'));

        chart.draw(data, options);
      }


//Chart: Curriculum Division
google.charts.setOnLoadCallback(drawchartCurriculumDivision);


function drawchartCurriculumDivision() {
  var data = google.visualization.arrayToDataTable([
          ['Division', 'Number of Courses'],
          ['Business',  3],
          ['Communication/Visual & Performing Arts',   2],
          ['Languages & Literature',  2],
    ['Nursing', 6],
    ['Philosphy/Theology', 5],
    ['Social Science', 1],
    ['Other', 3]
        ]);

        var options = {
          colors: ['#f9a11b', '#ffc875', '#039691', '#38aaa6', '#ef4b24', '#ef876e', '#3d1951', '#654975'],
          height: 400,
                };

        var chart = new google.visualization.PieChart(document.getElementById('chartCurriculumDivision'));

        chart.draw(data, options);
      }

//Chart: Retreat
google.charts.setOnLoadCallback(drawchartRetreat);


function drawchartRetreat() {
  var data = google.visualization.arrayToDataTable([
          ['Learning Outcome', 'Did Not Attend Retreat', 'Attended Retreat'],
          ['SLO1',  3.05, 3.41],
          ['SLO2',   2.93, 3.07],
          ['SLO3',  2.63, 3.00],
        ]);

        var options = {
          curveType: 'function',
          legend: { position: 'bottom' },
          colors: ['#ef876e', '#ef4b24'],
          vAxis: { 
            viewWindow: {
        min: 1,
        max: 5
    },}
          
        };

        var chart = new google.visualization.ColumnChart(document.getElementById('chartRetreat'));

        chart.draw(data, options);
      }
