// =======================================
// BRICE MUSIC PLAYER
// LINK BASED PLAYER
// =======================================


const audio = new Audio();


let isPlaying = false;


let currentSong = {

    title: "آهنگ انتخاب نشده",

    artist: "BRICE MUSIC",

    cover: "images/music/music-01.jpg",

    play: ""

};



// ELEMENTS

const playButton =
document.querySelector(".main-play");


const cover =
document.querySelector(".player-cover img");


const songTitle =
document.querySelector(".player-song h4");


const artistName =
document.querySelector(".player-song span");





// =======================================
// LOAD SONG
// =======================================

function loadSong(song){


    currentSong = song;


    audio.src =
    song.play || "";



    if(cover){

        cover.src =
        song.cover;

    }



    if(songTitle){

        songTitle.textContent =
        song.title;

    }



    if(artistName){

        artistName.textContent =
        song.artist ||
        "BRICE MUSIC";

    }


}





// =======================================
// PLAY
// =======================================

function playSong(){


    if(!audio.src){

        return;

    }


    audio.play();



    isPlaying = true;



    const player =
    document.querySelector(".music-player");


    if(player){

        player.classList.add(
            "is-playing"
        );

    }



    if(playButton){

        playButton.textContent =
        "⏸";

    }


}





// =======================================
// PAUSE
// =======================================

function pauseSong(){


    audio.pause();



    isPlaying = false;



    const player =
    document.querySelector(".music-player");


    if(player){

        player.classList.remove(
            "is-playing"
        );

    }



    if(playButton){

        playButton.textContent =
        "▶";

    }


}





// =======================================
// MAIN BUTTON
// =======================================

if(playButton){


playButton.addEventListener(
"click",
()=>{


    if(isPlaying){

        pauseSong();

    }

    else{

        playSong();

    }


});


}





// =======================================
// AUTO LOAD FIRST SONG
// =======================================

if(
typeof musicDatabase !== "undefined" &&
musicDatabase.songs &&
musicDatabase.songs.length
){


    loadSong(
        musicDatabase.songs[0]
    );


}
