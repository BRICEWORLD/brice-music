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
    id: "mohsen-chavoshi",

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
},


   {
    id: "amir-tataloo",

    name: "امیر تتلو",

    slug: "amir-tataloo",

    image: "images/artists/amir-tataloo.jpg",

    genre: "rap",

    description: "خواننده و هنرمند سبک رپ و هیپ‌هاپ",

    isPopular: true
},


{
    id: "sasy",

    name: "ساسی",

    slug: "sasy",

    image: "images/artists/sasy.jpg",

    genre: "pop",

    description: "خواننده موسیقی پاپ و شاد",

    isPopular: true
},


{
    id: "tohi",

    name: "حسین تهی",

    slug: "tohi",

    image: "images/artists/tohi.jpg",

    genre: "rap",

    description: "خواننده و هنرمند سبک رپ و هیپ‌هاپ",

    isPopular: true
},


{
    id: "yas",

    name: "یاس",

    slug: "yas",

    image: "images/artists/yas.jpg",

    genre: "rap",

    description: "خواننده و پیشگام موسیقی رپ فارسی",

    isPopular: true
},


{
    id: "reza-pishro",

    name: "رضا پیشرو",

    slug: "reza-pishro",

    image: "images/artists/reza-pishro.jpg",

    genre: "rap",

    description: "خواننده و هنرمند سبک رپ فارسی",

    isPopular: true
},


{
    id: "ho3ein",

    name: "حصین",

    slug: "ho3ein",

    image: "images/artists/ho3ein.jpg",

    genre: "rap",

    description: "خواننده و هنرمند موسیقی رپ فارسی",

    isPopular: true
},


{
    id: "shervin-hajipour",

    name: "شروین حاجی‌پور",

    slug: "shervin-hajipour",

    image: "images/artists/shervin-hajipour.jpg",

    genre: "pop",

    description: "خواننده و ترانه‌سرای موسیقی پاپ",

    isPopular: true
},


{
    id: "shadmehr-aghili",

    name: "شادمهر عقیلی",

    slug: "shadmehr-aghili",

    image: "images/artists/shadmehr-aghili.jpg",

    genre: "pop",

    description: "خواننده، آهنگساز و نوازنده موسیقی پاپ",

    isPopular: true
},


{
    id: "majid-razavi",

    name: "مجید رضوی",

    slug: "majid-razavi",

    image: "images/artists/majid-razavi.jpg",

    genre: "pop",

    description: "خواننده موسیقی پاپ",

    isPopular: true
},


{
    id: "behnam-bani",

    name: "بهنام بانی",

    slug: "behnam-bani",

    image: "images/artists/behnam-bani.jpg",

    genre: "pop",

    description: "خواننده موسیقی پاپ",

    isPopular: true
},


{
    id: "erfan-tahmasbi",

    name: "عرفان طهماسبی",

    slug: "erfan-tahmasbi",

    image: "images/artists/erfan-tahmasbi.jpg",

    genre: "pop",

    description: "خواننده موسیقی پاپ و تلفیقی",

    isPopular: true
},


{
    id: "sami-beigi",

    name: "سامـی بیگی",

    slug: "sami-beigi",

    image: "images/artists/sami-beigi.jpg",

    genre: "pop",

    description: "خواننده و هنرمند موسیقی پاپ",

    isPopular: true
},


{
    id: "arash",

    name: "آرش",

    slug: "arash",

    image: "images/artists/arash.jpg",

    genre: "pop",

    description: "خواننده و تهیه‌کننده موسیقی پاپ",

    isPopular: true
},


{
    id: "koorosh",

    name: "کوروش",

    slug: "koorosh",

    image: "images/artists/koorosh.jpg",

    genre: "rap",

    description: "خواننده و هنرمند سبک رپ و هیپ‌هاپ",

    isPopular: true
},


{
    id: "sijal",

    name: "سیجل",

    slug: "sijal",

    image: "images/artists/sijal.jpg",

    genre: "rap",

    description: "خواننده و هنرمند موسیقی رپ فارسی",

    isPopular: true
},


{
    id: "behzad-leito",

    name: "بهزاد لیتو",

    slug: "behzad-leito",

    image: "images/artists/behzad-leito.jpg",

    genre: "rap",

    description: "خواننده و هنرمند سبک رپ و هیپ‌هاپ",

    isPopular: true
},


{
    id: "hiphopologist",

    name: "هیپهاپولوژیست",

    slug: "hiphopologist",

    image: "images/artists/hiphopologist.jpg",

    genre: "rap",

    description: "خواننده و هنرمند موسیقی رپ فارسی",

    isPopular: true
},


{
    id: "ali-sorena",

    name: "علی سورنا",

    slug: "ali-sorena",

    image: "images/artists/ali-sorena.jpg",

    genre: "rap",

    description: "خواننده و ترانه‌سرای موسیقی رپ فارسی",

    isPopular: true
},


{
    id: "hichkas",

    name: "هیچکس",

    slug: "hichkas",

    image: "images/artists/hichkas.jpg",

    genre: "rap",

    description: "خواننده و از چهره‌های تأثیرگذار رپ فارسی",

    isPopular: true
},


{
    id: "zebazi",

    name: "زدبازی",

    slug: "zebazi",

    image: "images/artists/zebazi.jpg",

    genre: "rap",

    description: "گروه موسیقی رپ و هیپ‌هاپ فارسی",

    isPopular: true
}
],

/* =========================
   ALBUMS
========================= */

albums: [

    {
        id: "album-homayoun-shajarian",

        title: "آلبوم همایون شجریان",

        slug: "album-homayoun-shajarian",

        artistId: "homayoun-shajarian",

        cover: "images/albums/homayoun-shajarian.jpg",

        year: 2026,

        description: "آلبوم‌های همایون شجریان",

        genre: "traditional",

        isFeatured: true
    },


    {
        id: "album-sirvan-khosravi",

        title: "آلبوم سیروان خسروی",

        slug: "album-sirvan-khosravi",

        artistId: "sirvan-khosravi",

        cover: "images/albums/sirvan-khosravi.jpg",

        year: 2026,

        description: "آلبوم‌های سیروان خسروی",

        genre: "pop",

        isFeatured: true
    },


    {
        id: "album-shayan-yousefi",

        title: "آلبوم شایان یوسفی",

        slug: "album-shayan-yousefi",

        artistId: "shayan-yousefi",

        cover: "images/albums/shayan-yousefi.jpg",

        year: 2026,

        description: "آلبوم‌های شایان یوسفی",

        genre: "pop",

        isFeatured: false
    },


    {
        id: "album-reza-sadeghi",

        title: "آلبوم رضا صادقی",

        slug: "album-reza-sadeghi",

        artistId: "reza-sadeghi",

        cover: "images/albums/reza-sadeghi.jpg",

        year: 2026,

        description: "آلبوم‌های رضا صادقی",

        genre: "pop",

        isFeatured: true
    },


    {
        id: "album-ali-yasini",

        title: "آلبوم علی یاسینی",

        slug: "album-ali-yasini",

        artistId: "ali-yasini",

        cover: "images/albums/ali-yasini.jpg",

        year: 2026,

        description: "آلبوم‌های علی یاسینی",

        genre: "pop",

        isFeatured: true
    },


    {
        id: "album-hamid-hiraad",

        title: "آلبوم حمید هیراد",

        slug: "album-hamid-hiraad",

        artistId: "hamid-hiraad",

        cover: "images/albums/hamid-hiraad.jpg",

        year: 2026,

        description: "آلبوم‌های حمید هیراد",

        genre: "pop",

        isFeatured: false
    },


    {
    id: "album-nafasaye-bi-hadaf",

    title: "نفس‌های بی‌هدف",

    slug: "nafasaye-bi-hadaf",

    artistId: "mohsen-yeganeh",

    cover: "images/albums/mohsen-yeganeh.jpg",

    year: 1387,

    description: "اولین آلبوم رسمی محسن یگانه",

    genre: "pop",

    isFeatured: true
},


{
    id: "album-rage-khab",

    title: "رگ خواب",

    slug: "rage-khab",

    artistId: "mohsen-yeganeh",

    cover: "images/albums/mohsen-yeganeh.jpg",

    year: 1389,

    description: "دومین آلبوم رسمی محسن یگانه",

    genre: "pop",

    isFeatured: true
},


{
    id: "album-hobab",

    title: "حباب",

    slug: "hobab",

    artistId: "mohsen-yeganeh",

    cover: "images/albums/mohsen-yeganeh.jpg",

    year: 1391,

    description: "سومین آلبوم رسمی محسن یگانه",

    genre: "pop",

    isFeatured: true
},


{
    id: "album-negahe-man",

    title: "نگاه من",

    slug: "negahe-man",

    artistId: "mohsen-yeganeh",

    cover: "images/albums/mohsen-yeganeh.jpg",

    year: 1394,

    description: "چهارمین آلبوم رسمی محسن یگانه",

    genre: "pop",

    isFeatured: true
},


    {
        id: "album-mohsen-chavoshi",

        title: "آلبوم محسن چاوشی",

        slug: "album-mohsen-chavoshi",

        artistId: "mohsen-chavoshi",

        cover: "images/albums/mohsen-chavoshi.jpg",

        year: 2026,

        description: "آلبوم‌های محسن چاوشی",

        genre: "rock",

        isFeatured: true
    },


    {
        id: "album-shahram-shokouhi",

        title: "آلبوم شهرام شکوهی",

        slug: "album-shahram-shokouhi",

        artistId: "shahram-shokouhi",

        cover: "images/albums/shahram-shokouhi.jpg",

        year: 2026,

        description: "آلبوم‌های شهرام شکوهی",

        genre: "fusion",

        isFeatured: false
    },


    {
        id: "album-armin-2afm",

        title: "آلبوم آرمین 2AFM",

        slug: "album-armin-2afm",

        artistId: "armin-2afm",

        cover: "images/albums/armin-2afm.jpg",

        year: 2026,

        description: "آلبوم‌های آرمین 2AFM",

        genre: "rap",

        isFeatured: true
    },

   
/* =========================
   NEW ARTISTS ALBUMS
   ARTISTS 11 - 30
========================= */


{
    id: "album-amir-tataloo-01",
    title: "شماره ۶",
    slug: "amir-tataloo-shomare-6",
    artistId: "amir-tataloo",
    cover: "images/albums/amir-tataloo.jpg",
    year: null,
    description: "آلبوم امیر تتلو",
    genre: "rap",
    isFeatured: true
},


{
    id: "album-amir-tataloo-02",
    title: "جهنم",
    slug: "amir-tataloo-jahannam",
    artistId: "amir-tataloo",
    cover: "images/albums/amir-tataloo.jpg",
    year: null,
    description: "آلبوم امیر تتلو",
    genre: "rap",
    isFeatured: false
},


{
    id: "album-sasy-01",
    title: "بد از تو",
    slug: "sasy-bad-az-to",
    artistId: "sasy",
    cover: "images/albums/sasy.jpg",
    year: null,
    description: "آثار آلبومی ساسی",
    genre: "pop",
    isFeatured: true
},


{
    id: "album-sasy-02",
    title: "ساسی",
    slug: "sasy-album",
    artistId: "sasy",
    cover: "images/albums/sasy.jpg",
    year: null,
    description: "آثار آلبومی ساسی",
    genre: "pop",
    isFeatured: false
},


{
    id: "album-tohi-01",
    title: "اینجا ایرانه",
    slug: "tohi-inja-irane",
    artistId: "tohi",
    cover: "images/albums/tohi.jpg",
    year: null,
    description: "آثار حسین تهی",
    genre: "rap",
    isFeatured: true
},


{
    id: "album-tohi-02",
    title: "تهی",
    slug: "tohi-album",
    artistId: "tohi",
    cover: "images/albums/tohi.jpg",
    year: null,
    description: "آثار حسین تهی",
    genre: "rap",
    isFeatured: false
},


{
    id: "album-yas-01",
    title: "خیلی وقت بود",
    slug: "yas-kheyli-vaght-bud",
    artistId: "yas",
    cover: "images/albums/yas.jpg",
    year: null,
    description: "آثار یاس",
    genre: "rap",
    isFeatured: true
},


{
    id: "album-yas-02",
    title: "از چی بگم",
    slug: "yas-az-chi-begam",
    artistId: "yas",
    cover: "images/albums/yas.jpg",
    year: null,
    description: "آثار یاس",
    genre: "rap",
    isFeatured: false
},


{
    id: "album-reza-pishro-01",
    title: "دوران طلایی",
    slug: "reza-pishro-dorane-talaei",
    artistId: "reza-pishro",
    cover: "images/albums/reza-pishro.jpg",
    year: null,
    description: "آثار رضا پیشرو",
    genre: "rap",
    isFeatured: true
},


{
    id: "album-reza-pishro-02",
    title: "ریل",
    slug: "reza-pishro-rail",
    artistId: "reza-pishro",
    cover: "images/albums/reza-pishro.jpg",
    year: 2017,
    description: "آثار رضا پیشرو",
    genre: "rap",
    isFeatured: false
},


{
    id: "album-ho3ein-01",
    title: "جنگل آسفالت",
    slug: "ho3ein-jangale-asfalt",
    artistId: "ho3ein",
    cover: "images/albums/ho3ein.jpg",
    year: null,
    description: "آثار حصین",
    genre: "rap",
    isFeatured: true
},


{
    id: "album-ho3ein-02",
    title: "آماده باش",
    slug: "ho3ein-amade-bash",
    artistId: "ho3ein",
    cover: "images/albums/ho3ein.jpg",
    year: null,
    description: "آثار حصین",
    genre: "rap",
    isFeatured: false
},


{
    id: "album-shervin-01",
    title: "مجموعه آثار",
    slug: "shervin-hajipour-collection",
    artistId: "shervin-hajipour",
    cover: "images/albums/shervin-hajipour.jpg",
    year: null,
    description: "مجموعه آثار شروین حاجی‌پور",
    genre: "pop",
    isFeatured: true
},


{
    id: "album-shadmehr-01",
    title: "دهاتی",
    slug: "shadmehr-dehati",
    artistId: "shadmehr-aghili",
    cover: "images/albums/shadmehr-aghili.jpg",
    year: 1999,
    description: "آلبوم دهاتی شادمهر عقیلی",
    genre: "pop",
    isFeatured: true
},


{
    id: "album-shadmehr-02",
    title: "پاپ‌کورن",
    slug: "shadmehr-popcorn",
    artistId: "shadmehr-aghili",
    cover: "images/albums/shadmehr-aghili.jpg",
    year: 2005,
    description: "آلبوم پاپ‌کورن شادمهر عقیلی",
    genre: "pop",
    isFeatured: true
},


{
    id: "album-shadmehr-03",
    title: "طرفدار",
    slug: "shadmehr-tarafdar",
    artistId: "shadmehr-aghili",
    cover: "images/albums/shadmehr-aghili.jpg",
    year: 2012,
    description: "آلبوم طرفدار شادمهر عقیلی",
    genre: "pop",
    isFeatured: false
},


{
    id: "album-shadmehr-04",
    title: "تجربه کن",
    slug: "shadmehr-tajrobeh-kon",
    artistId: "shadmehr-aghili",
    cover: "images/albums/shadmehr-aghili.jpg",
    year: 2016,
    description: "آلبوم تجربه کن شادمهر عقیلی",
    genre: "pop",
    isFeatured: false
},


{
    id: "album-majid-razavi-01",
    title: "مجموعه آثار",
    slug: "majid-razavi-collection",
    artistId: "majid-razavi",
    cover: "images/albums/majid-razavi.jpg",
    year: null,
    description: "مجموعه آثار مجید رضوی",
    genre: "pop",
    isFeatured: true
},


{
    id: "album-behnam-bani-01",
    title: "مجموعه آثار",
    slug: "behnam-bani-collection",
    artistId: "behnam-bani",
    cover: "images/albums/behnam-bani.jpg",
    year: null,
    description: "مجموعه آثار بهنام بانی",
    genre: "pop",
    isFeatured: true
},


{
    id: "album-erfan-tahmasbi-01",
    title: "مجموعه آثار",
    slug: "erfan-tahmasbi-collection",
    artistId: "erfan-tahmasbi",
    cover: "images/albums/erfan-tahmasbi.jpg",
    year: null,
    description: "مجموعه آثار عرفان طهماسبی",
    genre: "pop",
    isFeatured: true
},


{
    id: "album-sami-beigi-01",
    title: "مجموعه آثار",
    slug: "sami-beigi-collection",
    artistId: "sami-beigi",
    cover: "images/albums/sami-beigi.jpg",
    year: null,
    description: "مجموعه آثار سامی بیگی",
    genre: "pop",
    isFeatured: true
},


{
    id: "album-arash-01",
    title: "مجموعه آثار",
    slug: "arash-collection",
    artistId: "arash",
    cover: "images/albums/arash.jpg",
    year: null,
    description: "مجموعه آثار آرش",
    genre: "pop",
    isFeatured: true
},


{
    id: "album-kourosh-01",
    title: "مجموعه آثار",
    slug: "kourosh-collection",
    artistId: "koorosh",
    cover: "images/albums/koorosh.jpg",
    year: null,
    description: "مجموعه آثار کوروش",
    genre: "rap",
    isFeatured: true
},


{
    id: "album-sijal-01",
    title: "مجموعه آثار",
    slug: "sijal-collection",
    artistId: "sijal",
    cover: "images/albums/sijal.jpg",
    year: null,
    description: "مجموعه آثار سیجل",
    genre: "rap",
    isFeatured: true
},


{
    id: "album-behzad-leito-01",
    title: "مجموعه آثار",
    slug: "behzad-leito-collection",
    artistId: "behzad-leito",
    cover: "images/albums/behzad-leito.jpg",
    year: null,
    description: "مجموعه آثار بهزاد لیتو",
    genre: "rap",
    isFeatured: true
},


{
    id: "album-hiphopologist-01",
    title: "مجموعه آثار",
    slug: "hiphopologist-collection",
    artistId: "hiphopologist",
    cover: "images/albums/hiphopologist.jpg",
    year: null,
    description: "مجموعه آثار هیپهاپولوژیست",
    genre: "rap",
    isFeatured: true
},


{
    id: "album-ali-sorena-01",
    title: "مجموعه آثار",
    slug: "ali-sorena-collection",
    artistId: "ali-sorena",
    cover: "images/albums/ali-sorena.jpg",
    year: null,
    description: "مجموعه آثار علی سورنا",
    genre: "rap",
    isFeatured: true
},


{
    id: "album-hichkas-01",
    title: "جنگل آسفالت",
    slug: "hichkas-jangale-asfalt",
    artistId: "hichkas",
    cover: "images/albums/hichkas.jpg",
    year: null,
    description: "آثار هیچکس",
    genre: "rap",
    isFeatured: true
},


{
    id: "album-zebazi-01",
    title: "مجموعه آثار زدبازی",
    slug: "zedbazi-collection",
    artistId: "zebazi",
    cover: "images/albums/zebazi.jpg",
    year: null,
    description: "مجموعه آثار گروه زدبازی",
    genre: "rap",
    isFeatured: true
}
],
/* =========================
   SONGS
========================= */

songs: [

    {
        id: 1,
        title: "نفس‌های بی‌هدف",
        artistId: "mohsen-yeganeh",
        albumId: "album-nafasaye-bi-hadaf",
        category: "pop",
        cover: "images/music/mohsen-yeganeh.jpg",
        audio: "audio/mohsen-yeganeh/nafas-haye-bi-hadaf.mp3",
        duration: "00:00",
        date: "2008-01-01",
        views: 100000,
        isPopular: true,
        isFeatured: true
    },


    {
        id: 2,
        title: "آخه دل من",
        artistId: "mohsen-yeganeh",
        albumId: "album-nafasaye-bi-hadaf",
        category: "pop",
        cover: "images/music/mohsen-yeganeh.jpg",
        audio: "audio/mohsen-yeganeh/akhe-dele-man.mp3",
        duration: "00:00",
        date: "2008-01-01",
        views: 90000,
        isPopular: true,
        isFeatured: false
    },


    {
        id: 3,
        title: "نخواستم",
        artistId: "mohsen-yeganeh",
        albumId: "album-nafasaye-bi-hadaf",
        category: "pop",
        cover: "images/music/mohsen-yeganeh.jpg",
        audio: "audio/mohsen-yeganeh/nakhastam.mp3",
        duration: "00:00",
        date: "2008-01-01",
        views: 80000,
        isPopular: false,
        isFeatured: false
    },


    {
        id: 4,
        title: "گناهی ندارم",
        artistId: "mohsen-yeganeh",
        albumId: "album-nafasaye-bi-hadaf",
        category: "pop",
        cover: "images/music/mohsen-yeganeh.jpg",
        audio: "audio/mohsen-yeganeh/gonahi-nadaram.mp3",
        duration: "00:00",
        date: "2008-01-01",
        views: 75000,
        isPopular: false,
        isFeatured: false
    },


    {
        id: 5,
        title: "اینجا جای تو نیست",
        artistId: "mohsen-yeganeh",
        albumId: "album-nafasaye-bi-hadaf",
        category: "pop",
        cover: "images/music/mohsen-yeganeh.jpg",
        audio: "audio/mohsen-yeganeh/inja-jaye-to-nist.mp3",
        duration: "00:00",
        date: "2008-01-01",
        views: 70000,
        isPopular: false,
        isFeatured: false
    },


    {
        id: 6,
        title: "چشم‌های خیس من",
        artistId: "mohsen-yeganeh",
        albumId: "album-nafasaye-bi-hadaf",
        category: "pop",
        cover: "images/music/mohsen-yeganeh.jpg",
        audio: "audio/mohsen-yeganeh/cheshmhaye-khise-man.mp3",
        duration: "00:00",
        date: "2008-01-01",
        views: 65000,
        isPopular: false,
        isFeatured: false
    },


    {
        id: 7,
        title: "سرتو بالا بگیر",
        artistId: "mohsen-yeganeh",
        albumId: "album-nafasaye-bi-hadaf",
        category: "pop",
        cover: "images/music/mohsen-yeganeh.jpg",
        audio: "audio/mohsen-yeganeh/sareto-bala-begir.mp3",
        duration: "00:00",
        date: "2008-01-01",
        views: 60000,
        isPopular: false,
        isFeatured: false
    },


    {
        id: 8,
        title: "نشکن دلمو",
        artistId: "mohsen-yeganeh",
        albumId: "album-nafasaye-bi-hadaf",
        category: "pop",
        cover: "images/music/mohsen-yeganeh.jpg",
        audio: "audio/mohsen-yeganeh/nashkan-delamo.mp3",
        duration: "00:00",
        date: "2008-01-01",
        views: 55000,
        isPopular: false,
        isFeatured: false
    },


    {
        id: 9,
        title: "هیچکی نمیتونه بفهمه",
        artistId: "mohsen-yeganeh",
        albumId: "album-nafasaye-bi-hadaf",
        category: "pop",
        cover: "images/music/mohsen-yeganeh.jpg",
        audio: "audio/mohsen-yeganeh/hichki-nemitoone-befahme.mp3",
        duration: "00:00",
        date: "2008-01-01",
        views: 50000,
        isPopular: false,
        isFeatured: false
    },


    {
        id: 10,
        title: "بنویس از سر خط",
        artistId: "mohsen-yeganeh",
        albumId: "album-nafasaye-bi-hadaf",
        category: "pop",
        cover: "images/music/mohsen-yeganeh.jpg",
        audio: "audio/mohsen-yeganeh/benevis-az-sare-khat.mp3",
        duration: "00:00",
        date: "2008-01-01",
        views: 45000,
        isPopular: false,
        isFeatured: false
    },


    {
        id: 11,
        title: "آخه دل من (بی‌کلام)",
        artistId: "mohsen-yeganeh",
        albumId: "album-nafasaye-bi-hadaf",
        category: "pop",
        cover: "images/music/mohsen-yeganeh.jpg",
        audio: "audio/mohsen-yeganeh/akhe-dele-man-bikalam.mp3",
        duration: "00:00",
        date: "2008-01-01",
        views: 30000,
        isPopular: false,
        isFeatured: false
    },


    {
        id: 12,
        title: "بهت قول میدم",
        artistId: "mohsen-yeganeh",
        albumId: null,
        category: "pop",
        cover: "images/music/behet-ghol-midam.jpg",
        audio: "audio/behet-ghol-midam.mp3",
        duration: "00:00",
        date: "2016-01-01",
        views: 100000,
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
