$(document).ready(function(){
  $('.accordion-header > div').hide();

  $('.accordion-header').on("click", function(){
    $("div").show("slow");
  })

});