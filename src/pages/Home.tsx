import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import CharactersService from "../services/CharactersService";

export default function Home() {
	const [personagens, setPersonagens] = useState<any[]>([]);

	function handleData() {
		CharactersService.listarPersonagens()
			.then((res) => {
				const { data } = res;
				console.log(data);
				setPersonagens(data);
			})
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

			{/* renderização da lista de personagens */}
			{personagens.map((personagem) => {
				// return <p>{personagem.name}</p>;
				return (
					<>
						<img
							src={personagem.image}
							style={{ width: "auto", height: "200px" }}
						/>
						<p>{personagem.name}</p>
					</>
				);
			})}
		</>
	);
}
