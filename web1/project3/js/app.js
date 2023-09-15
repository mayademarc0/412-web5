const pads = document.querySelectorAll('.pad');
var audio1 = new Audio('sounds/mixkit-arcade-explosion-230.wav');
var audio2 = new Audio('sounds/mixkit-arcade-mechanical-bling-210.wav');
var audio3 = new Audio('sounds/mixkit-arcade-fast-game-over-233.wav');
var audio4 = new Audio('sounds/mixkit-angry-and-agitated-dog-growling-53.wav');
var audio5 = new Audio('sounds/mixkit-crickets-and-insects-in-the-wild-ambience-39.wav');
var audio6 = new Audio('sounds/mixkit-footsteps-on-tall-grass-532.wav');
var audio7 = new Audio('sounds/mixkit-game-level-music-689.wav');
var audio8 = new Audio('sounds/mixkit-human-eating-dry-cereal-130.wav');
var audio9 = new Audio('sounds/mixkit-keyboard-typing-1386.wav');
var audio10 = new Audio('sounds/mixkit-light-rain-loop-2393.wav');
var audio11 = new Audio('sounds/mixkit-locking-a-shop-door-with-keys-202.wav');
var audio12 = new Audio('sounds/mixkit-male-crowd-says-thank-you-382.wav');
var audio13 = new Audio('sounds/mixkit-retro-game-notification-212.wav');
var audio14 = new Audio('sounds/mixkit-sci-fi-morph-moan-3099.wav');
var audio15 = new Audio('sounds/mixkit-small-group-cheer-and-applause-518.wav');
var audio16 = new Audio('sounds/mixkit-small-group-cheer-and-applause-518.wav');


pads.forEach(function (pad, index, arr) {
    pad.addEventListener("click", function () {
        if(index == 0 )
            audio1.play();
        if(index == 1 )
            audio2.play();
        if(index == 2 )
            audio3.play();
        if(index == 3 )
            audio4.play();
        if(index == 4 )
            audio5.play();
        if(index == 5 )
            audio6.play();
        if(index == 6 )
            audio7.play();
        if(index == 7 )
            audio8.play();
        if(index == 8 )
            audio9.play();
        if(index == 9 )
            audio10.play();
        if(index == 10 )
            audio11.play();
        if(index == 11 )
            audio12.play();
        if(index == 12 )
            audio13.play();
        if(index == 13 )
            audio14.play();
        if(index == 14 )
            audio15.play();
        if(index == 15 )
            audio16.play();
    })
});
