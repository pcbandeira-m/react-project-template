import { useEffect, useState } from "react";
import "./App.css";
import Botao from "./components/Botao";

function App() {
	const [numero, setNumero] = useState(0); // useState é um hook já que adiciona uma característica a um componente funcional
	const [nome, setNome] = useState<String>("");

	function decrementar(): void {
		setNumero(numero - 1);
	}

	function incrementar(): void {
		setNumero(numero + 1);
	}

	useEffect(() => {
		console.log("Número atualizado para:", numero);
	}, [numero]); // useEffect é um hook que executa uma função toda vez que o componente é renderizado. O segundo parâmetro é um array de dependências, ou seja, a função só será executada quando o valor de numero for atualizado.

	useEffect(() => {
		console.log("Alguma coisa foi alterada");
	});

	return (
		<>
			<div className="d-flex align-items-center">
				<Botao
					label="-"
					action={decrementar}
					className="br-button secondary mr-3 "
				/>
				{/* o componente Botao não recebe label, logo, não tem nada para tratar o label. Assim, é preciso que o componente receba essa propriedade - PROPS -> valores recebidos como parâmetros da função que podem ser acessados*/}

				<span className={numero >= 0 ? "verde" : "vermelho"}>
					{numero}
				</span>

				<Botao
					label="+"
					action={incrementar}
					className="br-button primary ml-3"
				/>
			</div>

			{numero % 2 === 0 ? (
				<p className="par">O número é par</p>
			) : (
				<p className="impar">O número é ímpar</p>
			)}

			<input
				type="text"
				value={nome}
				onChange={(e) => {
					setNome(e.target.value);
				}}
			/>
		</>
	);
}

export default App;
