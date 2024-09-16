<template>
  <nav class="bg-blue p-4 text-white">
    <div class="container mx-auto flex justify-between items-center">
      <div class="text-lg font-bold">PetroMap RDC</div>
      <button @click="toggleMenu" class="lg:hidden">
        <i class="fas fa-bars"></i>
      </button>
      <ul
        :class="{ hidden: !isMenuOpen, flex: isMenuOpen }"
        class="lg:flex space-x-4"
      >
        <li>
          <router-link class="hover:text-yellow-500" to="/"
            >Accueil</router-link
          >
        </li>
        <li>
          <router-link class="hover:text-yellow-500" to="/users"
            >Utilisateurs</router-link
          >
        </li>
        <li>
          <router-link class="hover:text-yellow-500" to="/dashboard"
            >Tableau de bord</router-link
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>
