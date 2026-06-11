import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import CharactersService from "../services/CharactersService";
import defaultCharacterImg from "../assets/hp-character.jpg";

interface IPersonagem {
	image: string;
	name: string;
}

export default function Home() {
	const [personagens, setPersonagens] = useState<IPersonagem[]>([]);

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
			<header className="br-header mb-5">
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
						<div className="col-sm d-flex justify-content-center">
							<div className="col-sm-6 col-md-4 col-lg-3">
								<div className="br-card d-flex justify-content-center">
									<div className="card-content pb-5">
										<div className="text-weight-semi-bold text-up-02 mb-2">
											{personagem.name}
										</div>
										<img
											src={
												personagem.image
													? personagem.image
													: defaultCharacterImg
											}
											style={{
												width: "auto",
												height: "300px",
											}}
										/>
									</div>
								</div>
							</div>
						</div>
					</>
				);
			})}
		</>
	);
}
