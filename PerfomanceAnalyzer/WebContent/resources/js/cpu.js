$(function () {
 	$.ajax({
	    url: "data/records.json",
	    success: function (data) {
	    	cpuData= data["Cpu"];
	    	initializeCpuData(cpuData);	
	    }
	});

})
function initializeCpuData(obj){
	console.log(obj)
	var chart = new CanvasJS.Chart("cpuContainer", { 
		title: {
			text: "CPU Usage",
			fontFamily: "arial black"
		},
		    animationEnabled: true,
      axisY: {
        title: "% Utilization"
      },
   
      
		data: [
		{
			type: "spline",
			
				dataPoints: [
								{ y: obj[0] },
								{ y: obj[1]},
								{ y: obj[2]},
								{ y: obj[3]}	
							]
	    	}
		
		
		]
	});
	chart.render();	
	
}