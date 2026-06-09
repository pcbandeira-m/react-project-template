import { useState } from "react";

function Formulario() {
	// declarando um estado para cada campo
	const [titulo, setTitulo] = useState<String>("");
	const [descricao, setDescricao] = useState<String>("");

	function handleSubmit(e) {
		e.preventDefault(); // impede o comportamento padrão de recarregamento da página

		const data = {
			titulo,
			descricao,
		};
		console.log(data);
	}

	return (
		<>
			<div className="container">
				<div className="row d-flex justify-content-center">
					<div className="col-6">
						<form onSubmit={handleSubmit}>
							<div className="br-input">
								<label htmlFor="titulo">Título</label>
								<input
									id="titulo"
									type="text"
									placeholder="Insira o título da tarefa"
									value={titulo}
									onChange={(e) => {
										setTitulo(e.target.value);
									}}
								/>
							</div>

							<div className="br-input">
								<label htmlFor="descricao">Descrição</label>
								<input
									id="descricao"
									type="text"
									placeholder="Insira a descrição da tarefa"
									value={descricao}
									onChange={(e) => {
										setDescricao(e.target.value);
									}}
								/>
							</div>
							<button className="br-button primary">
								Enviar
							</button>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}

export default Formulario;
