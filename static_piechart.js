//Javascript code to produce directly pie chart:

<script type="text/javascript">
<div id="static_piechart"></div>
var myData = new Array(['Text', 60%], ['Image', 20%], ['Audio', 10%], ['PDF', 10%]);
var colors = ['#FACC00','#FB6600', '#FB4800', '#F8F933'];
var myChart = new JSChart('chartid', 'pie');
myChart.setDataArray(myData);
myChart.colorizePie(colors);
myChart.setTitleColor('#857D7D');
myChart.setPieUnitsColor('#9B9B9B');
myChart.setPieValuesColor('#6A0000');
myChart.draw();
</script>