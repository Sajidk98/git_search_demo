import API from "./config";

export const fetchRepoByRepo = (value) => {
  return API.get("/search/repositories?q=" + value)
    .then((response) => {
      return response.data.items;
    })
    .catch((error) => {
      throw new Error(error);
    });
};
