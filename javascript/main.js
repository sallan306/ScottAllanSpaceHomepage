const   modal = document.getElementById('myModal'),
        btn1 = document.getElementById("portBtn1"),
        btn2 = document.getElementById("portBtn2"),
        btn3 = document.getElementById("portBtn3"),
        span = document.getElementsByClassName("close")[0],
        width450 = window.matchMedia("(max-width: 450px)"),
        width750 = window.matchMedia("(max-width: 750px)"),
        width1000 = window.matchMedia("(max-width: 1000px)");

var currentWindow = "none"

$("html").append("<input display='none' id='myInput' value='sallan306@gmail.com'>")

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
        console.log("above 1000")
        $("#contentWindow").css({"width":"25%"})
    }
}

function closeContentWindow() {

    $(".contact").css({"overflow":"hidden"});      
    
    $(".portfolio").css({"display":"none"})
    $(".aboutMe").css({"display":"none"})

    $(".aboutMe").attr('data-visible', "false");
    $(".portfolio").attr('data-visible', "false");
    $(".contact").attr('data-visible', "false");

    $("#contentWindow").css({"height":"13vh"})
    setTimeout(()=>{changeContentWindowWidth()},600)
    setTimeout(()=>{$("#contentWindow").css({"transform":'translateY(0)'})},1200)
    $(".portfolio").fadeOut(50)
    $(".aboutMe").fadeOut(50)
    $(".contact").fadeOut(50)

    currentWindow = "none"
}

function openContentWindow(container) {
    $("#contentWindow").css({"transform":'translateY(-35vh)'});
    setTimeout(()=>{$("#contentWindow").css({"width":"80%"})}, 300)
    setTimeout(()=>{$("#contentWindow").css({"height":"85%"})},800)
    $(container).css({"overflow":"auto"});

    $(".aboutMe").attr('data-visible', "false");
    $(".portfolio").attr('data-visible', "false");
    $(".contact").attr('data-visible', "false");

    $(".portfolio").css({"display": "none"})
    $(".aboutMe").css({"display":   "none"})
    $(".contact").css({"display":   "none"})

    $(container).attr('data-visible', "true");

    setTimeout(() => {$(container).fadeIn(300)},1200)   

    currentWindow = container

}

function changeContentWindow(container) {

    $(".aboutMe").attr('data-visible', "false");
    $(".portfolio").attr('data-visible', "false");
    $(".contact").attr('data-visible', "false");

    $(".portfolio").fadeOut(200)
    $(".aboutMe").fadeOut(200)
    $(".contact").fadeOut(200)
    $(container).css({"overflow":"auto"});
    $(container).attr('data-visible', "true");

    setTimeout(()=> {
        $(container).fadeIn(200)
    },300)

    currentWindow = container

}


setTimeout(() => {

    if (currentWindow === "none") {
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
        $(".modal-content").html("<img class='modal-image' src='images/1-Sunny.png' alt='Sunny Weekend'/>")
        $(".modal-content").append("<p class='modalParagraph'>Hard time deciding where to travel? Let us pick for you! All you need is a free weekend and a sense of adventure.</p><input type='button' class='modalButtonSunny' value='Sunny Weekend' />")
        $(".modalButtonSunny").on("click",  () => window.location.href="https://sallan306.github.io/SunnyWeekend/")
        $(".modal").fadeIn()
    }
    else {
        window.location.href = "https://sallan306.github.io/SunnyWeekend/"
    }
}



btn2.onclick = () => {
    if(window.innerWidth > 780 ) {
        $(".modal-content").html("<img class='modal-image' src='images/2-Brew.png' alt='Brewstash'/>")
        $(".modal-content").append("<div><p class='modalParagraph'>The Brewstash App was designed to improve the user experience of drinking at the many bars in Austin</p><input type='button' class='modalButtonBrew' value='Brewstash' /></div>")
        $(".modalButtonBrew").on("click",  () => window.location.href="https://brewstash.herokuapp.com/")
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