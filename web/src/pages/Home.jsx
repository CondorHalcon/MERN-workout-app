import { useEffect, useState } from "react";

// components
import WorkoutDetails from "../components/WorkoutDetails";

const Home = () => {
	const [workouts, setWorkouts] = useState(null);
	useEffect(() => {
		const fetchWorkouts = async () => {
			const response = await fetch("/api/workouts");
			const json = await response.json();

			if (response.ok) {
				setWorkouts(json);
			}
		};
		fetchWorkouts();
	}, []);

	return (
		<main className="home container">
			<div className="workouts">
				{workouts &&
					workouts.map((workout) => (
						<WorkoutDetails key={workouts._id} workout={workout} />
					))}
			</div>
		</main>
	);
};

export default Home;
