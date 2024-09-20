import activityService from "../../services/activityService";
import socket from "../../services/socketService"; // Socket.IO

const state = {
  activities: [],
};

const mutations = {
  SET_ACTIVITIES(state, activities) {
    state.activities = activities;
  },
  ADD_ACTIVITY(state, activity) {
    state.activities.unshift(activity);
  },
};

const actions = {
  // Récupérer toutes les activités
  async fetchAllActivities({ commit }) {
    try {
      const response = await activityService.fetchAllActivities();
      commit("SET_ACTIVITIES", response.data);
    } catch (error) {
      console.error("Erreur lors de la récupération des activités :", error);
    }
  },

  // Recevoir de nouvelles activités via Socket.IO
  listenForActivities({ commit }) {
    socket.on("newActivity", (activity) => {
      commit("ADD_ACTIVITY", activity);
    });
  },
};

const getters = {
  recentActivities: (state) => state.activities,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
