$(document).ready(function(){


  $('.accordion-header').on("click", function(){
    $('.accordion-header > div').removeClass("active").hide("slow");
    $(this).find("div").addClass("active").show("slow");
  })

  $(document).on("keydown", function(e){
    if(e.which == 38){
      var target = $('active');
      $('.active').css("color", "red");
    }else if(e.which == 40){
      $('.active').css("color", "green");
    }
  })

  //   $(".list-item").bind({
  //   keydown: function(e) {
  //     var key = e.keyCode;
  //     var target = $(e.currentTarget);

  //     switch(key) {
  //       case 38: // arrow up
  //         target.prev().focus();
  //         break;
  //       case 40: // arrow down
  //         target.next().focus();
  //         break;
  //     }
  //   },

  //   focusin: function(e) {
  //     $(e.currentTarget).addClass("selected");
  //   },

  //   focusout: function(e) {
  //     $(e.currentTarget).removeClass("selected");
  //   }
  // });
  // $("li").first().focus();
});