$(document).ready(function(){

  $('.accordion-header > div').hide();

  $('.accordion-header').on("click", function(){
    $('.accordion-header > div').hide("slow");
    $(this).find("div").show("slow");
  })

  $(".accordion-header").on("keydown", function(e){
    var target = $(this).first();

    if(e.which == 38){
      var previous = target.prev().first("div");
      previous.show("slow");
    }else if(e.which == 40){
      var next = target.next().first("div");
      next.show("slow");
    }
  })

    $(".accordion-header").bind({
      keydown: function(e) {
      },

  });

});