export const setLocalStorageData = (data) => {
  for (const key in data) {
    localStorage.setItem(key, data[key]);
  }
}

export const getAccessToken = () => {
  if (localStorage.getItem("user_token")) {
    return localStorage.getItem("user_token");
  }
  if (localStorage.getItem("token")) {
    return localStorage.getItem("token");
  }
  return "";
}