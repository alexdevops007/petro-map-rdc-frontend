<template>
  <div class="container mx-auto mt-6">
    <router-link
      to="/concessions/new"
      class="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700"
    >
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
