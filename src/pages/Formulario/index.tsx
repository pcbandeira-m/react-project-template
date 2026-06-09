import { useForm } from "react-hook-form";

/*
Exercício Prático:
Crie um componente de formulário usando o React Hook Form que tenha os campos nome (string), email (string), telefone (string) e idade (number);

As seguintes funcionalidades devem ser implementadas:
- Limpar todos os campos
- Submissão de formulário: ao submeter o formulário, é necessário verificar se os campos foram preenchidos. 
	- Se algum campo estiver vazio, um aviso sobre o preenchimento de todos os campos deve ser exibido no console.
	- Se todos os campos estiverem preenchidos, uma mensagem de sucesso deve ser exibida no console.
*/

function Formulario() {
	const { handleSubmit, register, reset, getValues } = useForm();
	// register é usado para registrar os campos do formulário e precisa ser inserido em seus inputs
	// handleSubmit é usado para lidar com o envio do formulário

	// função para manipular o formulário antes da submissão para sabermos se o valor será pego e enviado para uma API, se vai ser enviado para uma tela etc.
	function dataHandler() {
		const { name, email, phone, age } = getValues();

		if (name != "" && email !== "" && phone !== "" && age !== "") {
			console.log("Formulário enviado com sucesso!");
		} else {
			console.log("Por favor, preencha todos os campos.");
		}
	}

	function resetValues() {
		reset();
	}

	return (
		<>
			<div className="container mt-5">
				<div className="row d-flex justify-content-center">
					<div className="col-6">
						<form onSubmit={handleSubmit(dataHandler)}>
							{/* handleSubmit irá cuidar da submissão em si e dataHandler irá resolver o que fazer com os dados */}
							<div className="br-input">
								<label htmlFor="name">Nome</label>
								<input
									id="name"
									type="text"
									placeholder="Digite seu nome"
									{...register("name")}
								/>
							</div>
							<div className="br-input mt-3">
								<label htmlFor="email">Email</label>
								<input
									id="email"
									type="text"
									placeholder="Digite seu email"
									{...register("email")}
								/>
							</div>
							<div className="br-input mt-3">
								<label htmlFor="phone">Telefone</label>
								<input
									id="phone"
									type="text"
									placeholder="Digite seu telefone"
									{...register("phone")}
								/>
							</div>
							<div className="br-input mt-3">
								<label htmlFor="age">Qual sua idade?</label>
								<input
									id="age"
									type="number"
									placeholder="Digite sua idade"
									{...register("age")}
								/>
							</div>
							<button
								className="br-button secondary mt-4"
								type="button"
								onClick={resetValues}
							>
								Limpar
							</button>
							<button
								className="br-button primary mt-4 ml-2"
								type="submit"
							>
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
