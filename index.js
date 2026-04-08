

var buttons = document.querySelectorAll("button");
    for(var i=0;i<buttons.length;i++)
    {
        buttons[i].addEventListener("click",pop);
        
    }
    function pop()
    {
        var lbutton = this.innerHTML;
        keypressed(lbutton);
        buttonanimation(lbutton);
    }

document.addEventListener("keypress",function(event)
{
    keypressed(event.key);
    buttonanimation(event.key);
})
function keypressed(key)
{

     switch(key)
    {
        case "w":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        default: console.log(key);
    };
}

function buttonanimation(currkey)
{
    var abutton = document.querySelector("."+ currkey);
    abutton.classList.add("pressed");
    setTimeout(function()
    {
        abutton.classList.remove("pressed")
    },100);
}