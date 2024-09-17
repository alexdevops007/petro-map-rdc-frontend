<template>
  <div class="container mx-auto mt-6">
    <h2 class="text-2xl font-bold mb-4">
      {{ isEditMode ? "Modifier la Concession" : "Ajouter une Concession" }}
    </h2>
    <form @submit.prevent="submitForm">
      <!-- Champ Nom -->
      <div class="mb-4">
        <label class="block text-gray-700">Nom</label>
        <input
          type="text"
          v-model="formData.name"
          class="w-full px-4 py-2 border rounded"
          required
        />
      </div>

      <!-- Champ Opérateur -->
      <div class="mb-4">
        <label class="block text-gray-700">Opérateur</label>
        <input
          type="text"
          v-model="formData.operator"
          class="w-full px-4 py-2 border rounded"
          required
        />
      </div>

      <!-- Champ Statut -->
      <div class="mb-4">
        <label class="block text-gray-700">Statut</label>
        <select
          v-model="formData.status"
          class="w-full px-4 py-2 border rounded"
        >
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
          <option value="Suspended">Suspended</option>
        </select>
      </div>

      <!-- Champ Géolocalisation (Longitude et Latitude) -->
      <div class="mb-4">
        <label class="block text-gray-700"
          >Localisation (Longitude, Latitude)</label
        >
        <input
          type="text"
          v-model="formData.location.coordinates[0]"
          placeholder="Longitude"
          class="w-full px-4 py-2 border rounded mb-2"
          required
        />
        <input
          type="text"
          v-model="formData.location.coordinates[1]"
          placeholder="Latitude"
          class="w-full px-4 py-2 border rounded"
          required
        />
      </div>

      <!-- Champ Données Géologiques (textarea) -->
      <div class="mb-4">
        <label class="block text-gray-700"
          >Données Géologiques (URL ou description)</label
        >
        <textarea
          v-model="formData.geologicalData"
          class="w-full px-4 py-2 border rounded"
          rows="4"
          placeholder="Entrez les données géologiques ou un lien vers celles-ci"
        ></textarea>
      </div>

      <!-- Champ Infrastructures (textarea) -->
      <div class="mb-4">
        <label class="block text-gray-700"
          >Infrastructures (URL ou description)</label
        >
        <textarea
          v-model="formData.infrastructure"
          class="w-full px-4 py-2 border rounded"
          rows="4"
          placeholder="Entrez les informations sur les infrastructures ou un lien vers celles-ci"
        ></textarea>
      </div>

      <div class="flex justify-end">
        <button
          type="submit"
          class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
        >
          {{ isEditMode ? "Mettre à jour" : "Ajouter" }}
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      formData: {
        name: "",
        operator: "",
        status: "Active",
        location: {
          type: "Point",
          coordinates: [null, null], // Longitude, Latitude
        },
        geologicalData: "",
        infrastructure: "",
      },
      isEditMode: false,
    };
  },
  computed: {
    ...mapGetters("concessions", ["getConcessionById"]),
  },
  methods: {
    ...mapActions("concessions", ["addConcession", "updateConcession"]),
    async submitForm() {
      if (this.isEditMode) {
        await this.updateConcession({
          id: this.$route.params.id,
          concessionData: this.formData,
        });
      } else {
        await this.addConcession(this.formData);
      }
      this.$router.push("/concessions");
    },
  },
  created() {
    if (this.$route.params.id) {
      this.isEditMode = true;
      const concession = this.getConcessionById(this.$route.params.id);
      if (concession) {
        this.formData = { ...concession };
      }
    }
  },
};
</script>

<style scoped>
/* Ajoutez des styles supplémentaires si nécessaire */
</style>
