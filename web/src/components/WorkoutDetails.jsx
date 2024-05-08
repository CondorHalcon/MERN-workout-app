const WorkoutDetails = ({ workout }) => {
	return (
		<div className="card m-2 shadow">
			<div className="card-body">
				<h4 className="card-title text-primary">{workout.title}</h4>
				<p className="card-text">
					<strong>Load (kg): </strong>
					{workout.load}
				</p>
				<p className="card-text">
					<strong>Reps: </strong>
					{workout.reps}
				</p>
				<p className="card-text text-secondary">{workout.updatedAt}</p>
			</div>
		</div>
	);
};

export default WorkoutDetails;
