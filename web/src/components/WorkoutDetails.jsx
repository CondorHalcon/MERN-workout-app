import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

const WorkoutDetails = ({ workout }) => {
	const { dispatch } = useWorkoutsContext();

	const handleClick = async () => {
		const response = await fetch("/api/workouts/" + workout._id, {
			method: "DELETE",
		});
		const json = await response.json();

		if (response.ok) {
			dispatch({ type: "DELETE_WORKOUT", payload: json });
		}
	};

	return (
		<div className="card m-2 shadow">
			<div className="card-body row">
				<h4
					key={0}
					className="card-title text-primary d-inline-flex justify-content-between"
				>
					{workout.title}
					<span className="btn btn-sm text-danger">
						<span
							className="material-symbols-outlined"
							onClick={handleClick}
						>
							delete
						</span>
					</span>
				</h4>

				<p key={1} className="card-text">
					<strong>Load (kg): </strong>
					{workout.load}
				</p>
				<p key={2} className="card-text">
					<strong>Reps: </strong>
					{workout.reps}
				</p>
				<p key={3} className="card-text text-secondary">
					{formatDistanceToNow(new Date(workout.updatedAt), {
						addSuffix: true,
					})}
				</p>
			</div>
		</div>
	);
};

export default WorkoutDetails;
