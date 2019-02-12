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
  var smallIncriment = 40
      smallCoordstring1 = "",
      smallCoordstring2 = "",
      smallCoordstring3 = "",
      smallCoordstring4 = "",
      smallCoordstring = ""
      mediumIncriment = 160,
      mediumCoordstring1 = "",
      mediumCoordstring2 = "",
      mediumCoordstring3 = "",
      mediumCoordstring4 = "",
      mediumCoordstring = ""
      largeIncriment = 320,
      largeCoordstring1 = "",
      largeCoordstring2 = "",
      largeCoordstring3 = "",
      largeCoordstring4 = "",
      largeCoordstring = ""
 
 
 for (let i = 0;i<160;i++) {
     if(smallIncriment < 1600) {
         smallCoordstring1 += Math.floor(Math.random()*smallIncriment)+ "px " + Math.floor(Math.random()*smallIncriment) + "px #FFF, "
         smallCoordstring2 += Math.floor(Math.random()*smallIncriment)+ "px " + (1600- Math.floor(Math.random()*smallIncriment)) + "px #FFF, "
         smallCoordstring3 += (1600- Math.floor(Math.random()*smallIncriment))+ "px " + Math.floor(Math.random()*smallIncriment) + "px #FFF, "
         smallCoordstring4 += (1600- Math.floor(Math.random()*smallIncriment))+ "px " + (1600- Math.floor(Math.random()*smallIncriment)) + "px #FFF, "
         smallIncriment += 10;
     }
 }
 for (let j = 0;j<40;j++) {
     if(mediumIncriment < 1600) {
         mediumCoordstring1 += Math.floor(Math.random()*mediumIncriment)+ "px " + Math.floor(Math.random()*mediumIncriment) + "px #FFF, "
         mediumCoordstring2 += Math.floor(Math.random()*mediumIncriment)+ "px " + (1600- Math.floor(Math.random()*mediumIncriment)) + "px #FFF, "
         mediumCoordstring3 += (1600- Math.floor(Math.random()*mediumIncriment))+ "px " + Math.floor(Math.random()*mediumIncriment) + "px #FFF, "
         mediumCoordstring4 += (1600- Math.floor(Math.random()*mediumIncriment))+ "px " + (1600- Math.floor(Math.random()*mediumIncriment)) + "px #FFF, "
         mediumIncriment += 40;
     }
 }
 for (let j = 0;j<20;j++) {
     if(largeIncriment < 1600) {
         largeCoordstring1 += Math.floor(Math.random()*largeIncriment)+ "px " + Math.floor(Math.random()*largeIncriment) + "px #FFF, "
         largeCoordstring2 += Math.floor(Math.random()*largeIncriment)+ "px " + (1600- Math.floor(Math.random()*largeIncriment)) + "px #FFF, "
         largeCoordstring3 += (1600- Math.floor(Math.random()*largeIncriment))+ "px " + Math.floor(Math.random()*largeIncriment) + "px #FFF, "
         largeCoordstring4 += (1600- Math.floor(Math.random()*largeIncriment))+ "px " + (1600- Math.floor(Math.random()*largeIncriment)) + "px #FFF, "
         largeIncriment += 80;
     }
 }
 
 
 smallCoordstring = smallCoordstring1 + smallCoordstring2 + smallCoordstring3 + smallCoordstring4
 mediumCoordstring = mediumCoordstring1 + mediumCoordstring2 + mediumCoordstring3 + mediumCoordstring4
 largeCoordstring = largeCoordstring1 + largeCoordstring2 + largeCoordstring3 + largeCoordstring4
 smallCoordstring = smallCoordstring.substring(0, smallCoordstring.length - 2)
 mediumCoordstring = mediumCoordstring.substring(0, mediumCoordstring.length - 2)
 largeCoordstring = largeCoordstring.substring(0, largeCoordstring.length - 2)

 
 $("#stars").css("box-shadow", smallCoordstring)
 $("#stars2").css("box-shadow", mediumCoordstring)
 $("#stars3").css("box-shadow", largeCoordstring)