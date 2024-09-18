<template>
  <div class="container mx-auto py-6 px-4 sm:px-6 lg:px-8">
    <h1 class="text-2xl font-bold mb-4">Gestion des Utilisateurs</h1>

    <!-- Affichage d'un message d'erreur s'il y en a -->
    <div v-if="error" class="text-red-500 mb-4">{{ error }}</div>

    <!-- Condition pour afficher le tableau ou un message -->
    <div v-if="users.length > 0">
      <div class="overflow-x-auto">
        <table class="table-auto w-full bg-white border border-gray-300">
          <thead>
            <tr class="bg-gray-200 text-left text-xs sm:text-sm uppercase text-gray-600">
              <th class="px-4 py-2">Nom</th>
              <th class="px-4 py-2">Email</th>
              <th class="px-4 py-2">Rôle</th>
              <th class="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody class="text-gray-600 text-xs sm:text-sm">
            <tr v-for="user in users" :key="user._id" class="border-b border-gray-200 hover:bg-gray-100">
              <td class="px-4 py-2">
                {{ user.firstName }} {{ user.lastName }}
              </td>
              <td class="px-4 py-2">{{ user.email }}</td>

              <!-- Traduction des rôles en français -->
              <td class="px-4 py-2">
                <span v-if="user.role === 'Admin'">Administrateur</span>
                <span v-else-if="user.role === 'Supervisor'">Superviseur</span>
                <span v-else-if="user.role === 'Investor'">Investisseur</span>
                <span v-else>Citoyen(ne)</span>
              </td>

              <!-- Boutons d'actions -->
              <td class="px-4 py-2 flex justify-center sm:justify-start">
                <button
                  @click="editUser(user)"
                  class="bg-blue-500 text-white px-2 sm:px-4 py-1 sm:py-2 rounded hover:bg-blue-700 mr-2"
                >
                  <i class="fas fa-edit"></i>
                </button>
                <button
                  @click="deleteUser(user._id)"
                  class="bg-red-500 text-white px-2 sm:px-4 py-1 sm:py-2 rounded hover:bg-red-700"
                >
                  <i class="fas fa-trash"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Si aucun utilisateur n'est trouvé -->
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
    deleteUser(userId) {
      this.deleteUser(userId).then(() => {
        this.fetchUsers(); // Rafraîchit la liste après suppression
      });
    },
  },
  mounted() {
    this.fetchUsers();
  },
};
</script>

<style scoped>
/* Vous pouvez ajouter des styles spécifiques ici si nécessaire */
</style>
