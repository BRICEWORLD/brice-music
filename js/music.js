// =======================================
// BRICE MUSIC DATABASE
// =======================================


const musicLibrary = [


    {
        id: 1,

        title:
        "اولین آهنگ",

        artist:
        "نام خواننده",

        category:
        "پاپ",

        cover:
        "images/music/music-01.jpg",

        file:
        "audio/song-01.mp3",

        duration:
        "03:45"

    },



    {
        id: 2,

        title:
        "آهنگ دوم",

        artist:
        "نام خواننده",

        category:
        "غمگین",

        cover:
        "images/music/music-02.jpg",

        file:
        "audio/song-02.mp3",

        duration:
        "04:12"

    },



    {
        id: 3,

        title:
        "آهنگ سوم",

        artist:
        "نام خواننده",

        category:
        "انگیزشی",

        cover:
        "images/music/music-03.jpg",

        file:
        "audio/song-03.mp3",

        duration:
        "03:28"

    }



];



// گرفتن آهنگ با آیدی

function getSong(id){

    return musicLibrary.find(
        song => song.id === id
    );

}
