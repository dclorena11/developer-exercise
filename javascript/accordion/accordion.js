$(document).ready(function(){
  $('.accordion-header > div').hide();

  $('.accordion-header').on("click", function(){
    $(this).children()  .show("slow");
  })

});