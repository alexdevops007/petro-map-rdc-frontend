<template>
  <div class="container mx-auto p-4 lg:p-8">
    <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
      Gestion des Utilisateurs
    </h1>

    <button
      class="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 mb-6"
      @click="createNewUser"
    >
      <i class="fa-solid fa-user"></i> Ajouter un utilisateur
    </button>

    <!-- Liste des utilisateurs, responsive -->
    <div class="overflow-x-auto">
      <UsersList @edit-user="selectUser" />
    </div>

    <!-- Formulaire de l'utilisateur, responsive -->
    <UserForm
      v-if="selectedUser"
      :user="selectedUser"
      @save-user="handleSaveUser"
      @cancel="clearSelection"
      class="mt-6"
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
        await this.$store.dispatch("users/updateUser", user);
      } else {
        await this.$store.dispatch("users/createUser", user);
      }

      this.selectedUser = null;
    },
    clearSelection() {
      this.selectedUser = null;
    },
  },
};
</script>

<style scoped></style>
