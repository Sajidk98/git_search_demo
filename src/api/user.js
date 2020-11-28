import axios from "axios";

export const fetchUsers = () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};
