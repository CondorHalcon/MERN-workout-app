const express = require("express");

const router = express.Router();

// NOTE: Get all workouts
router.get("/", (req, res) => {
	res.json({ msg: "GET all workouts" });
});

// NOTE: GET a single workout
router.get("/:id", (req, res) => {
	res.json({ msg: "GET all workouts" });
});

// NOTE: POST a new workout
router.post("/", (req, res) => {
	res.json({ msg: "POST a new workout" });
});
// NOTE: DELETE a workout
router.delete("/:id", (req, res) => {
	res.json({ msg: "DELETE a new workout" });
});
// NOTE: PATCH a workout
router.patch("/:id", (req, res) => {
	res.json({ msg: "PATCH a workout" });
});

module.exports = router;
