import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://your-ruby-backend.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default {
  getUsers() {
    return apiClient.get("/users");
  },
  getUser(id) {
    return apiClient.get(`/users/${id}`);
  },
};
