import api from "./apiService";

// Obtenir toutes les concessions
export const getConcessions = async () => {
  try {
    const response = await api.get("/concessions");
    return response.data;
  } catch (error) {
    throw new Error("Erreur lors de la récupération des concessions");
  }
};

// Créer une nouvelle concession
export const createConcession = async (concessionData) => {
  try {
    const response = await api.post("/concessions", concessionData);
    return response.data;
  } catch (error) {
    throw new Error("Erreur lors de la création de la concession");
  }
};

// Mettre à jour une concession
export const updateConcession = async (id, concessionData) => {
  try {
    const response = await api.put(`/concessions/${id}`, concessionData);
    return response.data;
  } catch (error) {
    throw new Error("Erreur lors de la mise à jour de la concession");
  }
};

// Supprimer une concession
export const deleteConcession = async (id) => {
  try {
    const response = await api.delete(`/concessions/${id}`);
    return response.data;
  } catch (error) {
    throw new Error("Erreur lors de la suppression de la concession");
  }
};
