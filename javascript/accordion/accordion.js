$(document).ready(function(){
  $('.accordion-header > div').hide();

  $('.accordion-header').on("click", function(){
    $('.accordion-header > div').hide("slow");
    $(this).children().show("slow");
  })

});