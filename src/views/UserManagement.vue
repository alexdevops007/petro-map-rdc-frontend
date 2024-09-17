<template>
  <div class="container mx-auto">
    <h1 class="text-3xl font-bold mb-6">Gestion des Utilisateurs</h1>

    <button
      class="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 mb-6"
      @click="createNewUser"
    >
      <i class="fas fa-user-plus"></i> Ajouter un utilisateur
    </button>

    <UsersList @edit-user="selectUser" />

    <UserForm
      v-if="selectedUser"
      :user="selectedUser"
      @save-user="handleSaveUser"
      @cancel="clearSelection"
    />
  </div>
</template>

<script>
import UsersList from "@/components/Dashboard/UsersList.vue";
import UserForm from "@/components/Dashboard/UserForm.vue";

export default {
  components: {
    UsersList,
    UserForm,
  },
  data() {
    return {
      selectedUser: null,
    };
  },
  methods: {
    createNewUser() {
      this.selectedUser = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        role: "Citizen",
      };
    },
    selectUser(user) {
      this.selectedUser = user;
    },
    async handleSaveUser({ user, isEditMode }) {
      if (isEditMode) {
        // Mise à jour de l'utilisateur existant avec PUT
        await this.$store.dispatch("users/updateUser", user);
      } else {
        // Création d'un nouvel utilisateur avec POST
        await this.$store.dispatch("users/createUser", user);
      }

      // Réinitialiser le formulaire après la sauvegarde
      this.selectedUser = null;
    },
    clearSelection() {
      this.selectedUser = null;
    },
  },
};
</script>

<style scoped></style>
