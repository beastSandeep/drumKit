//Detecting button press


var numOfButtons = document.querySelectorAll(".set .drum").length;

for (i=0; i<numOfButtons; i++){

    document.querySelectorAll(".set .drum")[i].addEventListener("click", function(){
       var buttonInnerHtml = this.innerHTML;

       makeSound(buttonInnerHtml);
       

    });
}

//Detecting Keyboard press

document.addEventListener("keydown" , function(event){
    makeSound(event.key);
});

    function makeSound(key){
    switch (key) {
    case "a":
        var tom1 = new Audio("/sounds/tom-1.mp3");
        tom1.play();
        break;
    case "s":
        var tom2 = new Audio("/sounds/tom-2.mp3");
        tom2.play();
        break;
    case "d":
        var tom3 = new Audio("/sounds/tom-3.mp3");
        tom3.play();
        break;
    case "f":
        var tom4 = new Audio("/sounds/tom-4.mp3");
        tom4.play();
        break;
    case "j":
        var snare = new Audio("/sounds/snare.mp3");
        snare.play();
        break;
    case "k":
        var crash = new Audio("/sounds/crash.mp3");
        crash.play();
        break;
    case "l":
        var kick = new Audio("/sounds/kick-bass.mp3");
        kick.play();
        break;
   
    default:
        console.log(buttonInnerHtml);
   }
}