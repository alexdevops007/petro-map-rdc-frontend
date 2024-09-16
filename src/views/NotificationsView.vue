<template>
  <div class="container mx-auto">
    <h1 class="text-3xl font-bold text-blue mb-6">Gestion des utilisateurs</h1>

    <button
      @click="createNewUser"
      class="mb-6 bg-blue text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
    >
      Ajouter un utilisateur
    </button>

    <user-form
      v-if="formVisible"
      :user="selectedUser"
      :isCreating="isCreating"
      @submit="saveUser"
    ></user-form>

    <user-list :users="users" @edit="editUser" @delete="deleteUser"></user-list>
  </div>
</template>

<script>
import UserList from "@/components/User/UserList.vue";
import UserForm from "@/components/User/UserForm.vue";

export default {
  components: { UserList, UserForm },
  data() {
    return {
      selectedUser: null,
      formVisible: false,
      isCreating: true,
    };
  },
  computed: {
    users() {
      return this.$store.getters["user/allUsers"];
    },
  },
  methods: {
    createNewUser() {
      this.selectedUser = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        role: "User",
      };
      this.formVisible = true;
      this.isCreating = true;
    },
    async saveUser(user) {
      try {
        if (this.isCreating) {
          await this.$store.dispatch("user/addUser", user); // Crée l'utilisateur
        } else {
          await this.$store.dispatch("user/updateUser", {
            id: user._id,
            userData: user,
          });
        }
        this.formVisible = false;
        this.selectedUser = null;
      } catch (error) {
        console.error(
          "Erreur lors de la sauvegarde de l'utilisateur:",
          error.message
        );
      }
    },
    editUser(user) {
      this.selectedUser = { ...user };
      this.formVisible = true;
      this.isCreating = false;
    },
    deleteUser(id) {
      this.$store.dispatch("user/deleteUser", id);
    },
  },
  created() {
    this.$store.dispatch("user/fetchUsers");
  },
};
</script>
