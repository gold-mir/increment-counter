$(document).ready(function(){
  $("#number-input").submit(function(event){
    event.preventDefault();

    var max = parseInt($("input#input-max").val());
    var increment = parseInt($("input#input-increment").val());
    if (!isNaN(max) && !isNaN(increment)  && max >= 0 && increment >= 0 && increment <= max){
      $("#output").html("<h2>Output:</h2><ul></ul>");
      for(var number = increment; number <= max; number += increment){
        $("#output ul").append("<li>" + number + "</li>")
      }
    } else {
      $("#output").html("<h1>Please input two positive numbers. Increment cannot be larger than maximum.</h1>")
    }


  });
});
