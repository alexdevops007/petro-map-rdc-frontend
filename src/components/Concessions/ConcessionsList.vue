<template>
  <div class="container mx-auto mt-6">
    <h2 class="text-2xl font-bold mb-4">Liste des Concessions Pétrolières</h2>
    <table class="min-w-full bg-white">
      <thead>
        <tr
          class="w-full text-left text-gray-600 uppercase bg-gray-200 text-sm leading-normal"
        >
          <th class="py-3 px-6">Nom</th>
          <th class="py-3 px-6">Opérateur</th>
          <th class="py-3 px-6">Statut</th>
          <th class="py-3 px-6">Actions</th>
        </tr>
      </thead>
      <tbody class="text-gray-600 text-sm font-light">
        <tr
          v-for="concession in concessions"
          :key="concession._id"
          class="border-b border-gray-200 hover:bg-gray-100"
        >
          <td class="py-3 px-6">{{ concession.name }}</td>
          <td class="py-3 px-6">{{ concession.operator }}</td>
          <td class="py-3 px-6">{{ concession.status }}</td>
          <td class="py-3 px-6 flex">
            <button
              @click="viewConcession(concession._id)"
              class="text-blue-600 hover:text-blue-800 mr-2"
            >
              <i class="fa-solid fa-eye"></i>
            </button>
            <button
              @click="editConcession(concession._id)"
              class="text-yellow-600 hover:text-yellow-800 mr-2"
            >
              <i class="fa-solid fa-pen"></i>
            </button>
            <button
              @click="deleteConcession(concession._id)"
              class="text-red-600 hover:text-red-800"
            >
              <i class="fa-solid fa-trash"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState("concessions", ["concessions"]),
  },
  methods: {
    ...mapActions("concessions", ["fetchConcessions", "deleteConcession"]),
    viewConcession(id) {
      this.$router.push(`/concessions/${id}`);
    },
    editConcession(id) {
      this.$router.push(`/concessions/edit/${id}`);
    },
    async deleteConcession(id) {
      await this.deleteConcession(id);
    },
  },
  created() {
    this.fetchConcessions();
  },
};
</script>

<style scoped>
/* Ajoutez des styles supplémentaires si nécessaire */
</style>
