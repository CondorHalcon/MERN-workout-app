import { useState } from "react";

const WorkoutForm = () => {
	const [title, setTitle] = useState("");
	const [load, setLoad] = useState("");
	const [reps, setReps] = useState("");
	const [error, setError] = useState(null);

	const handleSubmit = async (e) => {
		e.preventDefault();

		const workout = { title, load, reps };

		const response = await fetch("/api/workouts", {
			method: "POST",
			body: JSON.stringify(workout),
			headers: {
				"Content-Type": "application/json",
			},
		});

		const json = await response.json();

		if (!response.ok) {
			setError(json.error);
		} else {
			setTitle("");
			setLoad("");
			setReps("");
			setError(null);
			console.log("new workout added", json);
		}
	};

	return (
		<form className="card shadow m-2" onSubmit={handleSubmit}>
			<div className="card-body">
				<h4 className="card-title text-primary mb-3">
					Add New Workout
				</h4>
				<div className="input-group mb-3">
					<span
						className="input-group-text bg-light"
						id="workout-form-title"
					>
						Workout
					</span>
					<input
						type="text"
						className="form-control"
						id="workout-form-"
						placeholder="Situps"
						onChange={(e) => setTitle(e.target.value)}
						value={title}
					/>
				</div>
				<div className="input-group mb-3">
					<span className="input-group-text bg-light">Load (kg)</span>
					<input
						type="number"
						className="form-control"
						placeholder="0"
						onChange={(e) => setLoad(e.target.value)}
						value={load}
					/>
				</div>
				<div className="input-group mb-3">
					<span className="input-group-text bg-light">Reps</span>
					<input
						type="number"
						className="form-control"
						placeholder="10"
						onChange={(e) => setReps(e.target.value)}
						value={reps}
					/>
				</div>
				<button className="btn btn-primary text-light mb-3">
					Add Workout
				</button>
				{error && (
					<div className="card bg-light border-danger">
						<div className="card-body">{error}</div>
					</div>
				)}
			</div>
		</form>
	);
};

export default WorkoutForm;
