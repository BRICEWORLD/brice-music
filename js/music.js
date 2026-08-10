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

    return musicDatabase.songs
        .filter(song => song.isPopular === true)
        .sort((a, b) => b.views - a.views);

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

function getArtistName(artistId) {

    const artist =
        musicDatabase.artists.find(
            artist => artist.id === artistId
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
        getArtistName(song.artistId);


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
// START MUSIC PAGE
// =======================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        renderMusicList();

    }
);
