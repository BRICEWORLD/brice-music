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
    id: "homayoun-shajarian",

    name: "همایون شجریان",

    slug: "homayoun-shajarian",

    image: "images/artists/homayoun-shajarian.jpg",

    genre: "traditional",

    description: "خواننده موسیقی سنتی و تلفیقی ایران",

    isPopular: true
},


{
    id: "sirvan-khosravi",

    name: "سیروان خسروی",

    slug: "sirvan-khosravi",

    image: "images/artists/sirvan-khosravi.jpg",

    genre: "pop",

    description: "خواننده و آهنگساز سبک پاپ",

    isPopular: true
},


{
    id: "shayan-yousefi",

    name: "شایان یوسفی",

    slug: "shayan-yousefi",

    image: "images/artists/shayan-yousefi.jpg",

    genre: "pop",

    description: "خواننده موسیقی پاپ",

    isPopular: true
},


{
    id: "reza-sadeghi",

    name: "رضا صادقی",

    slug: "reza-sadeghi",

    image: "images/artists/reza-sadeghi.jpg",

    genre: "pop",

    description: "خواننده و ترانه‌سرای ایرانی",

    isPopular: true
},


{
    id: "ali-yasini",

    name: "علی یاسینی",

    slug: "ali-yasini",

    image: "images/artists/ali-yasini.jpg",

    genre: "pop",

    description: "خواننده جوان موسیقی پاپ",

    isPopular: true
},


{
    id: "hamid-hiraad",

    name: "حمید هیراد",

    slug: "hamid-hiraad",

    image: "images/artists/hamid-hiraad.jpg",

    genre: "pop",

    description: "خواننده سبک پاپ و تلفیقی",

    isPopular: true
},


{
    id: "mohsen-yeganeh",

    name: "محسن یگانه",

    slug: "mohsen-yeganeh",

    image: "images/artists/mohsen-yeganeh.jpg",

    genre: "pop",

    description: "خواننده و آهنگساز ایرانی",

    isPopular: true
},


{
    id: "sirvan-hossein",

    name: "محسن چاوشی",

    slug: "mohsen-chavoshi",

    image: "images/artists/mohsen-chavoshi.jpg",

    genre: "rock",

    description: "خواننده و آهنگساز ایرانی",

    isPopular: true
},


{
    id: "shahram-shokouhi",

    name: "شهرام شکوهی",

    slug: "shahram-shokouhi",

    image: "images/artists/shahram-shokouhi.jpg",

    genre: "fusion",

    description: "خواننده موسیقی تلفیقی",

    isPopular: true
},


{
    id: "armin-2afm",

    name: "آرمین 2AFM",

    slug: "armin-2afm",

    image: "images/artists/armin-2afm.jpg",

    genre: "rap",

    description: "خواننده سبک رپ و هیپ‌هاپ",

    isPopular: true
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
