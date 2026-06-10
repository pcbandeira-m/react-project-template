import { Link } from "react-router-dom";
import axios from "axios";

// Para fins de estudo, será utilizada uma API de Harry Potter chamada HP-API!

function Home() {
	function handleData() {
		axios.get("https://hp-api.onrender.com/api/characters");
	}

	return (
		<>
			<header className="br-header">
				<div className="container-lg d-flex justify-content-center align-items-center">
					<div className="header-top">
						<div className="header-actions">
							<div className="header-links dropdown">
								<div className="br-list">
									<Link
										to="/"
										className="br-button mr-1x"
									>
										Início
									</Link>
									<Link
										to="/about"
										className="br-button"
									>
										Sobre nós
									</Link>
									<Link
										to="/formulario"
										className="br-button"
									>
										Formulário
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>

			<div className="d-flex justify-content-center align-items-center mt-5">
				<button
					className="br-button primary"
					onClick={handleData}
				>
					Um teste
				</button>
			</div>
		</>
	);
}

export default Home;
