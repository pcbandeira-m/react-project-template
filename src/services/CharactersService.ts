import axiosInstance from "./axiosInstance";

class CharactersService {
    async listarPersonagens() {
        const response = await axiosInstance.get("characters"); 
        // a requisição get não é instantânea, depende da resposta do servidor, da API
        // await -> informa pro JS esperar a requisição ficar pronta para poder continuar o conteúdo do código abaixo
        return response;
    }
}

export default new CharactersService();