// =======================================
// BRICE MUSIC MAIN JS
// =======================================



// =========================
// CREATE LATEST MUSIC CARDS
// =========================

const latestMusic =
document.getElementById("latest-music");



function createMusicCards(){


    if(!latestMusic) return;



    latestMusic.innerHTML = "";



    const songs =
    musicDatabase.songs;



    songs.forEach(song => {



        const card = document.createElement("article");

        card.className = "music-card";



        card.innerHTML = `

            <div class="music-cover">

                <img
                src="${song.cover}"
                alt="${song.title}">


                <button
                class="play-button"
                type="button">

                ▶

                </button>


            </div>


            <div class="music-info">


                <h3>
                ${song.title}
                </h3>


                <p>
${getArtistName(song.artistId)}
</p>


            </div>

        `;



        latestMusic.appendChild(card);



    });



}


// =========================
// GET ARTIST NAME
// =========================

function getArtistName(id){

    const artist =
    musicDatabase.artists.find(
        artist => artist.id === id
    );


    if(artist){

        return artist.name;

    }


    return "نام خواننده";

}
// اجرا

createMusicCards();




// =========================
// PLAY BUTTON SYSTEM
// =========================


function playSelectedSong(song){


    if(typeof loadSong === "function"){

        loadSong(song);

        playSong();

    }


}



document.addEventListener(
"click",
function(e){



    if(
    e.target.classList.contains("play-button")
    ){


        const cards =
        document.querySelectorAll(".music-card");


        const card =
        e.target.closest(".music-card");


        const index =
        [...cards].indexOf(card);



        const song =
        musicDatabase.songs[index];



        if(song){

            playSelectedSong(song);

        }


    }



});
