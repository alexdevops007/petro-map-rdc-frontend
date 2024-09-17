<template>
  <div class="container mx-auto py-6">
    <h1 class="text-2xl font-bold mb-4">Gestion des Utilisateurs</h1>

    <!-- Affiche un message d'erreur si une erreur est présente -->
    <div v-if="error" class="text-red-500">{{ error }}</div>

    <!-- Condition v-if et v-else -->
    <div v-if="users.length > 0">
      <table class="table-auto w-full text-left">
        <thead>
          <tr class="bg-gray-200">
            <th class="px-4 py-2">Nom</th>
            <th class="px-4 py-2">Email</th>
            <th class="px-4 py-2">Rôle</th>
            <th class="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user._id">
            <td class="border px-4 py-2">
              {{ user.firstName }} {{ user.lastName }}
            </td>
            <td class="border px-4 py-2">{{ user.email }}</td>

            <!-- Traduction des rôles en français -->
            <td class="border px-4 py-2">
              <span v-if="user.role === 'Admin'">Administrateur</span>
              <span v-else-if="user.role === 'Supervisor'">Superviseur</span>
              <span v-else-if="user.role === 'Investor'">Investisseur</span>
              <span v-else>Citoyen(ne)</span>
            </td>

            <td class="border px-4 py-2">
              <button
                @click="editUser(user)"
                class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 mr-2"
              >
                <i class="fas fa-edit"></i>
              </button>
              <button
                @click="deleteUser(user._id)"
                class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                <i class="fas fa-trash"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- Si aucun utilisateur n'est présent -->
    <div v-else>
      <p class="text-gray-500">Aucun utilisateur trouvé.</p>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      selectedUser: null,
    };
  },
  computed: {
    ...mapState("users", ["users", "error"]),
  },
  methods: {
    ...mapActions("users", ["fetchUsers", "deleteUser"]),
    editUser(user) {
      this.$emit("edit-user", user);
    },
  },
  mounted() {
    this.fetchUsers();
  },
};
</script>

<style scoped></style>
