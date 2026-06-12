import { IBotaoProps } from "./IBotaoProps";

/** Componente de botão */

export default function Botao({ action, label, className }: IBotaoProps) {
	return (
		<button
			onClick={action}
			className={className}
		>
			{label}
		</button>
	);
}
