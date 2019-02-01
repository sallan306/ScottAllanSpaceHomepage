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
    // Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn1 = document.getElementById("portBtn1");
var btn2 = document.getElementById("portBtn2");
var btn3 = document.getElementById("portBtn3");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn1.onclick = () => {
    if(screen.width > 450 ) {
        $(".modal-content").html("<img class='modal-image' src='images/1-Sunny.png' alt='Sunny Weekend'/>")
        $(".modal-content").append("<p>Hard time deciding where to travel? Let us pick for you! All you need is a free weekend and a sense of adventure.</p><input type='button' class='modalButtonSunny' value='Sunny Weekend' />")
        $(".modalButtonSunny").on("click",  () => window.location.href="https://sallan306.github.io/SunnyWeekend/")
        modal.style.display = "block";
    }
    else {
        window.location.href = "https://sallan306.github.io/SunnyWeekend/"
    }
}
btn2.onclick = () => {
    if(screen.width > 450 ) {
        $(".modal-content").html("<img class='modal-image' src='images/2-Brew.png' alt='Brewstash'/>")
        $(".modal-content").append("<p>The Brewstash App was designed to improve the user experience of drinking at the many bars in Austin</p><input type='button' class='modalButtonBrew' value='Brewstash' />")
        $(".modalButtonBrew").on("click",  () => window.location.href="https://brewstash.herokuapp.com/")
        modal.style.display = "block";
    }
    else {
        window.location.href = "https://brewstash.herokuapp.com/"
    }

}
btn3.onclick = () => {
    if(screen.width > 450 ) {
        $(".modal-content").html("<img style='width:200px;height:200px' class='modal-image' src='images/3-Ido.png' alt='I Do'/>")
        $(".modal-content").append("<p>Have an event to plan? Need to get hundreds of people's contact information ASAP? Have our website help your guests help you!</p><input type='button' class='modalButtonIdo' value='I Do' />")
        $(".modalButtonIdo").on("click",  () => window.location.href="https://i-dooo.herokuapp.com/")
        modal.style.display = "block";
    }
    else {
        window.location.href = "https://i-dooo.herokuapp.com/"
    }

}
// When the user clicks on <span> (x), close the modal
span.onclick = () => modal.style.display = "none";

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}
    $("#aboutMeButton").on("click", function() {

        if ($(".aboutMe").data("visible") === false) {
            $("#contentWindow").css({"transform":'translateY(-40%)'});
            $("#contentWindow").css({"width":"80%"})
            $("#contentWindow").css({"height":"85%"})
            $(".aboutMe").css({"overflow":"auto"});
            
            $(".portfolio").css({"display":"none"})
            $(".contact").css({"display":"none"})
            
            $(".aboutMe").data("visible", true)
            $(".portfolio").data("visible", false)
            $(".contact").data("visible", false)

            setTimeout(() => {$(".aboutMe").fadeIn(300)},400)   
        }
        else if ($(".aboutMe").data("visible") === true) {

            $("#contentWindow").css({"height":"15%"})
            
            $(".aboutMe").css({"overflow":"hidden"});
            
            $(".portfolio").css({"display":"none"})
            $(".contact").css({"display":"none"})
            
            $(".aboutMe").data("visible", false)
            $(".portfolio").data("visible", false)
            $(".contact").data("visible", false)

            setTimeout(() =>{changeContentWindowWidth()},500)
            $(".aboutMe").fadeOut(50)
        }
    })


    $("#portfolioButton").on("click", function() {
        if ($(".portfolio").data("visible") === false) {

            $("#contentWindow").css({"width":"80%"})
            $("#contentWindow").css({"height":"85%"})
            $(".portfolio").css({"overflow":"auto"});
            $("#contentWindow").css({"transform":'translateY(-40%)'});
            
            
            $(".portfolio").data("visible", true)
            $(".aboutMe").data("visible", false)
            $(".contact").data("visible", false)

            setTimeout(() => {$(".portfolio").fadeIn(300)},400)
            $(".aboutMe").fadeOut(100)
            $(".contact").fadeOut(100)
        }
        else if ($(".portfolio").data("visible") === true){

            $("#contentWindow").css({"height":"15%"})
            $(".portfolio").css({"overflow":"hidden"});    
            
            $(".portfolio").data("visible", false)
            $(".aboutMe").data("visible", false)
            $(".contact").data("visible", false)
            
            setTimeout(()=>{changeContentWindowWidth()},500)
            $(".portfolio").fadeOut(50)
            $(".aboutMe").fadeOut(100)
            $(".contact").fadeOut(100)
        }
    })


    $("#contactButton").on("click", function() {
        if ($(".contact").data("visible") === false) {
            $("#contentWindow").css({"width":"80%"})
            $("#contentWindow").css({"height":"85%"});
            $("#contentWindow").css({"transform":'translateY(-40%)'});
            $(".contact").css({"overflow":"auto"});
            
            $(".contact").data("visible", true)
            
            $(".aboutMe").data("visible", false)
            $(".portfolio").data("visible", false)
            $(".portfolio").css({"display":"none"})

            setTimeout(()=> {$(".contact").fadeIn(300)},400)      
            $(".aboutMe").fadeOut(100)
        }
        else if($(".contact").data("visible") === true) {

            $("#contentWindow").css({"height":"15%"})
            $(".contact").css({"overflow":"hidden"});      
            
            $(".portfolio").css({"display":"none"})
            $(".aboutMe").css({"display":"none"})
            
            $(".contact").data("visible", false)
            $(".aboutMe").data("visible", false)
            $(".portfolio").data("visible", false)

            setTimeout(()=>{changeContentWindowWidth()},500)
            $(".contact").fadeOut(50)
        }
    })
})
function changeContentWindowWidth() {
    if (width450.matches) { 
        console.log("under 450px")
        $("#contentWindow").css({"width":"80%"})
    } else if (width750.matches) {
        console.log("under 750")
        $("#contentWindow").css({"width":"50%"})
    }
    else if (width1000.matches) {
        console.log("under 1000")
        $("#contentWindow").css({"width":"40%"})
    } else {
        console.log("about 1000")
        $("#contentWindow").css({"width":"25%"})
    }
}

var width450 = window.matchMedia("(max-width: 450px)"),
    width750 = window.matchMedia("(max-width: 750px)"),
    width1000 = window.matchMedia("(max-width: 1000px)")
 // Call listener function at run time