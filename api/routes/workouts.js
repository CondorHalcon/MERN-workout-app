const express = require("express");
const Workout = require("../models/workoutModel");

const router = express.Router();

// NOTE: Get all workouts
router.get("/", (req, res) => {
	res.json({ msg: "GET all workouts" });
});

// NOTE: GET a single workout
router.get("/:id", (req, res) => {
	res.json({ msg: "GET a single workout" });
});

// NOTE: POST a new workout
router.post("/", async (req, res) => {
	const { title, load, reps } = req.body;

	try {
		const workout = await Workout.create({ title, load, reps });
		res.status(201).json(workout);
		console.log(workout);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
});
// NOTE: DELETE a workout
router.delete("/:id", (req, res) => {
	res.json({ msg: "DELETE a workout" });
});
// NOTE: PATCH a workout
router.patch("/:id", (req, res) => {
	res.json({ msg: "PATCH a workout" });
});

module.exports = router;
