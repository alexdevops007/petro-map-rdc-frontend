<template>
  <div class="container mx-auto mt-6">
    <MapView />
    <ConcessionsDetail v-if="$route.params.id" />
  </div>
</template>

<script>
import MapView from "@/components/Dashboard/MapView.vue";
import ConcessionsDetail from "@/components/Concessions/ConcessionDetails.vue";

export default {
  components: {
    MapView,
    ConcessionsDetail,
  },
};
</script>

<style scoped>
/* Ajoutez des styles supplémentaires si nécessaire */
</style>
