// =======================================
// BRICE MUSIC
// Music System
// =======================================


// گرفتن همه آهنگ‌ها

function getAllSongs() {

    return musicDatabase.songs;

}


// گرفتن آهنگ با ID

function getSong(id) {

    return musicDatabase.songs.find(
        song => song.id === id
    );

}


// گرفتن آهنگ‌ها بر اساس دسته‌بندی

function getSongsByCategory(category) {

    return musicDatabase.songs.filter(
        song => song.category === category
    );

}


// گرفتن آهنگ‌های یک خواننده

function getSongsByArtist(artistId) {

    return musicDatabase.songs.filter(
        song => song.artistId === artistId
    );

}


// گرفتن آهنگ‌های یک آلبوم

function getSongsByAlbum(albumId) {

    return musicDatabase.songs.filter(
        song => song.albumId === albumId
    );

}


// آهنگ‌های محبوب

function getPopularSongs() {

    return [...musicDatabase.songs]
        .sort((a, b) => b.views - a.views);

}


// آهنگ‌های جدید

function getLatestSongs() {

    return [...musicDatabase.songs]
        .sort((a, b) => b.date - a.date);

}
