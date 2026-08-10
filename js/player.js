// =======================================
// BRICE MUSIC PLAYER
// =======================================


const audio = new Audio();


let isPlaying = false;


let currentSong = {
    title: "آهنگ انتخاب نشده",
    artist: "BRICE MUSIC",
    cover: "images/music/music-01.jpg",
    file: ""
};



const playButton =
document.querySelector(".main-play");


const cover =
document.querySelector(".player-cover img");


const songTitle =
document.querySelector(".player-song h4");


const artistName =
document.querySelector(".player-song span");



function loadSong(song){

    currentSong = song;

    audio.src = song.file || song.audio;

    cover.src = song.cover;

    songTitle.textContent = song.title;

    artistName.textContent =
    typeof getArtistName === "function"
        ? getArtistName(song.artistId)
        : "نام خواننده";

}



function playSong(){

    if(!audio.src){

        return;

    }


    audio.play();

    isPlaying = true;


    document
    .querySelector(".music-player")
    .classList.add("is-playing");


    playButton.textContent = "⏸";

}



function pauseSong(){

    audio.pause();

    isPlaying = false;


    document
    .querySelector(".music-player")
    .classList.remove("is-playing");


    playButton.textContent = "▶";

}



if(playButton){

    playButton.addEventListener(
        "click",
        ()=>{

            if(isPlaying){

                pauseSong();

            }else{

                playSong();

            }

        }
    );

}




// آماده سازی اولیه پلیر

if(typeof musicDatabase !== "undefined"){

    const firstSong =
    musicDatabase.songs[0];


    if(firstSong){

        loadSong(firstSong);

    }

}
