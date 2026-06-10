import "./style.css";
import { Link } from "react-router-dom"; // Link é como uma âncora, um componente do react-router-dom que permite criar links de navegação entre as páginas da aplicação. Ele é usado para substituir as tags <a> tradicionais do HTML, proporcionando uma navegação mais fluida e sem recarregamento da página.

function Home() {
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
				<h2>Início</h2>
				<div className="d-flex justify-content-center align-items-center">
					<p>
						Texto gerado no Lero Lero: No entanto, não podemos
						esquecer que o julgamento imparcial das eventualidades
						prepara-nos para enfrentar situações atípicas
						decorrentes do sistema de formação de quadros que
						corresponde às necessidades. Evidentemente, a constante
						divulgação das informações promove a alavancagem das
						direções preferenciais no sentido do progresso. O que
						temos que ter sempre em mente é que a adoção de
						políticas descentralizadoras garante a contribuição de
						um grupo importante na determinação dos relacionamentos
						verticais entre as hierarquias.
					</p>
				</div>
			</div>
		</>
	);
}

export default Home;
