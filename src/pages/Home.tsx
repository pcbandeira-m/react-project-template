import { Link } from "react-router-dom";
// import axios from "axios"; (removido após a criação do axiosInstance)
import { useEffect } from "react";
// import axiosInstance from "../services/axiosInstance"; (removido após a utilização do CharactersService)
import CharactersService from "../services/CharactersService";

// Para fins de estudo, será utilizada uma API de Harry Potter chamada HP-API!

function Home() {
	function handleData() {
		// axiosInstance.get("characters").then((res) => {
		// 	// parâmetro da arrow function é o res, que é a resposta da requisição.
		// 	const { data } = res;
		// 	console.log(data);
		// });
		CharactersService.listarPersonagens()
			.then((res) => {
				const { data } = res;
				console.log(data);
			}) // a função realiza algo e, se algo der errado, entra no catch
			.catch((err) => {
				console.error(err);
			});
	}

	// executar assim que a página carregar -> colchetes vazios
	useEffect(() => {
		handleData();
	}, []);

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
