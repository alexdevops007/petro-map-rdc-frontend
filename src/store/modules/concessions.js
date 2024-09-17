import {
  getConcessions,
  createConcession,
  updateConcession,
  deleteConcession,
} from "../../services/concessionService";

export default {
  namespaced: true,
  state: {
    concessions: [],
    error: null,
  },
  mutations: {
    SET_CONCESSIONS(state, concessions) {
      state.concessions = concessions;
    },
    SET_ERROR(state, error) {
      state.error = error;
    },
  },
  actions: {
    async fetchConcessions({ commit }) {
      try {
        const concessions = await getConcessions();
        commit("SET_CONCESSIONS", concessions);
      } catch (error) {
        commit("SET_ERROR", error.message);
      }
    },
    async addConcession({ dispatch }, concessionData) {
      try {
        await createConcession(concessionData);
        dispatch("fetchConcessions");
      } catch (error) {
        throw new Error("Erreur lors de l'ajout de la concession");
      }
    },
    async updateConcession({ dispatch }, { id, concessionData }) {
      try {
        await updateConcession(id, concessionData);
        dispatch("fetchConcessions");
      } catch (error) {
        throw new Error("Erreur lors de la mise à jour de la concession");
      }
    },
    async deleteConcession({ dispatch }, id) {
      try {
        await deleteConcession(id);
        dispatch("fetchConcessions");
      } catch (error) {
        throw new Error("Erreur lors de la suppression de la concession");
      }
    },
  },
  getters: {
    getConcessionById: (state) => (id) => {
      return state.concessions.find((concession) => concession._id === id);
    },
  },
};
