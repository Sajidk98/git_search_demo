import API from "./config";

export const fetchUsers = () => {
  return API.get("/users")
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};
