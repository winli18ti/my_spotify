import { API_TOKEN_URL, CLIENT_ID, CLIENT_SECRET } from "api/Constant";

export const requestAuthorization = async () => { //Client credentials
  localStorage.clear();
  const body = new URLSearchParams({
    grant_type: "client_credentials",
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET
  });
  
  const response = await fetch(API_TOKEN_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: body
  });

  const { access_token } = await response.json();
  return access_token;
}