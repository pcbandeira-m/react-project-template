import { useForm } from "react-hook-form";

function Formulario() {
	const { handleSubmit, register } = useForm();
	// register é usado para registrar os campos do formulário e precisa ser inserido em seus inputs
	// handleSubmit é usado para lidar com o envio do formulário

	// função para manipular o formulário antes da submissão para sabermos se o valor será pego e enviado para uma API, se vai ser enviado para uma tela etc.
	function dataHandler(data) {
		console.log(data);
	}

	return (
		<>
			<div className="container">
				<div className="row d-flex justify-content-center">
					<div className="col-6">
						<form onSubmit={handleSubmit(dataHandler)}>
							{/* handleSubmit irá cuidar da submissão em si e dataHandler irá resolver o que fazer com os dados */}
							<div className="br-input">
								<label htmlFor="titulo">Título</label>
								<input
									id="titulo"
									type="text"
									placeholder="Insira o título da tarefa"
									{...register("titulo")}
								/>
							</div>
							<div className="br-input">
								<label htmlFor="descricao">Descrição</label>
								<input
									id="descricao"
									type="text"
									placeholder="Insira a descrição da tarefa"
									{...register("descricao")}
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
