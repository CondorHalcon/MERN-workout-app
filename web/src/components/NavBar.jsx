import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<header className="mb-3">
			<nav className="navbar bg-primary">
				<div className="container container-fluid">
					<Link to="/" className="navbar-brand">
						<h3 className="text-light">Workout Buddy</h3>
					</Link>
				</div>
			</nav>
		</header>
	);
};

export default NavBar;
