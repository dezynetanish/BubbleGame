var score = 0;
var hitrn = 0;
// event bubbling : jispe click karoge vo element par event raised hoga, aur event listner na milne par event parent ke listner par dhundega , aur waha bhi na mlne par event parent ke parent ke parentv par listner par event dhundega

function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}
function makebubble(){
    var clutter = "";
for(var i = 1; i<91; i++){
    var rn = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rn}</div>`;
    // without " +" sign the clutter leave the last value and keep the new one but with the + sign clutter remain the previous value saved
}
document.querySelector("#pbot").innerHTML = clutter;
}

var timer = 60;
function runtimer(){
       var timerint= setInterval(function(){
            if(timer>0){
                timer--;
                 document.querySelector("#timervalue").textContent= timer;
            }
            else{
                clearInterval(timerint);
                document.querySelector("#pbot").innerHTML = `<h1> Game Over </h1>`;
            }
        }, 1000);
}
function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=hitrn;
}
document.querySelector("#pbot")
.addEventListener("click",function(details){
        var clickednum = Number(details.target.textContent);
        if(clickednum == hitrn){
            increaseScore();
            makebubble();
            getNewHit();
        }
});
runtimer();
makebubble();
getNewHit();