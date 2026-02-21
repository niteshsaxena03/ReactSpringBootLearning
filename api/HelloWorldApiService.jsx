import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
});

export const retrieveHelloWorldBean = () => {
  return api.get(`/hello-world-bean`);
};
export const retrieveHelloWorldPathVariable = (username) => {
  return api.get(`/hello-world/path-variable/${username}`);
};
