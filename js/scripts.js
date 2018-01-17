$(document).ready(function(){

  $("#number-input").submit(function(event){
    event.preventDefault();

    var max = parseInt($("input#input-max").val());
    var increment = parseInt($("input#input-increment").val());
    for(var number = increment; number < max; number += increment){
      $("#output ul").append("<li>" + number + "</li>")
    }
  });
});
