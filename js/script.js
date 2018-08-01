console.log("loaded");
$.ajax({
  url: "https://dweet.io:443/get/latest/dweet/for/598ac270-82a9-11e8-89db-d3e8e5a7b561",
  dataType: "json",
  type: "GET",
  success:function drawChart() {

      var data = google.visualization.arrayToDataTable({
      ['PhysicalQuantity', 'Value'],
      ['Temperature', data.with[0].content.Temperature],
      ['Humidity', data.with[0].content.Humidity]
    });

    var options = {
          width: 400, height: 120,
          redFrom: 90, redTo: 100,
          yellowFrom:75, yellowTo: 90,
          minorTicks: 5
    };

        var chart = new google.visualization.Gauge(document.getElementById('chart_div'));

        chart.draw(data, options);

        setInterval(function() {
          data.setValue(0, 1, 40 + Math.round(60 * Math.random()));
          chart.draw(data, options);
        }, 13000);
        setInterval(function() {
          data.setValue(1, 1, 40 + Math.round(60 * Math.random()));
          chart.draw(data, options);
        }, 5000);
        setInterval(function() {
          data.setValue(2, 1, 60 + Math.round(20 * Math.random()));
          chart.draw(data, options);
        }, 26000);
    console.log(data.with[0].content.Humidity);
    console.log(data.with[0].content.Temperature);
  },
  error:function(error){
    console.log("ERROR");
    console.log(error);
  }
})
