<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>PC Analysis</title>
<script type="text/javascript">
window.onload = function () {
    var chart = new CanvasJS.Chart("chartContainer",
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
                {  y: 7994580992, name: "Total", legendMarkerType: "triangle"},
                {  y: 4931551232, name: "Used", legendMarkerType: "square"},
                {  y: 456142848, name: "Free", legendMarkerType: "circle"}
            ]
        }
        ]
    });
    chart.render();
}
</script>
<script type="text/javascript" src="resources/js/jquery.canvasjs.min.js"></script>
</head>
<body>
<div id="chartContainer" style="height: 300px; width: 100%;"></div>


</body>
</html>