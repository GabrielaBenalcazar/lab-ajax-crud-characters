class APIHandler {
    constructor(baseURL) {
        this.axiosApp = axios.create({ baseURL });
    }

    getFullList() {
        return this.axiosApp.get("/characters");
    }

    getOneRegister(characterId) {
        return this.axiosApp.get(`/characters/${characterId}`);
    }

    createOneRegister() {
        return this.axiosApp.get("/characters");
    }

    updateOneRegister(characterId, data) {
        return this.axiosApp.put(`/characters/${characterId}`, data);
    }

    deleteOneRegister(characterId) {
        return this.axiosApp.delete(`/characters/${characterId}`);
    }
}
