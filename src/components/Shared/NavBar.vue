<template>
  <nav class="bg-gray-900 p-4 shadow-lg">
    <div class="container mx-auto flex justify-between items-center">
      <!-- Logo -->
      <div class="text-white text-2xl font-bold">
        <i class="fa-solid fa-map"></i> PetroMap RDC
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
            ><i class="fa-solid fa-gauge"></i> Tableau de Bord</router-link
          >
        </li>
        <li>
          <router-link
            to="/users"
            class="text-white hover:text-gray-400 transition-colors"
            ><i class="fa-solid fa-user"></i> Gestion des
            utilisateurs</router-link
          >
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
          ><i class="fa-solid fa-gauge"></i> Tableau de Bord</router-link
        >
      </li>
      <li>
        <router-link
          to="/users"
          class="block text-white hover:text-gray-400 transition-colors"
          ><i class="fa-solid fa-user"></i> Gestion des
          utilisateurs</router-link
        >
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
          Déconnexion
        </button>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      menuOpen: false,
    };
  },
  computed: {
    ...mapState("auth", ["user"]),
  },
  methods: {
    ...mapActions("auth", ["logout"]),
    async handleLogout() {
      await this.logout(); // Exécute la déconnexion
      this.$router.push("/"); // Redirige vers la page d'accueil après déconnexion
    },
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
};
</script>

<style scoped>
/* Styles supplémentaires pour améliorer l'apparence sur mobile et tablette */
.navbar-shadow {
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
