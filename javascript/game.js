var game = $("#gameWindow"),
    player = $("#player");

var locationX = 200

player.css("width",50)
player.css("height",50)
player.css("background","blue")
player.css("position","relative")
player.css("left",locationX)
player.css("top",   500)
var keydown = false;

$('html').on('keydown', function(e) {
    if (!keydown) {
        console.log(e.key)
        console.log("keydown")
        switch(e.key) {
            case "ArrowLeft": {
                moveLeft()
                keydown = true
                break
            }
            case "ArrowRight": {
                moveRight()
                keydown = true
                break
            }
            case " " : {
                shoot()
                break
            }
            
        }
    }


  })

$('html').on('keyup', function(e) {
    clearInterval(movementInterval)
    keydown = false;
})

var movementInterval = null

function moveLeft() {
    locationX -= 20;
    player.css("left", locationX)
    movementInterval = setInterval(()=> {
        locationX -= 40;
        player.css("left", locationX)
    },200)
}
function moveRight() {
    locationX += 20;
    player.css("left", locationX)
    movementInterval = setInterval(()=> {
        locationX += 40;
        player.css("left", locationX)
    },200)
}
function shoot() {
    var bullet = document.createElement("div")
    document.getElementById("gameWindow").appendChild(bullet);
    bullet.style.width = "10px"
    bullet.style.height = "10px"
    bullet.style.background = "red"
    bullet.style.position = "absolute"
    bullet.style.left = locationX+20+"px"
    bullet.style.top = "500px"
    bullet.style.clear = "both"
}