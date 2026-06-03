import { useState } from "react";
import "./App.css";
import Botao from "./components/Botao";

function App() {
	const [numero, setNumero] = useState(0);

	function decrementar(): void {
		setNumero(numero - 1);
	}

	function incrementar(): void {
		setNumero(numero + 1);
	}

	return (
		<>
			<div className="d-flex align-items-center">
				<Botao
					label="Subtrair"
					action={decrementar}
					className="br-button secondary mr-3 "
				/>
				{/* o componente Botao não recebe label, logo, não tem nada para tratar o label. Assim, é preciso que o componente receba essa propriedade - PROPS -> valores recebidos como parâmetros da função que podem ser acessados*/}

				<span className="numero mb-0">{numero}</span>

				<Botao
					label="Somar"
					action={incrementar}
					className="br-button primary ml-3"
				/>
			</div>
		</>
	);
}

export default App;
