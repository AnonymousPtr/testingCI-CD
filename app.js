const express = require("express");

const app = express();

const latitude = 13.0108;
const longitude = 74.7943;

app.get("/gps", (req, res) => {
    res.json({
        classroom: "IIIT Classroom",
        latitude: latitude,
        longitude: longitude
    });
});

app.listen(3000, () => {
    console.log("GPS service running on port 3000");
});

