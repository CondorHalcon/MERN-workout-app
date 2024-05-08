const express = require("express");
const {
	deleteWorkout,
	getAllWorkouts,
	getOneWorkout,
	patchWorkout,
	postWorkout,
} = require("../controllers/workoutController");

const router = express.Router();

router.get("/", getAllWorkouts);
router.get("/:id", getOneWorkout);
router.post("/", postWorkout);
router.delete("/:id", deleteWorkout);
router.patch("/:id", patchWorkout);

module.exports = router;
