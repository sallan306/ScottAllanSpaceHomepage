// I know that the code could be better.
// If you have some tips or improvement, please let me know.

$('.img-parallax').each(function(){
    var img = $(this);
    var imgParent = $(this).parent();
    function parallaxImg () {
      var speed = img.data('speed');
      var imgY = imgParent.offset().top;
      var winY = $(this).scrollTop();
      var winH = $(this).height();
      var parentH = imgParent.innerHeight();
  
  
      // The next pixel to show on screen      
      var winBottom = winY + winH;
  
      // If block is shown on screen
      if (winBottom > imgY && winY < imgY + parentH) {
        // Number of pixels shown after block appear
        var imgBottom = ((winBottom - imgY) * speed);
        // Max number of pixels until block disappear
        var imgTop = winH + parentH;
        // Porcentage between start showing until disappearing
        var imgPercent = ((imgBottom / imgTop) * 100) + (50 - (speed * 50));
      }
      img.css({
        top: imgPercent + '%',
        transform: 'translate(-50%, -' + imgPercent + '%)'
      });
    }
    $(document).on({
      scroll: function () {
        parallaxImg();
      }, ready: function () {
        parallaxImg();
      }
    });
  });

$("#aboutMeButton").on("click", function() {

    if ($(".aboutMeBox").data("visible") === false) {

        $(".aboutMeBox").data("visible", true)
        $(".aboutMeBox").css({"display":"block"});
        $(".aboutMeBox").css({"overflow":"auto"});
        $("#choiceBox").css({"height":"670px"})
        $("#choiceBox").css({"width":"70%"})
        $("#choiceBox").css({"top":"-300px"})
        $("#aboutMe").css({"top":"-40px"})

        $("#portfolio").css({"display":"none"})
        $("#contactMe").css({"display":"none"})
    }
    else if ($(".aboutMeBox").data("visible") === true) {

        $(".aboutMeBox").data("visible", false)
        $(".aboutMeBox").css({"display":"none"});
        $(".aboutMeBox").css({"overflow":"hidden"});
        $("#choiceBox").css({"height":"370px"})
        $("#choiceBox").css({"top":"-200px"})
        $("#choiceBox").css({"width":"50%"})
        $("#aboutMe").css({"top":"0px"})

        $("#portfolio").css({"display":""})
        $("#contactMe").css({"display":""})
    }
})
  $("#portfolioButton").on("click", function() {
    if ($(".portfolioBox").data("visible") === false) {

        $(".portfolioBox").data("visible", true)
        $("#choiceBox").css({"height":"670px"})
        $("#choiceBox").css({"width":"70%"})
        $("#choiceBox").css({"top":"-300px"})
        $("#portfolio").css({"top":"-90px"})

        $("#aboutMe").css({"display":"none"})
        $("#contactMe").css({"display":"none"})
    }
    else if ($(".portfolioBox").data("visible") === true){

        $(".portfolioBox").data("visible", false)
        $("#choiceBox").css({"height":"370px"})
        $("#choiceBox").css({"top":"-200px"})
        $("#choiceBox").css({"width":"50%"})
        $("#portfolio").css({"top":"0px"})

        $("#aboutMe").css({"display":""})
        $("#contactMe").css({"display":""})
    }
})
$("#contactButton").on("click", function() {
    if ($(".contactBox").data("visible") === false) {

        $(".contactBox").data("visible", true)
        $("#choiceBox").css({"height":"670px"})
        $("#choiceBox").css({"width":"70%"})
        $("#choiceBox").css({"top":"-300px"})
        $("#contactMe").css({"top":"-150px"})

        $("#aboutMeButton").css({"display":"none"})
        $("#portfolioButton").css({"display":"none"})
    }
    else if($(".contactBox").data("visible") === true) {

        $(".contactBox").data("visible", false)
        $("#choiceBox").css({"height":"370px"})
        $("#choiceBox").css({"top":"-200px"})
        $("#choiceBox").css({"width":"50%"})
        $("#contactMe").css({"top":"0px"})

        $("#aboutMeButton").css({"display":""})
        $("#portfolioButton").css({"display":""})
    }
})