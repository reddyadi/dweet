
$.ajax({
  url: "https://dweet.io:443/get/latest/dweet/for/598ac270-82a9-11e8-89db-d3e8e5a7b561",
  dataType: "json",
  type: "GET",
  success:function(data){
    getData(Temperature, Humidity);
  },
  error:function(error){
    console.log("ERROR");
    console.log(error);
  }
});
