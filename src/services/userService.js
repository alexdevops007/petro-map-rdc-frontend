import api from "./apiService";

export const getUsers = async () => {
  try {
    const response = await api.get("/users");
    return response.data;
  } catch (error) {
    throw new Error(
      error.response.data.message ||
        "Erreur lors de la récupération des utilisateurs"
    );
  }
};

export const getUserById = async (id) => {
  try {
    const response = await api.get(`/users/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(
      error.response.data.message ||
        "Erreur lors de la récupération de l'utilisateur"
    );
  }
};

export const createUser = async (userData) => {
  try {
    const response = await api.post("/users", userData); // POST pour la création
    return response.data;
  } catch (error) {
    throw new Error(
      error.response.data.message ||
        "Erreur lors de la création de l'utilisateur"
    );
  }
};

export const updateUser = async (id, userData) => {
  try {
    const response = await api.put(`/users/${id}`, userData); // Vérifiez que 'id' n'est pas undefined
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || "Erreur lors de la mise à jour de l'utilisateur");
  }
};


export const deleteUser = async (id) => {
  try {
    const response = await api.delete(`/users/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(
      error.response.data.message ||
        "Erreur lors de la suppression de l'utilisateur"
    );
  }
};
