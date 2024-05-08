// hooks
import { useEffect } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

// components
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";

const Home = () => {
	const { workouts, dispatch } = useWorkoutsContext();
	useEffect(() => {
		const fetchWorkouts = async () => {
			const response = await fetch("/api/workouts");
			const json = await response.json();

			if (response.ok) {
				dispatch({ type: "SET_WORKOUTS", payload: json });
			}
		};
		fetchWorkouts();
	}, []);

	return (
		<main className="home container">
			<div className="row">
				<div className="col-8">
					{workouts &&
						workouts.map((workout) => (
							<WorkoutDetails
								key={workouts._id}
								workout={workout}
							/>
						))}
				</div>
				<div className="col">
					<WorkoutForm />
				</div>
			</div>
		</main>
	);
};

export default Home;
