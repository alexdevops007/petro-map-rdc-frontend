import {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} from "../../services/userService";

export default {
  namespaced: true,
  state: {
    users: [],
    error: null,
  },
  mutations: {
    SET_USERS(state, users) {
      state.users = users;
    },
    SET_ERROR(state, error) {
      state.error = error;
    },
  },
  actions: {
    async fetchUsers({ commit }) {
      try {
        const users = await getUsers();
        commit("SET_USERS", users);
      } catch (error) {
        commit("SET_ERROR", error.message);
      }
    },
    async createUser({ dispatch }, userData) {
      try {
        await createUser(userData); // Appel à l'API pour créer l'utilisateur (POST)
        dispatch("fetchUsers");
      } catch (error) {
        console.error("Erreur lors de la création de l'utilisateur:", error);
      }
    },
    async updateUser({ dispatch }, userData) {
      try {
        await updateUser(userData._id, userData); // Appel à l'API pour mettre à jour l'utilisateur (PUT)
        dispatch("fetchUsers");
      } catch (error) {
        console.error("Erreur lors de la mise à jour de l'utilisateur:", error);
      }
    },
    async deleteUser({ dispatch }, id) {
      try {
        await deleteUser(id);
        dispatch("fetchUsers");
      } catch (error) {
        console.error("Erreur lors de la suppression de l'utilisateur:", error);
      }
    },
  },
};
