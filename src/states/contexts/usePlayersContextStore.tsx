import { createContext } from "react";

// implementação de dois agentes principais: contexto e provedor

interface PlayersContextProps {
	teamA: number;
	teamB: number;

	increaseTeamAScore: () => void;
	decreaseTeamAScore: () => void;

	increaseTeamBScore: () => void;
	decreaseTeamBScore: () => void;
}

const PlayersContext = createContext<PlayersContextProps>(
	{} as PlayersContextProps,
);

// função que retornará apenas o valor dos times
// conterá as funções de incremento e de decremento
const PlayersScore = () => {
	const [teamA, setTeamA] = useState(0);
	const [teamB, setTeamB] = useState(0);

	return {
		teamA,
		teamB,

		increaseTeamAScore: () => setTeamA((v) => v + 1),
		decreaseTeamAScore: () => setTeamA((v) => v - 1),

		increaseTeamBScore: () => setTeamA((v) => v + 1),
		decreaseTeamBScore: () => setTeamA((v) => v - 1),
	};
};

const PlayersProvider = ({ children }: any) => {
	// retornar o componente provider e renderizar o children que foi passado como seu parâmetro
	return (
		<PlayersContext.Provider value={PlayersScore()}>
			{children}
		</PlayersContext.Provider>
	);
};
