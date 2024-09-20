import api from "./apiService";

// Récupérer les activités d'une concession spécifique
const fetchAllActivities = () => {
  return api.get("/activities");
};

export default {
  fetchAllActivities,
};
