import { login, logout } from "../../services/authService";

export default {
  namespaced: true,
  state: {
    user: JSON.parse(localStorage.getItem("user")) || null,
    token: localStorage.getItem("token") || null,
    error: null,
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
      localStorage.setItem("user", JSON.stringify(user));
    },
    SET_TOKEN(state, token) {
      state.token = token;
      localStorage.setItem("token", token);
    },
    SET_ERROR(state, error) {
      state.error = error;
    },
    LOGOUT(state) {
      state.user = null;
      state.token = null;
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    },
  },
  actions: {
    async login({ commit }, { email, password }) {
      try {
        const { user, token } = await login(email, password);
        commit("SET_USER", user);
        commit("SET_TOKEN", token);
        commit("SET_ERROR", null);
      } catch (error) {
        commit("SET_ERROR", error.message);
      }
    },
    async logout({ commit }) {
      try {
        await logout();
        commit("LOGOUT");
      } catch (error) {
        commit("SET_ERROR", error.message);
      }
    },
  },
};
