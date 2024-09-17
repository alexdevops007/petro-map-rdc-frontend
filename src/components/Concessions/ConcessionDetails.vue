<template>
  <div v-if="concessionDetails" class="container mx-auto mt-6">
    <h2 class="text-2xl font-bold mb-4">{{ concessionDetails.name }}</h2>
    <p><strong>Opérateur :</strong> {{ concessionDetails.operator }}</p>
    <p><strong>Données géologiques :</strong> {{ concessionDetails.geologicalData }}</p>
    <p><strong>Infrastructures :</strong> {{ concessionDetails.infrastructure }}</p>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  computed: {
    ...mapState("map", ["concessionDetails"]),
  },
  methods: {
    ...mapActions("map", ["fetchConcessionDetails"]),
  },
  mounted() {
    this.fetchConcessionDetails(this.$route.params.id);  // Récupérer les détails de la concession à partir de l'ID dans l'URL
    console.log(this.concessionDetails)
  },
};
</script>

<style scoped>
/* Ajoutez des styles supplémentaires si nécessaire */
</style>
