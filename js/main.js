// =======================================
// BRICE MUSIC
// MAIN JS
// =======================================


// =======================================
// GET ARTIST NAME
// =======================================

function getArtistName(id) {

    const artist =
        musicDatabase.artists.find(
            artist => artist.id === id
        );

    return artist
        ? artist.name
        : "نام خواننده";

}


// =======================================
// PLAY SELECTED SONG
// =======================================

function playSelectedSong(song) {

    if (
        typeof loadSong === "function" &&
        typeof playSong === "function"
    ) {

        loadSong(song);

        playSong();

    }

}


// =======================================
// CREATE HOME ARTISTS
// =======================================

function createHomeArtists() {

    const artistList =
        document.getElementById("home-artists");


    if (!artistList) {

        return;

    }


    artistList.innerHTML = "";


    if (
        typeof musicDatabase === "undefined" ||
        !musicDatabase.artists
    ) {

        return;

    }


    const popularArtists =
        musicDatabase.artists
            .filter(
                artist =>
                    artist.isPopular === true
            )
            .slice(0, 4);


    popularArtists.forEach(
        artist => {


            const card =
                document.createElement("a");


            card.className =
                "artist-card";


            card.href =
                "artist.html?artist=" +
                encodeURIComponent(
                    artist.id
                );


            card.innerHTML = `

                <img
                    src="${artist.image}"
                    alt="${artist.name}"
                    loading="lazy"
                >

                <h3>
                    ${artist.name}
                </h3>

            `;


            artistList.appendChild(card);

        }
    );


}


// =======================================
// CREATE LATEST MUSIC
// =======================================

function createMusicCards() {

    const latestMusic =
        document.getElementById("latest-music");


    if (!latestMusic) {

        return;

    }


    latestMusic.innerHTML = "";


    const songs =
        typeof getLatestSongs === "function"
            ? getLatestSongs().slice(0, 4)
            : musicDatabase.songs.slice(0, 4);


    songs.forEach(
        song => {


            const card =
                document.createElement("article");


            card.className =
                "music-card";


            card.innerHTML = `

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
                        ${getArtistName(
                            song.artistId
                        )}
                    </p>

                </div>

            `;


            const playButton =
                card.querySelector(
                    ".play-button"
                );


            playButton.addEventListener(
                "click",
                function () {

                    playSelectedSong({
                        ...song,
                        artist:
                            getArtistName(
                                song.artistId
                            )
                    });

                }
            );


            latestMusic.appendChild(card);

        }
    );

}


// =======================================
// CREATE POPULAR MUSIC
// =======================================

function createPopularMusic() {

    const popularMusic =
        document.getElementById(
            "popular-music"
        );


    if (!popularMusic) {

        return;

    }


    popularMusic.innerHTML = "";


    const popularSongs =
        typeof getPopularSongs === "function"
            ? getPopularSongs().slice(0, 5)
            : musicDatabase.songs
                .filter(
                    song =>
                        song.isPopular === true
                )
                .sort(
                    (a, b) =>
                        b.views - a.views
                )
                .slice(0, 5);


    popularSongs.forEach(
        (song, index) => {


            const item =
                document.createElement("div");


            item.className =
                "popular-item";


            item.innerHTML = `

                <span class="track-number">
                    ${String(index + 1)
                        .padStart(2, "0")}
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
                        ${getArtistName(
                            song.artistId
                        )}
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
                item.querySelector(
                    ".small-play"
                );


            playButton.addEventListener(
                "click",
                function () {

                    playSelectedSong({
                        ...song,
                        artist:
                            getArtistName(
                                song.artistId
                            )
                    });

                }
            );


            popularMusic.appendChild(item);

        }
    );

}


// =======================================
// START MAIN SYSTEM
// =======================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        createHomeArtists();

        createMusicCards();

        createPopularMusic();

    }
);
