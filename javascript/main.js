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
            
            $("#contentWindow").css({"height":"85%"})
            $(".aboutMe").css({"overflow":"auto"});
            setTimeout(function() {
                $(".aboutMe").fadeIn(300)
            },200)   
            
            $(".portfolio").css({"display":"none"})
            $(".contact").css({"display":"none"})

            $(".aboutMe").data("visible", true)
            $(".portfolio").data("visible", false)
            $(".contact").data("visible", false)
        }
        else if ($(".aboutMe").data("visible") === true) {

            $("#contentWindow").css({"height":"15%"})

            $(".aboutMe").css({"overflow":"hidden"});
            $(".aboutMe").fadeOut(100)
            
            $(".portfolio").css({"display":"none"})
            $(".contact").css({"display":"none"})

            $(".aboutMe").data("visible", false)
            $(".portfolio").data("visible", false)
            $(".contact").data("visible", false)
        }
    })


    $("#portfolioButton").on("click", function() {
        if ($(".portfolio").data("visible") === false) {

            $("#contentWindow").css({"height":"85%"})
            $(".portfolio").css({"overflow":"auto"});
            $(".portfolio").css({"height":"480px"});
            setTimeout(function() {
                $(".portfolio").fadeIn(300)
            },200)
            
            
            $(".aboutMe").fadeOut(100)
            $(".contact").fadeOut(100)
            $(".portfolio").data("visible", true)
            $(".aboutMe").data("visible", false)
            $(".contact").data("visible", false)
        }
        else if ($(".portfolio").data("visible") === true){

            $("#contentWindow").css({"height":"15%"})
            $(".portfolio").css({"overflow":"hidden"});    
            $(".portfolio").fadeOut(50)
            
            $(".portfolio").data("visible", false)
            $(".aboutMe").data("visible", false)
            $(".contact").data("visible", false)

            $(".aboutMe").fadeOut(100)
            $(".contact").fadeOut(100)
        }
    })


    $("#contactButton").on("click", function() {
        if ($(".contact").data("visible") === false) {

            $("#contentWindow").css({"height":"85%"});
            $(".contact").css({"overflow":"auto"});
            setTimeout(function() {
                $(".contact").fadeIn(300)
            },200)      
     
            
            
            $(".contact").data("visible", true)

            $(".aboutMe").data("visible", false)
            $(".portfolio").data("visible", false)
            $(".aboutMe").fadeOut(100)
            $(".portfolio").css({"display":"none"})
        }
        else if($(".contact").data("visible") === true) {

            $("#contentWindow").css({"height":"15%"})

            $(".contact").css({"overflow":"hidden"});      
            $(".contact").fadeOut(100)
            
            $(".portfolio").css({"display":"none"})
            $(".aboutMe").css({"display":"none"})

            $(".contact").data("visible", false)
            $(".aboutMe").data("visible", false)
            $(".portfolio").data("visible", false)
        }
    })
})