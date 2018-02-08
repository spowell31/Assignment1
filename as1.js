cdiv = document.getElementById("center")
avatarimg = document.getElementById("centerimg")
var vert = 0
var horiz = 0
var imgheight = 100;

function ava1(){
    avatarimg.src = "ava1.png"
}

function ava2(){
    avatarimg.src = "ava2.png"
}

function menubtn(){
    document.getElementById("menu").style.right = "0"
}

function right(){
    horiz -= 7
    cdiv.style.right = horiz+"px"
}

function left(){
    horiz += 7
    cdiv.style.right = horiz+"px"
}

function up(){
    vert -= 7
    cdiv.style.top = vert+"px"
}

function down(){
    vert += 7
    cdiv.style.top = vert+"px"
}

function plus(){
    imgheight += 1
    avatarimg.style.height = imgheight + "%"
}

function minus(){
    imgheight -= 1
    avatarimg.style.height = imgheight + "%"
}


document.getElementById("centerimg").addEventListener("click",function(){
        document.getElementById("buttons").style.opacity = "0"
        document.getElementById("directions").style.opacity = "0"
})

document.getElementById("header").addEventListener("click",function(){
        document.getElementById("buttons").style.opacity = "1"
        document.getElementById("directions").style.opacity = "1"
})

document.getElementById("hat").addEventListener("click",function(){
    document.getElementById("hatimg").style.display = "block"
})

document.getElementById("shirt").addEventListener("click",function(){
    document.getElementById("shirtimg").style.display = "block"
})

document.getElementById("bow").addEventListener("click",function(){
    document.getElementById("bowimg").style.display = "block"
})
    



    