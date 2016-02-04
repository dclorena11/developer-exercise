$(document).ready(function(){
  $('.accordion-header > div').hide();

  $('.accordion-header').on("click", function(){
    $('.accordion-header > div').hide("slow");
    $(this).children().show("slow");
  })

  $(document).on("keydown", function(e){
    if(e.which == 38){
      alert("up");
    }else if(e.which == 40){
      alert("down");
    }
  })

});