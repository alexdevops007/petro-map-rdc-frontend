<template>
  <nav class="bg-gray-900 p-4 shadow-lg">
    <div class="container mx-auto flex justify-between items-center">
      <!-- Logo -->
      <div class="text-white text-2xl font-bold flex items-center">
        <i class="fa-solid fa-map mr-2"></i> PetroMap RDC
      </div>

      <!-- Mobile Menu Toggle -->
      <div class="md:hidden">
        <button @click="toggleMenu" class="text-white focus:outline-none">
          <i class="fas fa-bars text-2xl"></i>
        </button>
      </div>

      <!-- Menu Desktop -->
      <ul class="hidden md:flex space-x-6 text-sm">
        <li>
          <router-link
            to="/dashboard"
            class="text-white hover:text-gray-400 transition-colors"
          >
            <i class="fa-solid fa-gauge"></i> Tableau de Bord
          </router-link>
        </li>
        <li>
          <router-link
            to="/users"
            class="text-white hover:text-gray-400 transition-colors"
          >
            <i class="fa-solid fa-user"></i> Gestion des utilisateurs
          </router-link>
        </li>
        <li>
          <router-link
            to="/maps"
            class="text-white hover:text-gray-400 transition-colors"
          >
            <i class="fa-solid fa-map"></i> Cartographie
          </router-link>
        </li>
        <li>
          <router-link
            to="/concessions"
            class="text-white hover:text-gray-400 transition-colors"
          >
            <i class="fa-solid fa-building"></i> Concessions
          </router-link>
        </li>
        <li>
          <router-link
            to="/notifications"
            class="text-white hover:text-gray-400 transition-colors"
          >
            <i class="fas fa-bell mr-2"></i> Notifications
            <span
              v-if="unreadNotifications.length"
              class="bg-yellow-400 text-gray-800 ml-2 px-2 rounded-full text-sm"
            >
              {{ unreadNotifications.length }}
            </span>
          </router-link>
        </li>
      </ul>

      <!-- Utilisateur connecté et bouton déconnexion -->
      <div class="hidden md:flex items-center space-x-4 text-sm" v-if="user">
        <span class="text-white">
          Connecté en tant que
          <strong>{{ user.firstName }} {{ user.lastName }}</strong>
        </span>
        <button
          @click="handleLogout"
          class="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded transition-all"
        >
          <i class="fa-solid fa-right-from-bracket"></i>
          Déconnexion
        </button>
      </div>
    </div>

    <!-- Menu Mobile -->
    <ul
      v-if="menuOpen"
      class="mt-4 md:hidden bg-gray-800 p-4 rounded-lg space-y-2"
    >
      <li>
        <router-link
          to="/dashboard"
          class="block text-white hover:text-gray-400 transition-colors"
        >
          <i class="fa-solid fa-gauge"></i> Tableau de Bord
        </router-link>
      </li>
      <li>
        <router-link
          to="/users"
          class="block text-white hover:text-gray-400 transition-colors"
        >
          <i class="fa-solid fa-user"></i> Gestion des utilisateurs
        </router-link>
      </li>
      <li>
        <router-link
          to="/maps"
          class="block text-white hover:text-gray-400 transition-colors"
        >
          <i class="fa-solid fa-map"></i> Cartographie
        </router-link>
      </li>
      <li>
        <router-link
          to="/concessions"
          class="block text-white hover:text-gray-400 transition-colors"
        >
          <i class="fa-solid fa-building"></i> Concessions
        </router-link>
      </li>
      <li v-if="user" class="border-t border-gray-700 pt-2 text-sm">
        <span class="text-white block">
          Connecté en tant que
          <strong>{{ user.firstName }} {{ user.lastName }}</strong>
        </span>
        <button
          @click="handleLogout"
          class="w-full mt-2 bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded transition-all"
        >
          <i class="fa-solid fa-right-from-bracket"></i>
          Déconnexion
        </button>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      menuOpen: false, // Etat pour ouvrir/fermer le menu mobile
    };
  },
  computed: {
    ...mapState("auth", ["user"]), // Récupère l'utilisateur connecté depuis Vuex
    ...mapGetters("notification", ["unreadNotifications"]),
  },
  methods: {
    ...mapActions("auth", ["logout"]), // Action pour gérer la déconnexion
    async handleLogout() {
      await this.logout(); // Exécute la déconnexion
      this.$router.push("/login"); // Redirige vers la page de login après déconnexion
    },
    toggleMenu() {
      this.menuOpen = !this.menuOpen; // Ouvre ou ferme le menu burger
    },
  },
};
</script>

<style scoped>
/* Ajoutez des styles supplémentaires pour améliorer l'apparence sur mobile et tablette */
#navbar {
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
