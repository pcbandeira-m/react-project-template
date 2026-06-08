import "./style.css";
import { Link } from "react-router-dom"; // Link é como uma âncora, um componente do react-router-dom que permite criar links de navegação entre as páginas da aplicação. Ele é usado para substituir as tags <a> tradicionais do HTML, proporcionando uma navegação mais fluida e sem recarregamento da página.

function Home() {
	return (
		<>
			<div className="container">
				<div className="d-flex h-100 justify-content-center align-items-center mt-6">
					<Link
						to="/about"
						className="br-button primary"
					>
						Sobre nós
					</Link>
				</div>
			</div>
		</>
	);
}

export default Home;
