const cloudinary = require('cloudinary').v2;

cloudinary.config({
    // cloud_name: process.env.CLOUD_NAME,
    // api_key: process.env.CLOUD_KEY,
    // api_secre't: process.e process.env.CLOUD_NAMEnv.CLOUD_KEY_SECRET
    cloud_name: "dpblyzwjf",
    api_key: "978133813748813",
    api_secret: "XKZLFMPvGzH4UaZGpmi2QtT-rJM"
});

module.exports = cloudinary;

