<template>
  <div class="container mx-auto p-6">
    <h1 class="text-3xl font-bold mb-6">Tableau de Bord</h1>

    <!-- Section des statistiques -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-xl font-bold">Utilisateurs</h2>
        <p class="text-4xl">{{ userCount }}</p>
        <router-link
          to="/users"
          class="text-blue-600 hover:underline mt-2 block"
        >
          Gérer les utilisateurs
        </router-link>
      </div>

      <div class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-xl font-bold">Concessions</h2>
        <p class="text-4xl">{{ concessionCount }}</p>
        <router-link
          to="/concessions"
          class="text-blue-600 hover:underline mt-2 block"
        >
          Gérer les concessions
        </router-link>
      </div>

      <div class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-xl font-bold">Cartographie</h2>
        <p class="text-4xl">Carte active</p>
        <router-link
          to="/maps"
          class="text-blue-600 hover:underline mt-2 block"
        >
          Visualiser la carte
        </router-link>
      </div>

      <div class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-xl font-bold">Notifications</h2>
        <p class="text-4xl">{{ unreadNotificationCount }}</p>
        <router-link
          to="/notifications"
          class="text-blue-600 hover:underline mt-2 block"
        >
          Voir les notifications
        </router-link>
      </div>
    </div>

    <!-- Section des dernières notifications -->
    <div class="bg-white p-6 rounded-lg shadow-md">
      <h2 class="text-2xl font-bold mb-4">Dernières Notifications</h2>
      <ul>
        <li
          v-for="notification in unreadNotifications.slice(0, 5)"
          :key="notification._id"
          class="flex justify-between mb-4"
        >
          <span>{{ notification.message }}</span>
          <button
            @click="markAsRead(notification._id)"
            class="text-blue-600 hover:underline"
          >
            Marquer comme lu
          </button>
        </li>
      </ul>
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
    // Charger les notifications dès que le tableau de bord est monté
    this.$store.dispatch("notification/fetchNotifications");
  },
};
</script>

<style scoped>
/* Styles spécifiques au Dashboard */
.container {
  max-width: 1200px;
}

.bg-white {
  background-color: white;
}

.shadow-md {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

p {
  color: #333;
}
</style>
