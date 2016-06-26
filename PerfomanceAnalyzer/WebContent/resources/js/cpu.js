$(function () {
 	$.ajax({
	    url: "data/records.json",
	    type:"GET",
	    success: function (data) {
	    	cpuData= data["Cpu"];
	    	initializeCpuData(cpuData);	
	    }
	});

})
function initializeCpuData(obj){
	console.log(obj);


	
}