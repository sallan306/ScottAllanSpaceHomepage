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

var f = document.getElementById('contentWindow')

$(document).ready(function(){
    // Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn1 = document.getElementById("portBtn1");
var btn2 = document.getElementById("portBtn2");
var btn3 = document.getElementById("portBtn3");
var btn4 = document.getElementById("portBtn4");
var btn5 = document.getElementById("portBtn5");
var btn6 = document.getElementById("portBtn6");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn1.onclick = () => {
    $(".modal-content").html("<img class='modal-image' src='images/1-Sunny.png' alt='Sunny Weekend'/>")
    $(".modal-content").append("<p>Hard time deciding where to travel? Let us pick for you! All you need is a free weekend and a sense of adventure.</p><input type='button' class='modalButtonSunny' value='Sunny Weekend' />")
    $(".modalButtonSunny").on("click",  () => window.location.href="https://sallan306.github.io/SunnyWeekend/")
    modal.style.display = "block";
    }
btn2.onclick = () => {
    $(".modal-content").html("<img class='modal-image' src='images/2-Brew.png' alt='Brewstash'/>")
    $(".modal-content").append("<p>The Brewstash App was designed to improve the user experience of drinking at the many bars in Austin</p><input type='button' class='modalButtonBrew' value='Brewstash' />")
    $(".modalButtonBrew").on("click",  () => window.location.href="https://brewstash.herokuapp.com/")
    modal.style.display = "block";
    }
btn3.onclick = () => {
    $(".modal-content").html("<img class='modal-image' src='images/3-Giraffe.png' alt='Giraffe Trivia'/>")
    $(".modal-content").append("<p>Having a rough day? Want to learn some amazing Giraffe facts that will knock your orange spots off? Play my game!</p><input type='button' class='modalButtonGiraffe' value='Giraffe Trivia' />")
    $(".modalButtonGiraffe").on("click",  () => window.location.href="https://sallan306.github.io/TriviaGame/")
    modal.style.display = "block";
    }
btn4.onclick = () => {
    $(".modal-content").html("<img class='modal-image' src='images/3-Giraffe.png' alt='Giraffe Trivia'/>")
    $(".modal-content").append("<p>Having a rough day? Want to learn some amazing Giraffe facts that will knock your orange spots off? Play my game!</p><input type='button' class='modalButtonGiraffe' value='Giraffe Trivia' />")
    $(".modalButtonGiraffe").on("click",  () => window.location.href="https://sallan306.github.io/TriviaGame/")
    modal.style.display = "block";
    }
btn5.onclick = () => {
    $(".modal-content").html("<img class='modal-image' src='images/3-Giraffe.png' alt='Giraffe Trivia'/>")
    $(".modal-content").append("<p>Having a rough day? Want to learn some amazing Giraffe facts that will knock your orange spots off? Play my game!</p><input type='button' class='modalButtonGiraffe' value='Giraffe Trivia' />")
    $(".modalButtonGiraffe").on("click",  () => window.location.href="https://sallan306.github.io/TriviaGame/")
    modal.style.display = "block";
    }
btn6.onclick = () => {
    $(".modal-content").html("<img class='modal-image' src='images/3-Giraffe.png' alt='Giraffe Trivia'/>")
    $(".modal-content").append("<p>Having a rough day? Want to learn some amazing Giraffe facts that will knock your orange spots off? Play my game!</p><input type='button' class='modalButtonGiraffe' value='Giraffe Trivia' />")
    $(".modalButtonGiraffe").on("click",  () => window.location.href="https://sallan306.github.io/TriviaGame/")
    modal.style.display = "block";
    }
// When the user clicks on <span> (x), close the modal
span.onclick = () => modal.style.display = "none";

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
    $("#aboutMeButton").on("click", function() {

        if ($(".aboutMe").data("visible") === false) {
                $("#contentWindow").css({"width":"80%"})
                $("#contentWindow").css({"height":"85%"})
                f.style.transform = 'translateY(-40%)';
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
            setTimeout(function(){
                changeContentWindowWidth()
            },500)

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

            $("#contentWindow").css({"width":"80%"})
            $("#contentWindow").css({"height":"85%"})
            $(".portfolio").css({"overflow":"auto"});
            f.style.transform = 'translateY(-40%)';
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
            setTimeout(function(){
                changeContentWindowWidth()
            },500)
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
            $("#contentWindow").css({"width":"80%"})
            $("#contentWindow").css({"height":"85%"});
            $(".contact").css({"overflow":"auto"});
            f.style.transform = 'translateY(-40%)';
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
            setTimeout(function(){
                changeContentWindowWidth()
            },500)
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
function changeContentWindowWidth() {
    if (x.matches) { 
        console.log("under 450px")
        $("#contentWindow").css({"width":"80%"})
    } else if (y.matches) {
        console.log("under 750")
        $("#contentWindow").css({"width":"50%"})
    }
    else if (z.matches) {
        console.log("under 1000")
        $("#contentWindow").css({"width":"40%"})
    } else {
        console.log("about 1000")
        $("#contentWindow").css({"width":"25%"})
    }
}

var x = window.matchMedia("(max-width: 450px)"),
    y = window.matchMedia("(max-width: 750px)"),
    z = window.matchMedia("(max-width: 1000px)")
 // Call listener function at run time