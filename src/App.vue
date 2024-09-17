<template>
  <div>
    <NavBar v-if="showNavBar" />
    <router-view />
  </div>
</template>

<script>
import NavBar from "./components/Shared/NavBar.vue";

export default {
  components: { NavBar },
  computed: {
    showNavBar() {
      const currentRoute = this.$route.name;
      // Afficher la NavBar sauf sur HomeView ("/") et LoginView ("/login")
      return !(currentRoute === "Home" || currentRoute === "Login");
    },
  },
};
</script>

<style>
  @import 'leaflet/dist/leaflet.css';
</style>

