require("dotenv").config();
const express = require("express");

// ANCHOR: init express app
const app = express();

// ANCHOR: middleware
app.use((req, res, next) => {
	console.log(req.method, req.path);
	next();
});

// ANCHOR: routes
app.get("/", (req, res) => {
	res.status(200).json({ msg: "Hello World! Welcome to the api." });
});

// ANCHOR: listen for requests
app.listen(process.env.PORT, () => {
	console.log("Listening on port", process.env.PORT);
});
