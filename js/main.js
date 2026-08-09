// =======================================
// BRICE MUSIC MAIN JS
// =======================================


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



// =========================
// PLAY SELECTED SONG
// =========================

function playSelectedSong(song){

    if(typeof loadSong === "function"){

        loadSong(song);

        playSong();

    }

}



// =========================
// CREATE LATEST MUSIC
// =========================

function createMusicCards(){

    const latestMusic =
    document.getElementById("latest-music");


    if(!latestMusic) return;


    latestMusic.innerHTML = "";


    const songs =
    musicDatabase.songs;


    songs.forEach(song => {

        const card =
        document.createElement("article");


        card.className =
        "music-card";


        card.innerHTML = `

            <div class="music-cover">

                <img
                    src="${song.cover}"
                    alt="${song.title}"
                >

                <button
                    class="play-button"
                    type="button"
                    aria-label="پخش آهنگ"
                >
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
// CREATE POPULAR MUSIC
// =========================

function createPopularMusic(){

    const popularMusic =
    document.getElementById("popular-music");


    if(!popularMusic) return;


    popularMusic.innerHTML = "";


    const songs =
    musicDatabase.songs.filter(
        song => song.isPopular === true
    );


    songs.forEach((song, index) => {

        const item =
        document.createElement("div");


        item.className =
        "popular-item";


        item.innerHTML = `

            <span class="track-number">
                ${String(index + 1).padStart(2, "0")}
            </span>


            <div class="small-cover">

                <img
                    src="${song.cover}"
                    alt="${song.title}"
                >

            </div>


            <div class="track-info">

                <h3>
                    ${song.title}
                </h3>

                <p>
                    ${getArtistName(song.artistId)}
                </p>

            </div>


            <span class="track-duration">
                ${song.duration || "--:--"}
            </span>


            <button
                class="small-play"
                type="button"
                aria-label="پخش آهنگ"
            >
                ▶
            </button>

        `;


        popularMusic.appendChild(item);

    });

}



// =========================
// PLAY BUTTONS
// =========================

document.addEventListener(
    "click",
    function(event){


        const playButton =
        event.target.closest(
            ".play-button, .small-play"
        );


        if(!playButton) return;


        const container =
        playButton.closest(
            ".music-card, .popular-item"
        );


        if(!container) return;


        let songs =
        musicDatabase.songs;


        let song;


        if(
            container.classList.contains(
                "popular-item"
            )
        ){

            const items =
            [...document.querySelectorAll(
                ".popular-item"
            )];


            const index =
            items.indexOf(container);


            const popularSongs =
            songs.filter(
                song => song.isPopular === true
            );


            song =
            popularSongs[index];

        }


        else{

            const cards =
            [...document.querySelectorAll(
                ".music-card"
            )];


            const index =
            cards.indexOf(container);


            song =
            songs[index];

        }


        if(song){

            playSelectedSong(song);

        }

    }
);



// =========================
// START
// =========================

createMusicCards();

createPopularMusic();
