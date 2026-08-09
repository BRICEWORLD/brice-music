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

// =======================================
// BRICE MUSIC DATABASE TEST
// =======================================

console.log("BRICE MUSIC Database:", musicDatabase);

console.log("Categories:", musicDatabase.categories.length);

console.log("Artists:", musicDatabase.artists.length);

console.log("Albums:", musicDatabase.albums.length);

console.log("Songs:", musicDatabase.songs.length);

console.log("Playlists:", musicDatabase.playlists.length);
