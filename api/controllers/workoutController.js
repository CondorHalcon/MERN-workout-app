const Workout = require("../models/workoutModel");
const mongoose = require("mongoose");

// GET all workouts
const getAllWorkouts = async (req, res) => {
	try {
		const workouts = await Workout.find({}).sort({ createdAt: -1 });
		res.status(200).json(workouts);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

// GET a single workout
const getOneWorkout = async (req, res) => {
	try {
		const { id } = req.params;

		if (!mongoose.Types.ObjectId.isValid(id)) {
			return res.status(400).json({ error: "Invalid Workout ID" });
		}

		const workout = await Workout.findById(id);

		if (!workout) {
			return res.status(404).json({ error: "Workout Not Found" });
		}

		res.status(200).json(workout);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

// POST a new workout
const postWorkout = async (req, res) => {
	const { title, load, reps } = req.body;

	let emptyFields = [];
	if (!title) {
		emptyFields.push("title");
	}
	if (!load) {
		emptyFields.push("load");
	}
	if (!reps) {
		emptyFields.push("reps");
	}
	if (emptyFields.length == 1) {
		return res.status(400).json({
			error: "Required field is empty.",
			emptyFields,
		});
	} else if (emptyFields.length > 0) {
		return res.status(400).json({
			error: "Required fields are empty",
			emptyFields,
		});
	}
	

	try {
		const workout = await Workout.create({ title, load, reps });
		res.status(201).json(workout);
		console.log(workout);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

// DELETE a workout
const deleteWorkout = async (req, res) => {
	try {
		const { id } = req.params;

		if (!mongoose.Types.ObjectId.isValid(id)) {
			return res.status(400).json({ error: "Invalid Workout ID" });
		}

		const workout = await Workout.findOneAndDelete({ _id: id });

		if (!workout) {
			return res.status(404).json({ error: "Workout Not Found" });
		}

		res.status(200).json(workout);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

// PATCH a workout
const patchWorkout = async (req, res) => {
	try {
		const { id } = req.params;

		if (!mongoose.Types.ObjectId.isValid(id)) {
			return res.status(400).json({ error: "Invalid Workout ID" });
		}

		const workout = await Workout.findOneAndUpdate(
			{ _id: id },
			{
				...req.body,
			}
		);

		if (!workout) {
			return res.status(404).json({ error: "Workout Not Found" });
		}

		res.status(200).json(workout);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

module.exports = {
	deleteWorkout,
	getAllWorkouts,
	getOneWorkout,
	postWorkout,
	patchWorkout,
};
