import { API_TOKEN_URL, AUTHORIZE_URL, CLIENT_BASE64, 
  CLIENT_ID, REDIRECT_URI, AUTHORIZATION_SCOPE } from "api/Constant";

export const redirectUserAuthorization = () => { //Authorization code
  const paramsObj = {
    response_type: "code",
    client_id: CLIENT_ID,
    scope: AUTHORIZATION_SCOPE,
    redirect_uri: "http://localhost:3000"
  };

  const endpoint = AUTHORIZE_URL + new URLSearchParams(paramsObj);
  window.location.href = endpoint;
}

export const requestAccessToken = async (code) => {
  const bodyObj = {
    grant_type: "authorization_code",
    code: code,
    redirect_uri: REDIRECT_URI
  };

  const tokenData = await requestUserAuthorization(bodyObj);
  return tokenData;
}

export const refreshAccessToken = async () => {
  const bodyObj = {
    grant_type: "refresh_token",
    refresh_token: localStorage.getItem("refresh_token")
  }

  const tokenData = await requestUserAuthorization(bodyObj);
  return tokenData;
}

const requestUserAuthorization = async (bodyObj) => {
  const body = new URLSearchParams(bodyObj);
  const response = await fetch(API_TOKEN_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Authorization": `Basic ${CLIENT_BASE64}`
    },
    body: body
  });
  
  const { access_token, refresh_token } = await response.json();
  return { access_token, refresh_token };
}