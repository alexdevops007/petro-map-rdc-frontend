<template>
  <div class="mb-6">
    <h2 class="text-2xl font-bold mb-4">
      {{ isEditMode ? "Modifier" : "Créer" }} un utilisateur
    </h2>

    <form @submit.prevent="saveUser">
      <div v-if="error" class="text-red-500 mb-4">{{ error }}</div>

      <div class="mb-4">
        <label class="block text-gray-700">Prénom</label>
        <input
          type="text"
          v-model="userData.firstName"
          class="w-full px-4 py-2 border rounded"
        />
      </div>

      <div class="mb-4">
        <label class="block text-gray-700">Nom</label>
        <input
          type="text"
          v-model="userData.lastName"
          class="w-full px-4 py-2 border rounded"
        />
      </div>

      <div class="mb-4">
        <label class="block text-gray-700">Email</label>
        <input
          type="email"
          v-model="userData.email"
          class="w-full px-4 py-2 border rounded"
        />
      </div>

      <div class="mb-4">
        <label class="block text-gray-700">Mot de passe</label>
        <input
          type="password"
          v-model="userData.password"
          class="w-full px-4 py-2 border rounded"
          placeholder="********"
        />
        <small class="text-gray-500"
          >Laissez vide pour ne pas changer le mot de passe.</small
        >
      </div>

      <div class="mb-4">
        <label class="block text-gray-700">Rôle</label>
        <select v-model="userData.role" class="w-full px-4 py-2 border rounded">
          <option value="Admin">Administrateur</option>
          <option value="Supervisor">Superviseur</option>
          <option value="Investor">Investisseur</option>
          <option value="Citizen">Citoyen(ne)</option>
        </select>
      </div>

      <div class="flex space-x-4">
        <button
          type="submit"
          class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          {{ isEditMode ? "Modifier" : "Enregistrer" }}
        </button>
        <button
          type="button"
          @click="cancel"
          class="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-700"
        >
          Annuler
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    user: Object,
  },
  data() {
    return {
      userData: {
        _id: this.user?._id || null,
        firstName: this.user?.firstName || "",
        lastName: this.user?.lastName || "",
        email: this.user?.email || "",
        password: "",
        role: this.user?.role || "Citizen",
      },
      error: null,
    };
  },
  computed: {
    isEditMode() {
      return !!this.user && !!this.user._id; // On vérifie si l'ID existe vraiment pour le mode édition
    },
  },
  methods: {
    saveUser() {
      const dataToSend = { ...this.userData };
      if (!dataToSend.password) {
        delete dataToSend.password; // Ne pas envoyer le mot de passe s'il est vide
      }

      if (this.isEditMode) {
        // Utilisation de PUT pour la modification
        this.$emit("save-user", { user: dataToSend, isEditMode: true });
      } else {
        // Utilisation de POST pour la création
        this.$emit("save-user", { user: dataToSend, isEditMode: false });
      }
    },
    cancel() {
      this.$emit("cancel");
    },
  },
};
</script>

<style scoped></style>
