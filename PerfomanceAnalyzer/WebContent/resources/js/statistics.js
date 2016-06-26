$(function () {
	var memoryData;
 	$.ajax({
	    url: "data/records.json",
	    success: function (data) {	    	
	    	initializeChart(data["Memory"],data["Cpu"])
	    	
	    }
	});
})
function initializeChart(mem,cpu){
	google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(drawMemoryChart);
    google.charts.setOnLoadCallback(drawCPUChart);
    function drawMemoryChart() {
      var data = google.visualization.arrayToDataTable([
        ['Item', 'Consumption'],
        ['Total',     mem["Total"]],
        ['Used',      mem["Used"]],
        ['Free',  mem["Free"]]
      ]);

      var options = {
        title: 'Memory Usage',
        is3D: true,
      };

      var chart = new google.visualization.PieChart(document.getElementById('memoryContainer'));
      chart.draw(data, options);
    }
    
    function drawCPUChart() {
    	
        var dataTable = new google.visualization.DataTable();
        dataTable.addColumn('string', 'Time');
        dataTable.addColumn('number', 'Usage');
        // A column for custom tooltip content
        dataTable.addColumn({type: 'string', role: 'tooltip'});
        for(var i=0;i<cpu.length;i++){
            dataTable.addRows([
                     [""+(i+1), cpu[i],''],
                      ]);
        }
  

        var options = { 
        	 legend: 'none' ,
        	 title: 'CPU Usage',
             is3D: true,	
        };
        var chart = new google.visualization.ColumnChart(document.getElementById('cpuContainer'));
        chart.draw(dataTable, options);
      }
}


