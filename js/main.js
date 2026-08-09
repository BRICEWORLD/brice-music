// =======================================
// BRICE MUSIC MAIN JS
// =======================================


const musicCards =
document.querySelectorAll(".music-card");



const playButtons =
document.querySelectorAll(".play-button");



function playSelectedSong(song){


    if(typeof loadSong === "function"){

        loadSong(song);

        playSong();

    }

}




playButtons.forEach((button,index)=>{


    button.addEventListener(
        "click",
        ()=>{


            const song =
            musicLibrary[index];


            if(song){

                playSelectedSong(song);

            }


        }
    );


});
