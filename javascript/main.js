const   modal = document.getElementById('myModal'),
        btn1 = document.getElementById("portBtn1"),
        btn2 = document.getElementById("portBtn2"),
        btn3 = document.getElementById("portBtn3"),
        span = document.getElementsByClassName("close")[0],
        width450 = window.matchMedia("(max-width: 450px)"),
        width750 = window.matchMedia("(max-width: 750px)"),
        width1000 = window.matchMedia("(max-width: 1000px)");

var currentWindow = "none"
    
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

    $("#contentWindow").css({"height":"15%"})
    setTimeout(()=>{changeContentWindowWidth()},200)
    setTimeout(()=>{$("#contentWindow").css({"transform":'translateY(0)'})},400)
    $(".portfolio").fadeOut(50)
    $(".aboutMe").fadeOut(50)
    $(".contact").fadeOut(50)

    currentWindow = "none"
}

function openContentWindow(container) {
    $("#contentWindow").css({"transform":'translateY(-35vh)'});
    setTimeout(()=>{$("#contentWindow").css({"width":"80%"})}, 100)
    setTimeout(()=>{$("#contentWindow").css({"height":"85%"})},200)
    $(container).css({"overflow":"auto"});

    $(".aboutMe").attr('data-visible', "false");
    $(".portfolio").attr('data-visible', "false");
    $(".contact").attr('data-visible', "false");

    $(".portfolio").css({"display": "none"})
    $(".aboutMe").css({"display":   "none"})
    $(".contact").css({"display":   "none"})

    $(container).attr('data-visible', "true");

    setTimeout(() => {$(container).fadeIn(300)},400)   

    currentWindow = container

}


setTimeout(() => {

    if (currentWindow === "none") {
        openContentWindow(".aboutMe")
    }

},2000)

$("#aboutMeButton").on("click", () => {

    if ($(".aboutMe").attr('data-visible') === "false") {
        openContentWindow(".aboutMe")
    }
    else {
        closeContentWindow()
    }
})


$("#portfolioButton").on("click",() => {
    if ($(".portfolio").attr('data-visible') === "false") {
        openContentWindow(".portfolio")
    }
    else if ($(".portfolio").attr('data-visible') === "true"){
        closeContentWindow()
    }
})


$("#contactButton").on("click", () => {
    if ($(".contact").attr('data-visible') === "false") {
        openContentWindow(".contact")
    }
    else if($(".contact").attr('data-visible') === "true") {

        closeContentWindow()
    }
})

var modalContent = window.getElementsByClassName("modal-content")

btn1.onclick = () => {
    if(screen.width > 450 ) {
        modalContent.html("<img class='modal-image' src='images/1-Sunny.png' alt='Sunny Weekend'/>")
        modalContent.append("<p>Hard time deciding where to travel? Let us pick for you! All you need is a free weekend and a sense of adventure.</p><input type='button' class='modalButtonSunny' value='Sunny Weekend' />")
        $(".modalButtonSunny").on("click",  () => window.location.href="https://sallan306.github.io/SunnyWeekend/")
        $(".modal").fadeIn()
    }
    else {
        window.location.href = "https://sallan306.github.io/SunnyWeekend/"
    }
}
btn2.onclick = () => {
    if(screen.width > 450 ) {
        modalContent.html("<img class='modal-image' src='images/2-Brew.png' alt='Brewstash'/>")
        modalContent.append("<p>The Brewstash App was designed to improve the user experience of drinking at the many bars in Austin</p><input type='button' class='modalButtonBrew' value='Brewstash' />")
        $(".modalButtonBrew").on("click",  () => window.location.href="https://brewstash.herokuapp.com/")
        $(".modal").fadeIn()
    }
    else {
        window.location.href = "https://brewstash.herokuapp.com/"
    }

}
btn3.onclick = () => {
    if(screen.width > 450 ) {
        modalContent.html("<img style='width:200px;height:200px' class='modal-image' src='images/3-Ido.png' alt='I Do'/>")
        modalContent.append("<p>Have an event to plan? Need to get hundreds of people's contact information ASAP? Have our website help your guests help you!</p><input type='button' class='modalButtonIdo' value='I Do' />")
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