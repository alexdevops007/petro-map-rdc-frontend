import api from "./apiService";

// Connexion
export const login = async (email, password) => {
  try {
    const response = await api.post("/auth/login", { email, password });
    return response.data;
  } catch (error) {
    throw new Error(
      error.response.data.message || "Erreur lors de la connexion"
    );
  }
};

// Déconnexion
export const logout = async () => {
  try {
    const response = await api.post("/auth/logout");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    return response.data;
  } catch (error) {
    throw new Error("Erreur lors de la déconnexion");
  }
};

