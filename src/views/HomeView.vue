<template>
  <div class="flex justify-center items-center h-screen bg-blue-950">
    <div class="text-center text-white">
      <h1 class="text-5xl font-bold mb-6">Bienvenue sur PetroMap RDC</h1>
      <p class="text-md mb-8">
        La plateforme pour le suivi des zones pétrolières dédiée au Ministère
        des hydrocarbures de la République Démocratique du Congo
      </p>
      <router-link to="/login">
        <button
          class="bg-yellow-500 text-blue-900 font-semibold py-3 px-6 rounded-lg hover:bg-yellow-600 transition duration-300 ease-in-out"
        >
          <i class="fas fa-sign-in-alt mr-2"></i> Se connecter
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>
