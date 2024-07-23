var n=document.querySelectorAll('button').length;

for(var i=0;i<n;i++){

document.querySelectorAll('button')[i].addEventListener('click',function(){
    var buttonInnerHTML=this.innerHTML;
    makesound(buttonInnerHTML)
    
})
};

document.addEventListener('keypress',function(event){
    makesound(event.key)
});

function makesound(key){
   
    switch(key){
        case "w":
            var toml=new Audio('./sounds/tom-1.mp3');
            toml.play();
        break;

        case "a":
            var toml2=new Audio('./sounds/tom-2.mp3');
            toml2.play();
        break;

        case "s":
            var toml3=new Audio('./sounds/tom-3.mp3');
            toml3.play();
        break;

        case "d":
            var toml4=new Audio('./sounds/tom-4.mp3');
            toml4.play();
        break;

        case "j":
            var kick_bass=new Audio('./sounds/kick-bass.mp3');
            kick_bass.play();
        break;

        case "k":
            var snare=new Audio('./sounds/snare.mp3');
            snare.play();
        break;

        case "l":
            var crash=new Audio('./sounds/crash.mp3');
            crash.play();
        break;
    }
};

