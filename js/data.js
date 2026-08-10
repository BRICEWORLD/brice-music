/* =========================================
   BRICE MUSIC
   Main Music Database
========================================= */

const musicDatabase = {

    /* =========================
       CATEGORIES
    ========================= */

    categories: [

        {
            id: "pop",
            name: "پاپ",
            slug: "pop"
        },

        {
            id: "rap",
            name: "رپ و هیپ‌هاپ",
            slug: "rap"
        },

        {
            id: "traditional",
            name: "سنتی",
            slug: "traditional"
        },

        {
            id: "rock",
            name: "راک",
            slug: "rock"
        },

        {
            id: "electronic",
            name: "الکترونیک",
            slug: "electronic"
        },

        {
            id: "fusion",
            name: "تلفیقی",
            slug: "fusion"
        },

        {
            id: "classical",
            name: "کلاسیک",
            slug: "classical"
        },

        {
            id: "sad",
            name: "غمگین",
            slug: "sad"
        },

        {
            id: "romantic",
            name: "عاشقانه",
            slug: "romantic"
        },

        {
            id: "happy",
            name: "شاد",
            slug: "happy"
        },

        {
            id: "nostalgic",
            name: "نوستالژی",
            slug: "nostalgic"
        },

        {
            id: "instrumental",
            name: "بی‌کلام",
            slug: "instrumental"
        },

        {
            id: "local",
            name: "موسیقی محلی",
            slug: "local"
        },

        {
            id: "international",
            name: "خارجی",
            slug: "international"
        }

    ],


    /* =========================
   ARTISTS
========================= */

artists: [

    {
        id: "sample-artist",

        name: "نام خواننده",

        slug: "sample-artist",

        image: "images/artists/sample-artist.jpg",

        bio: "معرفی خواننده",

        country: "Iran",

        genre: "pop",

        isFeatured: true
    },


    {
        id: "artist-2",

        name: "خواننده دوم",

        slug: "artist-2",

        image: "images/artists/sample-artist.jpg",

        bio: "",

        country: "Iran",

        genre: "pop",

        isFeatured: false
    },


    {
        id: "artist-3",

        name: "خواننده سوم",

        slug: "artist-3",

        image: "images/artists/sample-artist.jpg",

        bio: "",

        country: "Iran",

        genre: "rap",

        isFeatured: false
    },


    {
        id: "artist-4",

        name: "خواننده چهارم",

        slug: "artist-4",

        image: "images/artists/sample-artist.jpg",

        bio: "",

        country: "Iran",

        genre: "traditional",

        isFeatured: false
    }

],


    /* =========================
   ALBUMS
========================= */

albums: [

    {
        id: "sample-album",

        title: "نام آلبوم",

        slug: "sample-album",

        artistId: "sample-artist",

        cover: "images/albums/sample-album.jpg",

        year: 2026,

        description: "معرفی کوتاه آلبوم",

        genre: "pop",

        isFeatured: true
    },


    {
        id: "album-2",

        title: "آلبوم دوم",

        slug: "album-2",

        artistId: "artist-2",

        cover: "images/albums/sample-album.jpg",

        year: 2026,

        description: "",

        genre: "pop",

        isFeatured: false
    },


    {
        id: "album-3",

        title: "آلبوم سوم",

        slug: "album-3",

        artistId: "artist-3",

        cover: "images/albums/sample-album.jpg",

        year: 2026,

        description: "",

        genre: "rap",

        isFeatured: false
    },


    {
        id: "album-4",

        title: "آلبوم چهارم",

        slug: "album-4",

        artistId: "artist-4",

        cover: "images/albums/sample-album.jpg",

        year: 2026,

        description: "",

        genre: "traditional",

        isFeatured: false
    }

],


    /* =========================
   SONGS
========================= */

songs: [

    {
        id: 1,

        title: "نمونه آهنگ",

        artistId: "sample-artist",

        albumId: "sample-album",

        category: "pop",

        cover: "images/music/music-01.jpg",

        audio: "audio/sample.mp3",

        duration: "03:45",

        date: "2026-01-01",

        views: 1000,

        isPopular: true,

        isFeatured: true
    }

],

    /* =========================
   PLAYLISTS
========================= */

playlists: [

    {
        id: "featured",

        title: "منتخب BRICE MUSIC",

        slug: "featured",

        description: "منتخبی از بهترین آهنگ‌های BRICE MUSIC",

        cover: "images/playlists/featured.jpg",

        songIds: [1],

        isPublic: true
    },


    {
        id: "popular",

        title: "محبوب‌ترین‌ها",

        slug: "popular",

        description: "محبوب‌ترین آهنگ‌های BRICE MUSIC",

        cover: "images/playlists/popular.jpg",

        songIds: [1],

        isPublic: true
    },


    {
        id: "latest",

        title: "جدیدترین آهنگ‌ها",

        slug: "latest",

        description: "جدیدترین آهنگ‌های اضافه‌شده به BRICE MUSIC",

        cover: "images/playlists/latest.jpg",

        songIds: [1],

        isPublic: true
    }

]

};

// =======================================
// BRICE MUSIC DATABASE HELPERS
// =======================================


// =========================
// GET SONG
// =========================

function getSongById(id){

    return musicDatabase.songs.find(
        song => song.id === id
    );

}


// =========================
// GET ARTIST
// =========================

function getArtistById(id){

    return musicDatabase.artists.find(
        artist => artist.id === id
    );

}


// =========================
// GET ALBUM
// =========================

function getAlbumById(id){

    return musicDatabase.albums.find(
        album => album.id === id
    );

}


// =========================
// GET CATEGORY
// =========================

function getCategoryById(id){

    return musicDatabase.categories.find(
        category => category.id === id
    );

}


// =========================
// GET SONG ARTIST
// =========================

function getSongArtist(song){

    if(!song) return null;

    return getArtistById(
        song.artistId
    );

}


// =========================
// GET SONG ALBUM
// =========================

function getSongAlbum(song){

    if(!song) return null;

    return getAlbumById(
        song.albumId
    );

}


// =========================
// GET SONG CATEGORY
// =========================

function getSongCategory(song){

    if(!song) return null;

    return getCategoryById(
        song.category
    );

}


// =========================
// GET POPULAR SONGS
// =========================

function getPopularSongs(){

    return musicDatabase.songs.filter(
        song => song.isPopular === true
    );

}


// =========================
// GET FEATURED SONGS
// =========================

function getFeaturedSongs(){

    return musicDatabase.songs.filter(
        song => song.isFeatured === true
    );

}


// =========================
// GET LATEST SONGS
// =========================

function getLatestSongs(){

    return [...musicDatabase.songs]
        .sort(
            (a, b) =>
                new Date(b.date) -
                new Date(a.date)
        );

}


// =========================
// GET SONGS BY CATEGORY
// =========================

function getSongsByCategory(categoryId){

    return musicDatabase.songs.filter(
        song =>
            song.category === categoryId
    );

}


// =========================
// GET SONGS BY ARTIST
// =========================

function getSongsByArtist(artistId){

    return musicDatabase.songs.filter(
        song =>
            song.artistId === artistId
    );

}


// =========================
// GET SONGS BY ALBUM
// =========================

function getSongsByAlbum(albumId){

    return musicDatabase.songs.filter(
        song =>
            song.albumId === albumId
    );

}
