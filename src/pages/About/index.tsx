import { Link } from "react-router-dom";

function About() {
	return (
		<div className="container">
			<h2>Sobre nós</h2>
			<div className="row">
				<div className="col-6">
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit. Perferendis nobis sapiente nulla obcaecati
						adipisci est temporibus ullam sunt blanditiis totam
						praesentium fuga dolor quasi incidunt aperiam architecto
						veniam, reiciendis perspiciatis.
					</p>
				</div>
			</div>
			<Link
				to="/"
				className="br-button secondary"
			>
				Início
			</Link>
		</div>
	);
}

export default About;
