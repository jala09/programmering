/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

//Declare variables that can be used troughout the code
//MyCover creates a new element as child of the music section
var playSong1 = document.querySelector("#song1");
var playSong2 = document.querySelector("#song2");
var playSong3 = document.querySelector("#song3");
var playSong4 = document.querySelector("#song4");
var sound1 = document.querySelector(".sound1");
var sound2 = document.querySelector(".sound2");
var sound3 = document.querySelector(".sound3");
var sound4 = document.querySelector(".sound4");
var allAudios = document.querySelectorAll('audio');
var pictireElement = document.querySelector('.solange1');
var body = document.querySelector(".music");
var MyCover1 = document.createElement('p');
body.appendChild(MyCover1);
var play1 = document.querySelector('.one');
var play2 = document.querySelector('.two');
var play3 = document.querySelector('.three');
var play4 = document.querySelector('.four');



//loading intro page: create eventlistener for onload and targets css classlist transition.
function loadintro() {
    var MyCover = document.querySelector('.solange1');
    MyCover.addEventListener('load', function () {
        var loader = document.querySelector('.loader');
        loader.classList.add('loader-finish');
    });
}

//Random img detail: grabs a random img from the array and changed the original source of the img element.
function getImg() {
    var imagesArray = ["sun.png",
                       "crown.png",
                       "star.png",
                       "eye.png"
                ];

    var randomimg = Math.floor(Math.random() * imagesArray.length);
    var picimg = imagesArray[randomimg];
    console.log(randomimg);
    console.log(picimg);
    document.querySelector(".smallimg").src = "assets/" + picimg;
}

//stop all sounds when this function is calle. this will prevent sound overlapping when a difrent button is clikked
function stopAllAudio() {
    allAudios.forEach(function (audio) {
        audio.pause();
        audio.currentTime = 0;
    });
}

//
//function for music playlist with each if:statemt a difrent sound plays and it targets the class list for animation, the song name and a random ing detal.
function songplays1(event) {
    event.preventDefault();

    if (playSong1 !== "true") {
        stopAllAudio();
        sound1.play();
        play1.classList.add('oneactive');
        play2.classList.remove('twoactive');
        play3.classList.remove('threeactive');
        play4.classList.remove('fouractive');
        pictireElement.src = 'assets/solange1.png';
        MyCover1.textContent = 'almeda';
        MyCover1.className = 'songname'; // Class name
        console.log(MyCover1);
        console.log(sound1);
        getImg();
    }
}

function songplays2(event) {
    event.preventDefault();
    if (playSong2 !== "true") {
        stopAllAudio();
        sound2.play();
        play1.classList.remove('oneactive');
        play2.classList.add('twoactive');
        play3.classList.remove('threeactive');
        play4.classList.remove('fouractive');
        pictireElement.src = 'assets/solange2.png';
        MyCover1.textContent = 'binz';
        MyCover1.className = 'songname'; // Class name
        console.log(MyCover1);
        console.log(sound2);
        getImg();
    }
}


function songplays3(event) {
    event.preventDefault();
    if (playSong3 !== "true") {
        stopAllAudio();
        sound3.play();
        var play1 = document.querySelector('.one');
        var play2 = document.querySelector('.two');
        var play3 = document.querySelector('.three');
        play1.classList.remove('oneactive');
        play2.classList.remove('twoactive');
        play3.classList.add('threeactive');
        play4.classList.remove('fouractive');
        pictireElement.src = 'assets/solange2.png';
        MyCover1.textContent = 'dont';
        MyCover1.className = 'songname'; // Class name
        console.log(MyCover1);
        console.log(sound3);
        getImg();


    }
}

function songplays4(event) {
    event.preventDefault();
    if (playSong4 !== "true") {
        stopAllAudio();
        sound4.play();
        var play1 = document.querySelector('.one');
        var play2 = document.querySelector('.two');
        var play3 = document.querySelector('.three');
        play1.classList.remove('oneactive');
        play2.classList.remove('twoactive');
        play3.classList.remove('threeactive');
        play4.classList.add('fouractive');
        pictireElement.src = 'assets/solange1.png';
        MyCover1.textContent = 'stay flo';
        MyCover1.className = 'songname'; // Class name
        console.log(MyCover1);
        console.log(sound4);
        getImg();
    }
}


//event listener for keys: by using key codes from the website https://keycode.info/ it registers the selected key and plays the sound.
window.addEventListener('keypress', function (e) {
    // var music = Document.querySelector("audio");


    var play1 = document.querySelector('.one');
    var play2 = document.querySelector('.two');
    var play3 = document.querySelector('.three');
    var play4 = document.querySelector('.four');


    //if number 1 is selcted play sound 1 and stop all other sounds and their animation
    if (e.keyCode == "49") {
        stopAllAudio();
        var music1 = sound1.play();
        console.log(music1);
        //        alert("The 'a' letter key has been pressed.");
        play1.classList.add('oneactive');
        play2.classList.remove('twoactive');
        play3.classList.remove('threeactive');
        play4.classList.remove('fouractive');
        pictireElement.src = 'assets/solange1.png';
        MyCover1.textContent = 'almeda';
        MyCover1.className = 'songname'; // Class name
        console.log(MyCover1);
        console.log(sound1);
        getImg();


        //if number 2 is selcted play sound 2 and stop all other sounds and their animation
    } else if (e.keyCode == "50") {
        stopAllAudio();
        var music2 = sound2.play();
        console.log(music2);
        //        alert("The 'b' letter key has been pressed.");
        play2.classList.add('twoactive');
        play1.classList.remove('oneactive');
        play3.classList.remove('threeactive');
        play4.classList.remove('fouractive');
        pictireElement.src = 'assets/solange2.png';
        MyCover1.textContent = 'binz';
        MyCover1.className = 'songname'; // Class name
        console.log(MyCover1);
        console.log(sound2);
        getImg();

        //if number 3 is pressed play song 3 and stop all other sounds and their animation
    } else if (e.keyCode == "51") {
        stopAllAudio();
        var music3 = sound3.play();
        console.log(music3);
        //        alert("The 'b' letter key has been pressed.");
        play3.classList.add('threeactive');
        play1.classList.remove('oneactive');
        play2.classList.remove('twoactive');
        play4.classList.remove('fouractive');
        pictireElement.src = 'assets/solange1.png';
        MyCover1.textContent = 'dont';
        MyCover1.className = 'songname'; // Class name
        console.log(MyCover1);
        console.log(sound3);
        getImg();

        //if number 4 is pressd play song 4 and stop all other sounds and their animation
    } else if (e.keyCode == "52") {
        stopAllAudio();
        var music4 = sound4.play();

        console.log(music4);
        //        alert("The 'b' letter key has been pressed.");
        play4.classList.add('fouractive');
        play1.classList.remove('oneactive');
        play2.classList.remove('twoactive');
        play3.classList.remove('threeactive');
        pictireElement.src = 'assets/solange2.png';
        MyCover1.textContent = 'stay flo';
        MyCover1.className = 'songname'; // Class name
        console.log(MyCover1);
        console.log(sound4);
        getImg();

        //        if spacebar is pressed stop music
    } else if (e.keyCode == "32") {
        stopAllAudio();

    }

});


//event for play songs on click
playSong1.addEventListener('click', songplays1, false);
playSong2.addEventListener('click', songplays2, false);
playSong3.addEventListener('click', songplays3, false);
playSong4.addEventListener('click', songplays4, false);

//loadingintro is called
loadintro();
