import api from "./apiService";

// Récupérer toutes les concessions avec leur localisation pour la carte
export const getConcessionsForMap = async () => {
  try {
    const response = await api.get("/maps/concessions");
    return response.data;
  } catch (error) {
    throw new Error(
      "Erreur lors de la récupération des concessions pour la carte"
    );
  }
};

// Récupérer les détails d'une concession spécifique par ID
export const getConcessionDetails = async (id) => {
  try {
    const response = await api.get(`/maps/concessions/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(
      "Erreur lors de la récupération des détails de la concession"
    );
  }
};
