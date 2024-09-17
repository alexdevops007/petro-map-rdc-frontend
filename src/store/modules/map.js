import {
  getConcessionsForMap,
  getConcessionDetails,
} from "../../services/mapService";

export default {
  namespaced: true,
  state: {
    concessions: [],
    concessionDetails: null,
    error: null,
  },
  mutations: {
    SET_CONCESSIONS(state, concessions) {
      state.concessions = concessions;
    },
    SET_CONCESSION_DETAILS(state, details) {
      state.concessionDetails = details;
    },
    SET_ERROR(state, error) {
      state.error = error;
    },
  },
  actions: {
    async fetchConcessionsForMap({ commit }) {
      try {
        const concessions = await getConcessionsForMap();
        commit("SET_CONCESSIONS", concessions);
      } catch (error) {
        commit("SET_ERROR", error.message);
      }
    },
    async fetchConcessionDetails({ commit }, id) {
      try {
        const details = await getConcessionDetails(id);
        commit("SET_CONCESSION_DETAILS", details);
      } catch (error) {
        commit("SET_ERROR", error.message);
      }
    },
  },
  getters: {
    getConcessions(state) {
      return state.concessions;
    },
    getConcessionDetails(state) {
      return state.concessionDetails;
    },
  },
};
