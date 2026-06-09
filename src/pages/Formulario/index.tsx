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
	const { handleSubmit, register } = useForm();
	// register é usado para registrar os campos do formulário e precisa ser inserido em seus inputs
	// handleSubmit é usado para lidar com o envio do formulário

	// função para manipular o formulário antes da submissão para sabermos se o valor será pego e enviado para uma API, se vai ser enviado para uma tela etc.
	function dataHandler(data) {
		console.log(data);
	}

	function resetForm() {
		// aqui podemos usar a função reset do react-hook-form para limpar os campos do formulário
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
									{...register("name", {
										required: "True",
										maxLength: 20,
									})}
								/>
							</div>
							<div className="br-input mt-3">
								<label htmlFor="email">Email</label>
								<input
									id="email"
									type="text"
									placeholder="Digite seu email"
									{...register("email", {
										required: "True",
										pattern: /^\S+@\S+$/i,
									})}
								/>
							</div>
							<div className="br-input mt-3">
								<label htmlFor="phone">Telefone</label>
								<input
									id="phone"
									type="text"
									placeholder="Digite seu telefone"
									{...register("phone", {
										required: "True",
										pattern:
											/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/i,
									})}
								/>
							</div>
							<div className="br-input mt-3">
								<label htmlFor="age">Qual sua idade?</label>
								<input
									id="age"
									type="number"
									placeholder="Digite sua idade"
									{...register("age", {
										required: "True",
										min: 0,
										max: 120,
									})}
								/>
							</div>
							<button
								className="br-button secondary mt-4"
								type="reset"
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
