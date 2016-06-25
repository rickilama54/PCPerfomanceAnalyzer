$(function () {
	var memoryData;
 	$.ajax({
	    url: "data/records.json",
	    success: function (data) {
	    	memoryData= data["Memory"];
	    	initializeMemoryChart(memoryData)
	    	
	    }
	});
})
function initializeMemoryChart(obj){

	 var chart = new CanvasJS.Chart("memoryContainer",
			    {
			        title:{
			            text: "Memory Usage",
			            fontFamily: "arial black"
			        },
			                animationEnabled: true,
			        legend: {
			            verticalAlign: "bottom",
			            horizontalAlign: "center"
			        },
			        theme: "theme1",
			        data: [
			        {        
			            type: "pie",
			            indexLabelFontFamily: "Garamond",       
			            indexLabelFontSize: 20,
			            indexLabelFontWeight: "bold",
			            startAngle:0,
			            indexLabelFontColor: "MistyRose",       
			            indexLabelLineColor: "darkgrey", 
			            indexLabelPlacement: "inside", 
			            toolTipContent: "{name}: {y}",
			            showInLegend: true,
			            indexLabel: "#percent%", 
			            dataPoints: [
			                {  y: obj["Total"], name: "Total", legendMarkerType: "circle"},
			                {  y: obj["Used"], name: "Used", legendMarkerType: "circle"},
			                {  y: obj["Free"], name: "Free", legendMarkerType: "circle"}
			            ]
			        }
			        ]
			    });
			    chart.render();
}


