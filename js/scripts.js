$(function(){
  $("form").submit(function(event){
    event.preventDefault();
    $("form").hide();

    var items = ["item1","item2","item3","item4","item5"];
    var temps= [];
    items.forEach(function(item){
      var userInput= $("input#" + item).val();


      temps.push(userInput);
    });
    temps= temps.sort();
    temps= temps.map(function(temp) {
      return temp.toUpperCase();
    });
    
    temps.forEach(function(temp){
      $(".output").append("<li>" + temp + "</li>");
    });


  });
});
