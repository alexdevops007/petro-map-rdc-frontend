import api from "./apiService";

export const createUser = async (userData) => {
  try {
    const response = await api.post("/users", userData);
    return response.data;
  } catch (error) {
    // Vérification que l'erreur a une réponse du serveur
    if (error.response && error.response.data && error.response.data.error) {
      throw new Error(
        `Erreur lors de la création de l'utilisateur : ${error.response.data.error}`
      );
    } else {
      throw new Error(
        "Erreur lors de la création de l'utilisateur : une erreur inconnue est survenue."
      );
    }
  }
};

export const getUsers = async () => {
  try {
    const response = await api.get("/users");
    return response.data;
  } catch (error) {
    throw new Error("Erreur lors de la récupération des utilisateurs.");
  }
};

export const getUserById = async (id) => {
  try {
    const response = await api.get(`/users/${id}`);
    return response.data;
  } catch (error) {
    console.error(
      `Erreur lors de la récupération de l'utilisateur avec ID ${id}`,
      error
    );
    throw error;
  }
};

export const updateUser = async (id, userData) => {
  if (!id) {
    throw new Error("ID utilisateur non défini pour la mise à jour");
  }
  try {
    const response = await api.put(`/users/${id}`, userData);
    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      throw new Error(
        `Erreur lors de la mise à jour de l'utilisateur avec ID ${id} : ${error.response.data.message}`
      );
    } else {
      throw new Error("Erreur réseau ou problème inattendu.");
    }
  }
};

export const deleteUser = async (id) => {
  try {
    const response = await api.delete(`/users/${id}`);
    return response.data;
  } catch (error) {
    console.error(
      `Erreur lors de la suppression de l'utilisateur avec ID ${id}`,
      error
    );
    throw error;
  }
};
