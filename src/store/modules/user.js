import {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "../../services/userService";

const state = {
  users: [],
  user: null,
};

const getters = {
  allUsers: (state) => state.users,
  userDetail: (state) => state.user,
};

const actions = {
  async fetchUsers({ commit }) {
    const response = await getUsers();
    commit("setUsers", response);
  },
  async fetchUserById({ commit }, id) {
    const response = await getUserById(id);
    commit("setUser", response);
  },
  async addUser({ commit }, userData) {
    const response = await createUser(userData);
    commit("newUser", response);
  },
  async updateUser({ commit }, { id, userData }) {
    if (!id) {
      throw new Error("ID utilisateur non défini pour la mise à jour");
    }
    const response = await updateUser(id, userData);
    commit("modifyUser", response);
  },
  async deleteUser({ commit }, id) {
    await deleteUser(id);
    commit("removeUser", id);
  },
};

const mutations = {
  setUsers: (state, users) => (state.users = users),
  setUser: (state, user) => (state.user = user),
  newUser: (state, user) => state.users.push(user),
  modifyUser: (state, updatedUser) => {
    const index = state.users.findIndex((user) => user._id === updatedUser._id);
    if (index !== -1) {
      state.users.splice(index, 1, updatedUser);
    }
  },
  removeUser: (state, id) => {
    state.users = state.users.filter((user) => user._id !== id);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
