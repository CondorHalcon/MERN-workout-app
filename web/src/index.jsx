import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";

// components
import { WorkoutContextProvider } from "./context/WorkoutContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<WorkoutContextProvider>
			<App />
		</WorkoutContextProvider>
	</React.StrictMode>
);
