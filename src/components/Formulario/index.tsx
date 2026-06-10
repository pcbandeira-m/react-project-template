import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";

/*
Exercício Prático: Utilize o Yup para realizar a validação do formulário criado no exercício da aula anterior. Crie um esquema de validação dos campos com as regras:
- nome(string): Campo obrigatório de tamanho mínimo de 3 caracteres.
- email(string): Campo obrigatório de tamanho máximo de 30 caracteres.
- telefone(string): Campo opcional de tamanho máximo de 11 caracteres.
- idade(number): Campo obrigatório de valores positivos.

Ao submeter o formulário, se um campo apresentar erro, a respectiva mensagem deve ser exibida próxima a ele.
*/

// Declaração do schema para validação dos dados do formulário
const schema = yup.object().shape({
	name: yup
		.string()
		.required("Nome é obrigatório")
		.min(3, "Nome deve ter pelo menos 3 caracteres"),
	email: yup
		.string()
		.email("Email inválido")
		.required("Email é obrigatório")
		.max(30, "Email deve ter no máximo 30 caracteres"),
	phone: yup
		.string()
		.test(
			"type",
			"O telefone deve ser composto apenas de números.",
			(value) => !value || /^\d+$/.test(value),
		)
		.test(
			"len",
			"O telefone deve ter exatamente 11 caracteres.",
			(value) => !value || value.length === 11,
		),
	age: yup
		.number()
		.transform((value) => (Number.isNaN(value) ? null : value))
		.positive("A idade deve ser um número positivo")
		.integer("A idade deve ser um número inteiro")
		.required("Idade é obrigatória"),
});

function Formulario(): JSX.Element {
	const {
		handleSubmit,
		register,
		reset,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema), // Quando o rhf encontra um erro através do resolver, ele nos devolve um objeto (errors) contendo os erros.
	});

	function dataHandler(data): void {
		console.log("Dados do formulário: ", data);
	}

	function resetValues() {
		reset();
	}

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

			<div className="container mt-5">
				<div className="row d-flex justify-content-center">
					<div className="col-6">
						<form
							// handleSubmit irá cuidar da submissão em si e dataHandler irá resolver o que fazer com os dados
							onSubmit={handleSubmit(dataHandler)}
							className="rounder-sm shadow-sm my-5 p-5"
						>
							<h3>Formulário de Contato</h3>

							<div
								className={`br-input mt-3 ${errors.name !== undefined ? "danger" : ""}`} // Código condicional para adicionar a classe "danger" ao input quando houver um erro
							>
								<label htmlFor="name">Nome</label>
								<input
									id="name"
									type="text"
									placeholder="Digite seu nome"
									{...register("name")}
								/>
								{/* Código condicional para a mensagem de erro */}
								{errors.name !== undefined && (
									<span
										className="feedback danger"
										role="alert"
										id="danger"
									>
										<i
											className="fas fa-times-circle"
											aria-hidden="true"
										></i>

										{errors.name?.message}
									</span>
								)}
							</div>
							<div
								className={`br-input mt-3 ${errors.email !== undefined ? "danger" : ""}`}
							>
								<label htmlFor="email">Email</label>
								<input
									id="email"
									type="text"
									placeholder="Digite seu email"
									{...register("email")}
								/>
								{/* Código condicional para a mensagem de erro */}
								{errors.email !== undefined && (
									<span
										className="feedback danger"
										role="alert"
										id="danger"
									>
										<i
											className="fas fa-times-circle"
											aria-hidden="true"
										></i>

										{errors.email?.message}
									</span>
								)}
							</div>
							<div
								className={`br-input mt-3 ${errors.phone !== undefined ? "danger" : ""}`}
							>
								<label htmlFor="phone">Telefone</label>
								<input
									id="phone"
									type="text"
									placeholder="Digite seu telefone"
									{...register("phone")}
								/>
								{/* Código condicional para a mensagem de erro */}
								{errors.phone !== undefined && (
									<span
										className="feedback danger"
										role="alert"
										id="danger"
									>
										<i
											className="fas fa-times-circle"
											aria-hidden="true"
										></i>

										{errors.phone?.message}
									</span>
								)}
							</div>
							<div
								className={`br-input mt-3 ${errors.age !== undefined ? "danger" : ""}`}
							>
								<label htmlFor="age">Qual sua idade?</label>
								<input
									id="age"
									type="number"
									placeholder="Digite sua idade"
									{...register("age")}
								/>
								{/* Código condicional para a mensagem de erro */}
								{errors.age !== undefined && (
									<span
										className="feedback danger"
										role="alert"
										id="danger"
									>
										<i
											className="fas fa-times-circle"
											aria-hidden="true"
										></i>

										{errors.age?.message}
									</span>
								)}
							</div>
							<div className="d-flex justify-content-center">
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
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}

export default Formulario;
