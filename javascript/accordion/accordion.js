$(document).ready(function(){

  $('.accordion-header > div').hide();

  $('.accordion-header').on("click", function(){
    $('.accordion-header > div').hide("slow");
    $(this).find("div").show("slow");
  })

  $("div:visible").closest(".accordion-header").on("keydown", function(e){
    var target = $(this).first("div");
    $(".accordion-header > div:visible").hide("slow");

    if(e.which == 38){
      var previous = target.prev().first("div");
      previous.children("div").show("slow");
    }else if(e.which == 40){
      var next = target.next().first("div");
      next.children("div").show("slow");
    }
  })

  $(".accordion-header").bind({
    keydown: function(e) {
  },

  });

});