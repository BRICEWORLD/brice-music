// =======================================
// BRICE MUSIC
// MUSIC SYSTEM
// =======================================


// =======================================
// GET ALL SONGS
// =======================================

function getAllSongs() {

    return musicDatabase.songs;

}


// =======================================
// GET SONG BY ID
// =======================================

function getSong(id) {

    return musicDatabase.songs.find(
        song => song.id === id
    );

}


// =======================================
// GET SONGS BY CATEGORY
// =======================================

function getSongsByCategory(category) {

    return musicDatabase.songs.filter(
        song => song.category === category
    );

}


// =======================================
// GET SONGS BY ARTIST
// =======================================

function getSongsByArtist(artistId) {

    return musicDatabase.songs.filter(
        song => song.artistId === artistId
    );

}


// =======================================
// GET SONGS BY ALBUM
// =======================================

function getSongsByAlbum(albumId) {

    return musicDatabase.songs.filter(
        song => song.albumId === albumId
    );

}


// =======================================
// GET POPULAR SONGS
// =======================================

function getPopularSongs() {

    return [...musicDatabase.songs]
        .filter(
            song => song.isPopular === true
        )
        .sort(
            (a, b) => b.views - a.views
        );

}


// =======================================
// GET LATEST SONGS
// =======================================

function getLatestSongs() {

    return [...musicDatabase.songs]
        .sort(
            (a, b) =>
                new Date(b.date) -
                new Date(a.date)
        );

}


// =======================================
// GET ARTIST NAME
// =======================================

function getArtistName(song) {


    if(song.artist){

        return song.artist;

    }



    const artist =
        musicDatabase.artists.find(
            artist => artist.id === song.artistId
        );


    return artist
        ? artist.name
        : "نام خواننده";


}

// =======================================
// CREATE MUSIC CARD
// =======================================

function createMusicCard(song) {

    const artistName =
    getArtistName(song);


    const article =
        document.createElement("article");


    article.className = "music-card";


    article.innerHTML = `

        <div class="music-cover">

            <img
                src="${song.cover}"
                alt="${song.title}"
                loading="lazy"
            >

            <button
                class="play-button"
                type="button"
                aria-label="پخش ${song.title}"
            >
                ▶
            </button>

        </div>


        <div class="music-info">

            <h3>
                ${song.title}
            </h3>

            <p>
                ${artistName}
            </p>

        </div>

    `;


    const playButton =
        article.querySelector(".play-button");


    playButton.addEventListener(
        "click",
        function () {

            if (
                typeof loadSong === "function" &&
                typeof playSong === "function"
            ) {

                loadSong({

                    ...song,

                    artist: artistName

                });

                playSong();

            }

        }
    );


    return article;

}


// =======================================
// CREATE POPULAR ITEM
// =======================================

function createPopularItem(song, index) {

    const artistName =
    getArtistName(song);


    const item =
        document.createElement("div");


    item.className = "popular-item";


    const number =
        String(index + 1).padStart(2, "0");


    item.innerHTML = `

        <span class="track-number">
            ${number}
        </span>


        <div class="small-cover">

            <img
                src="${song.cover}"
                alt="${song.title}"
                loading="lazy"
            >

        </div>


        <div class="track-info">

            <h3>
                ${song.title}
            </h3>

            <p>
                ${artistName}
            </p>

        </div>


        <span class="track-duration">
            ${song.duration || "--:--"}
        </span>


        <button
            class="small-play"
            type="button"
            aria-label="پخش ${song.title}"
        >
            ▶
        </button>

    `;


    const playButton =
        item.querySelector(".small-play");


    playButton.addEventListener(
        "click",
        function () {

            if (
                typeof loadSong === "function" &&
                typeof playSong === "function"
            ) {

                loadSong({

                    ...song,

                    artist: artistName

                });

                playSong();

            }

        }
    );


    return item;

}


// =======================================
// RENDER MUSIC LIST
// =======================================

function renderMusicList() {

    const musicList =
        document.getElementById("music-list");


    if (!musicList) {

        return;

    }


    musicList.innerHTML = "";


    const songs =
        getAllSongs();


    songs.forEach(
        song => {

            const card =
                createMusicCard(song);


            musicList.appendChild(card);

        }
    );

}


// =======================================
// RENDER POPULAR MUSIC
// =======================================

function renderPopularMusic() {

    const popularList =
        document.getElementById("popular-music");


    if (!popularList) {

        return;

    }


    popularList.innerHTML = "";


    const popularSongs =
        getPopularSongs();


    popularSongs
        .slice(0, 5)
        .forEach(
            (song, index) => {

                const item =
                    createPopularItem(
                        song,
                        index
                    );


                popularList.appendChild(item);

            }
        );

}

// =======================================
// RENDER LATEST MUSIC
// =======================================

function renderLatestMusic() {

    const latestList =
        document.getElementById("latest-music");


    if (!latestList) {

        return;

    }


    latestList.innerHTML = "";


    const latestSongs =
        getLatestSongs();


    latestSongs
        .slice(0, 4)
        .forEach(
            song => {

                const card =
                    createMusicCard(song);


                latestList.appendChild(card);

            }
        );

}
// =======================================
// START MUSIC SYSTEM
// =======================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        renderMusicList();

        renderPopularMusic();

        renderLatestMusic();

    }
);
