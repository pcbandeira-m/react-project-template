interface BotaoProps {
	action: () => void;
	label: string;
	className: string;
}

export default function Botao(props: BotaoProps) {
	const { label, action, className } = props;

	return (
		<button
			onClick={action}
			className={className}
		>
			{label}
		</button>
	);
}
