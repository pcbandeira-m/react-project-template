import { Link } from "react-router-dom";

function About() {
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

			<div className="container">
				<h2>Sobre nós</h2>
				<div className="row">
					<div className="col-6">
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing
							elit. Perferendis nobis sapiente nulla obcaecati
							adipisci est temporibus ullam sunt blanditiis totam
							praesentium fuga dolor quasi incidunt aperiam
							architecto veniam, reiciendis perspiciatis.
						</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default About;
