<template>
  <div>
    <h2 class="text-2xl font-bold text-white mb-4">Dernières Activités</h2>
    <ul class="divide-y divide-gray-700">
      <li
        v-for="activity in recentActivities.slice(0, 5)"
        :key="activity._id"
        class="flex justify-between py-3"
      >
        <span class="text-gray-300">{{ activity.message }}</span>
        <span class="text-sm text-gray-400">{{ formatDate(activity.createdAt) }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters("activity", ["recentActivities"]),
  },
  methods: {
    ...mapActions("activity", ["fetchAllActivities", "listenForActivities"]),
    formatDate(date) {
      return new Date(date).toLocaleString();
    },
  },
  async mounted() {
    await this.fetchAllActivities(); // Récupérer toutes les activités
    this.listenForActivities(); // Écouter les nouvelles activités via Socket.IO
  },
};
</script>
