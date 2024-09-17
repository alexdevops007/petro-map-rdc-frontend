<template>
  <nav class="bg-gray-800 p-4">
    <div class="container mx-auto flex justify-between items-center">
      <div class="text-white text-2xl font-bold">PetroMap RDC</div>
      <div class="md:hidden">
        <button @click="toggleMenu" class="text-white focus:outline-none">
          <i class="fas fa-bars"></i>
        </button>
      </div>
      <ul
        :class="['md:flex', menuOpen ? 'block' : 'hidden']"
        class="w-full md:w-auto md:space-x-6"
      >
        <li>
          <router-link to="/dashboard" class="text-white hover:text-gray-400"
            >Tableau de Bord</router-link
          >
        </li>
        <!-- Autres liens -->
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
};
</script>

<style scoped></style>
