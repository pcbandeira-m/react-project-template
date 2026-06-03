function Botao(props) {
	const { label, action, className } = props;
	return (
		<button
			onClick={action}
			className={className} // className foi passada como props para que seja possível construção de estilo diferentes para cada instância do componente Botao.
		>
			{label}
		</button>
	);
}

export default Botao;
