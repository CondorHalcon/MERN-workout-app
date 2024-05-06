require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

// ANCHOR: routers
const workoutRoutes = require("./routes/workouts");

// ANCHOR: init express app
const app = express();

// ANCHOR: middleware
app.use(express.json());
app.use((req, res, next) => {
	console.log(req.method, req.path);
	next();
});

// ANCHOR: routes
app.get("/", (req, res) => {
	res.status(200).json({ msg: "Hello World! Welcome to the api." });
});
app.get("/api", (req, res) => {
	res.status(200).json({ msg: "Hello World! Welcome to the api." });
});
app.use("/api/workouts", workoutRoutes);

// ANCHOR: connect to db
mongoose
	.connect(process.env.MONGO_URI)
	.then(() => {
		// ANCHOR: listen for requests
		app.listen(process.env.PORT, () => {
			console.log(
				"Connected to db & listening on port",
				process.env.PORT
			);
		});
	})
	.catch((error) => {
		console.log(error);
	});

