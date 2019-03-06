const   modal = document.getElementById('myModal'),
        btn1 = document.getElementById("portBtn1"),
        btn2 = document.getElementById("portBtn2"),
        btn3 = document.getElementById("portBtn3"),
        span = document.getElementsByClassName("close")[0],
        width450 = window.matchMedia("(max-width: 450px)"),
        width750 = window.matchMedia("(max-width: 750px)"),
        width1000 = window.matchMedia("(max-width: 1000px)");

var currentWindow = "none"
var canAnimate = true;

$("html").append("<input display='none' id='myInput' value='sallan306@gmail.com'>")

$(window).resize(() => {

    if (currentWindow === "none") {

        changeContentWindowWidth()
    }

    else {
        $("#contentWindow").css({"width":"80vw"}) 
    }
  });

function changeContentWindowWidth() {
    if (width450.matches) { 
        console.log("under 450px")
        $("#contentWindow").css({"width":"80vw"})
    } else if (width750.matches) {
        console.log("under 750")
        $("#contentWindow").css({"width":"50vw"})
    }
    else if (width1000.matches) {
        console.log("under 1000")
        $("#contentWindow").css({"width":"40vw"})
    } else {
        console.log("above 1000")
        $("#contentWindow").css({"width":"25vw"})
    }
}

function closeContentWindow() {

    if (canAnimate === true) {
        canAnimate = false


        $(".contact").css({"overflow":"hidden"});      
        
        $(".portfolio").css({"display":"none"})
        $(".aboutMe").css({"display":"none"})
    
        $("#contentWindow").css({"height":"13vh"})

        if (window.innerWidth <= 450) {
            setTimeout(()=>{$("#contentWindow").css({"transform":'translateY(0)'})},800)
        }
        else {
            setTimeout(()=>{changeContentWindowWidth()},600)
            setTimeout(()=>{$("#contentWindow").css({"transform":'translateY(0)'})},1200)
        }

        $(".portfolio").fadeOut(50)
        $(".aboutMe").fadeOut(50)
        $(".contact").fadeOut(50)
    


        currentWindow = "none"
        setTimeout(() => {
            canAnimate = true
        },1500)
    }
}

function openContentWindow(container) {

    if (canAnimate === true) {
        canAnimate = false
        $("#contentWindow").css({"transform":'translateY(-35vh)'});
        setTimeout(()=>{$("#contentWindow").css({"width":"80vw"})}, 300)
        setTimeout(()=>{$("#contentWindow").css({"height":"85vh"})},800)
        $(container).css({"overflow":"auto"});
    
        $(".portfolio").css({"display": "none"})
        $(".aboutMe").css({"display":   "none"})
        $(".contact").css({"display":   "none"})

        setTimeout(() => {$(container).fadeIn(300)},1200)   
        currentWindow = container
        setTimeout(() => {
            canAnimate = true
        },1500)
    }
}


function changeContentWindow(container) {
    
    if (canAnimate === true) {
        canAnimate = false

        $(".portfolio").fadeOut(200)
        $(".aboutMe").fadeOut(200)
        $(".contact").fadeOut(200)
        $(container).css({"overflow":"auto"});
    
        setTimeout(()=> {
            $(container).fadeIn(200)
        },300)
        setTimeout(() => {
            canAnimate = true
        },500)
    
        currentWindow = container      
    } 


}


setTimeout(() => {

    if (currentWindow === "none" && canAnimate === true) {
        openContentWindow(".aboutMe")
    }

},2000)

function copyEmailToClipboard() {
    /* Get the text field */
    var copyText = document.getElementById("myInput");
  console.log(copyText)
    /* Select the text field */
    copyText.select()
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
  
    /* Alert the copied text */
    $.notify(
        "Email Copied to Clipboard",
        "success",
        { position:"left top" }
        );
}

$("#aboutMeButton").on("click", () => {

    if (currentWindow === "none") {
        openContentWindow(".aboutMe")
    }
    else if (currentWindow === ".contact" || currentWindow === ".portfolio") {
        changeContentWindow(".aboutMe")
    }
    else {
        closeContentWindow()
    }
})


$("#portfolioButton").on("click",() => {
    if (currentWindow === "none") {
        openContentWindow(".portfolio")
    }
    else if (currentWindow === ".aboutMe" || currentWindow === ".contact") {
        changeContentWindow(".portfolio")
    }
    else {
        closeContentWindow()
    }
})


$("#contactButton").on("click", () => {
    if (currentWindow === "none") {
        openContentWindow(".contact")
    }
    else if (currentWindow === ".aboutMe" || currentWindow === ".portfolio") {
        changeContentWindow(".contact")
    }
    else {
        closeContentWindow()
    }
})

btn1.onclick = () => {
    if(window.innerWidth > 780 ) {
        $(".modal-content").html("<img class='modal-image' src='images/crystal.png' alt='Crystal Game'/>")
        $(".modal-content").append("<p class='modalParagraph'>Each crystal gives you points, but dont go over the max or its GAME OVER! Guess the correct amount and you will be rewarded with victory!</p><input type='button' class='modalButtonSunny' value='Crystal Game' />")
        $(".modalButtonSunny").on("click",  () => window.location.href="https://sallan306.github.io/CrystalGame/")
        $(".modal").fadeIn()
    }
    else {
        window.location.href = "https://sallan306.github.io/SunnyWeekend/"
    }
}



btn2.onclick = () => {
    if(window.innerWidth > 780 ) {
        $(".modal-content").html("<img class='modal-image' src='images/kindling.png' alt='Kindling Friend Finder'/>")
        $(".modal-content").append("<div><p class='modalParagraph'>Want to see which super hero would be your best buddy? Take this short quiz to find out your perfect sidekick!</p><input type='button' class='modalButtonBrew' value='Kindling' /></div>")
        $(".modalButtonBrew").on("click",  () => window.location.href="https://kindlingfriendfinder.herokuapp.com/")
        $(".modal").fadeIn()
    }
    else {
        window.location.href = "https://brewstash.herokuapp.com/"
    }

}
btn3.onclick = () => {
    if(window.innerWidth > 780 ) {
        $(".modal-content").html("<img class='modal-image' src='images/3-Ido.png' alt='I Do'/>")
        $(".modal-content").append("<p class='modalParagraph'>Have an event to plan? Need to get hundreds of people's contact information ASAP? Have our website help your guests help you!</p><input type='button' class='modalButtonIdo' value='I Do' />")
        $(".modalButtonIdo").on("click",  () => window.location.href="https://i-dooo.herokuapp.com/")
        $(".modal").fadeIn()
    }
    else {
        window.location.href = "https://i-dooo.herokuapp.com/"
    }

}

span.onclick = () => $(".modal").fadeOut();

window.onclick = function(event) {
    if (event.target === modal) {
        $(".modal").fadeOut();
    }
}


