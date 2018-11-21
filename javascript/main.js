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
$(document).ready(function(){
    $("#aboutMeButton").on("click", function() {

        if ($(".aboutMe").data("visible") === false) {
            
            $("#contentWindow").css({"height":"670px"})
            $("#contentWindow").css({"width":"70%"})
            $("#contentWindow").css({"top":"-300px"})

            $(".aboutMe").css({"overflow":"auto"});
            $(".aboutMe").css({"top":"-40px"})
            $(".aboutMe").fadeIn(1000)
            
            
            $(".portfolio").css({"display":"none"});
            $(".contact").css({"display":"none"});

            $(".aboutMe").data("visible", true)
            $(".portfolio").data("visible", false)
            $(".contact").data("visible", false)
        }
        else if ($(".aboutMe").data("visible") === true) {

            $("#contentWindow").css({"height":"370px"})
            $("#contentWindow").css({"top":"-200px"})
            $("#contentWindow").css({"width":"50%"})

            $(".aboutMe").fadeOut("fast")
            $(".aboutMe").css({"overflow":"hidden"});
            $(".aboutMe").css({"top":"0px"})
            
            $(".portfolio").css({"display":"none"});
            $(".contact").css({"display":"none"});

            $(".aboutMe").data("visible", false)
            $(".portfolio").data("visible", false)
            $(".contact").data("visible", false)
        }
    })


    $("#portfolioButton").on("click", function() {
        if ($(".portfolio").data("visible") === false) {

            $("#contentWindow").css({"height":"670px"})
            $("#contentWindow").css({"width":"70%"})
            $("#contentWindow").css({"top":"-300px"})

            $(".portfolio").css({"overflow":"auto"});
            $(".portfolio").css({"top":"-95px"})
            $(".portfolio").fadeIn(1000)
            
            
            $(".aboutMe").css({"display":"none"});
            $(".contact").css({"display":"none"});

            $(".portfolio").data("visible", true)
            $(".aboutMe").data("visible", false)
            $(".contact").data("visible", false)
        }
        else if ($(".portfolio").data("visible") === true){

            $("#contentWindow").css({"height":"370px"})
            $("#contentWindow").css({"top":"-200px"})
            $("#contentWindow").css({"width":"50%"})

            $(".portfolio").css({"overflow":"hidden"});    
            $(".portfolio").css({"top":"0px"})
            $(".portfolio").fadeOut("fast")
            
            $(".aboutMe").css({"display":"none"});
            $(".contact").css({"display":"none"});
            
            $(".portfolio").data("visible", false)
            $(".aboutMe").data("visible", false)
            $(".contact").data("visible", false)
        }
    })


    $("#contactButton").on("click", function() {
        if ($(".contact").data("visible") === false) {

            $("#contentWindow").css({"height":"670px"})
            $("#contentWindow").css({"width":"70%"})
            $("#contentWindow").css({"top":"-300px"})

            $(".contact").css({"overflow":"auto"});      
            $(".contact").css({"top":"-152px"})
            $(".contact").fadeIn(1000)
            
            $(".portfolio").css({"display":"none"});
            $(".aboutMe").css({"display":"none"});

            $(".contact").data("visible", true)
            $(".aboutMe").data("visible", false)
            $(".portfolio").data("visible", false)
        }
        else if($(".contact").data("visible") === true) {

            $("#contentWindow").css({"height":"370px"})
            $("#contentWindow").css({"top":"-200px"})
            $("#contentWindow").css({"width":"50%"})

            $(".contact").css({"overflow":"hidden"});      
            $(".contact").css({"top":"0px"})
            $(".contact").fadeOut("fast")
            
            $(".portfolio").css({"display":"none"});
            $(".aboutMe").css({"display":"none"});
            
            $(".contact").data("visible", false)
            $(".aboutMe").data("visible", false)
            $(".portfolio").data("visible", false)
        }
    })
})