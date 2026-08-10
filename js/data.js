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

        description: "",

        genre: "pop",

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

        songIds: [],

        isPublic: true
    },

    {
        id: "popular",

        title: "محبوب‌ترین‌ها",

        slug: "popular",

        description: "محبوب‌ترین آهنگ‌های BRICE MUSIC",

        cover: "images/playlists/popular.jpg",

        songIds: [],

        isPublic: true
    },

    {
        id: "latest",

        title: "جدیدترین آهنگ‌ها",

        slug: "latest",

        description: "جدیدترین آهنگ‌های اضافه‌شده به BRICE MUSIC",

        cover: "images/playlists/latest.jpg",

        songIds: [],

        isPublic: true
    }

]

};
