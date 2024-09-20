<template>
  <div class="bg-gray-900 min-h-screen">
    <div class="container mx-auto p-6 space-y-8">
      <h1 class="text-5xl font-extrabold text-white mb-8">Tableau de Bord</h1>

      <!-- Section des statistiques -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Utilisateurs -->
        <div class="bg-gray-800 p-6 rounded-lg shadow-lg flex items-center space-x-4">
          <i class="fas fa-users text-4xl text-blue-400"></i>
          <div>
            <h2 class="text-xl font-semibold text-blue-300">Utilisateurs</h2>
            <p class="text-4xl font-bold text-white">{{ userCount }}</p>
            <router-link
              to="/users"
              class="text-blue-500 hover:underline mt-2 block text-sm"
            >
              Gérer les utilisateurs
            </router-link>
          </div>
        </div>

        <!-- Concessions -->
        <div class="bg-gray-800 p-6 rounded-lg shadow-lg flex items-center space-x-4">
          <i class="fas fa-building text-4xl text-green-400"></i>
          <div>
            <h2 class="text-xl font-semibold text-green-300">Concessions</h2>
            <p class="text-4xl font-bold text-white">{{ concessionCount }}</p>
            <router-link
              to="/concessions"
              class="text-green-500 hover:underline mt-2 block text-sm"
            >
              Gérer les concessions
            </router-link>
          </div>
        </div>

        <!-- Cartographie -->
        <div class="bg-gray-800 p-6 rounded-lg shadow-lg flex items-center space-x-4">
          <i class="fas fa-map-marked-alt text-4xl text-purple-400"></i>
          <div>
            <h2 class="text-xl font-semibold text-purple-300">Cartographie</h2>
            <p class="text-4xl font-bold text-white">Carte active</p>
            <router-link
              to="/maps"
              class="text-purple-500 hover:underline mt-2 block text-sm"
            >
              Visualiser la carte
            </router-link>
          </div>
        </div>

        <!-- Notifications -->
        <div class="bg-gray-800 p-6 rounded-lg shadow-lg flex items-center space-x-4">
          <i class="fas fa-bell text-4xl text-red-400"></i>
          <div>
            <h2 class="text-xl font-semibold text-red-300">Notifications</h2>
            <p class="text-4xl font-bold text-white">{{ unreadNotificationCount }}</p>
            <router-link
              to="/notifications"
              class="text-red-500 hover:underline mt-2 block text-sm"
            >
              Voir les notifications
            </router-link>
          </div>
        </div>
      </div>

      <!-- Section des dernières notifications -->
      <div class="bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 class="text-2xl font-bold text-white mb-4">Dernières Notifications</h2>
        <ul class="divide-y divide-gray-700">
          <li
            v-for="notification in unreadNotifications.slice(0, 5)"
            :key="notification._id"
            class="flex justify-between py-3"
          >
            <span class="text-gray-300">{{ notification.message }}</span>
            <button
              @click="markAsRead(notification._id)"
              class="text-blue-400 hover:underline text-sm"
            >
              Marquer comme lu
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters("users", ["userCount"]),
    ...mapGetters("concessions", ["concessionCount"]),
    ...mapGetters("notification", [
      "unreadNotifications",
      "unreadNotificationCount",
    ]),
  },
  methods: {
    ...mapActions("notification", ["markAsRead"]),
  },
  created() {
    this.$store.dispatch("notification/fetchNotifications");
    this.$store.dispatch("concessions/fetchConcessions");
    this.$store.dispatch("users/fetchUsers");
  },
};
</script>

<style scoped>
/* Styles spécifiques au Dashboard */
.container {
  max-width: 1200px;
}

.bg-gray-800 {
  background-color: #2d3748;
}

.bg-gray-900 {
  background-color: #1a202c;
}

.text-white {
  color: #fff;
}

.shadow-lg {
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3);
}

.text-blue-400 {
  color: #63b3ed;
}

.text-blue-500 {
  color: #4299e1;
}

.text-green-400 {
  color: #48bb78;
}

.text-purple-400 {
  color: #9f7aea;
}

.text-red-400 {
  color: #fc8181;
}

.divide-gray-700 {
  border-color: #4a5568;
}

.text-gray-300 {
  color: #e2e8f0;
}
</style>
