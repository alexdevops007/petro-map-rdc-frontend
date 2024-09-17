<template>
  <div
    class="flex justify-center items-center min-h-screen bg-blue-900"
  >
    <div class="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
      <h1 class="text-3xl font-bold text-blue-900 mb-6">Connexion</h1>
      <form @submit.prevent="handleLogin">
        <div class="mb-4">
          <label class="block text-blue-900">Email</label>
          <input
            type="email"
            v-model="email"
            class="w-full px-4 py-2 border border-blue-500 rounded"
          />
        </div>
        <div class="mb-4">
          <label class="block text-blue-900">Mot de passe</label>
          <input
            type="password"
            v-model="password"
            class="w-full px-4 py-2 border border-blue-500 rounded"
          />
        </div>
        <button
          type="submit"
          class="w-full bg-yellow-500 text-blue-900 font-semibold py-2 px-4 rounded hover:bg-yellow-600 transition duration-300 ease-in-out"
        >
          <i class="fas fa-sign-in-alt"></i> Connexion
        </button>
      </form>
      <div v-if="error" class="text-red-500 mt-4">{{ error }}</div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  computed: {
    ...mapState("auth", ["error"]),
  },
  methods: {
    ...mapActions("auth", ["login"]),
    async handleLogin() {
      await this.login({ email: this.email, password: this.password });
      if (!this.error) {
        this.$router.push("/dashboard");
      }
    },
  },
};
</script>

<style scoped></style>
