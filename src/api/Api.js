import { getAccessToken } from "utils";

export const fetchAPI = async (endpoint) => {
  const response = await fetch(endpoint, getRequestInfo());
  return await response.json();
}

const getRequestInfo = () => {
  return {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${getAccessToken()}`,
    },
  };
}