require('dotenv').config();
module.exports = {
    spotify: {
        id: process.env.SPOTIFY_ID,
        secret: process.env.SPOTIFY_SECRET,
    },
};
