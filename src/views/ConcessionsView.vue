<template>
  <div class="container mx-auto mt-6 px-4 sm:px-6 lg:px-8">
    <router-link
      to="/concessions/new"
      class="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 flex items-center justify-center sm:inline-flex"
    >
      <i class="fa-solid fa-plus mr-2"></i>
      Ajouter une Concession
    </router-link>
    <ConcessionsList />
  </div>
</template>

<script>
import ConcessionsList from "@/components/Concessions/ConcessionsList.vue";

export default {
  components: {
    ConcessionsList,
  },
};
</script>

<style scoped>
/* Ajoutez des styles supplémentaires si nécessaire */
</style>
