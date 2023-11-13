export const CLIENT_ID = "21c165495a8441c28e61a44123232e44";
export const CLIENT_SECRET = "283ced2a88af4cd79b2e168689dd7a58";
export const CLIENT_BASE64 = window.btoa(`${CLIENT_ID}:${CLIENT_SECRET}`);

export const AUTHORIZATION_SCOPE = "user-read-private user-read-email " + 
  "playlist-modify-public playlist-modify-private ugc-image-upload";

const ACCOUNT_URL = "https://accounts.spotify.com";
export const API_TOKEN_URL = `${ACCOUNT_URL}/api/token`;
export const AUTHORIZE_URL = `${ACCOUNT_URL}/authorize?`;

const BASE_API_URL = "https://api.spotify.com/v1";
export const ALBUM_URL = `${BASE_API_URL}/albums`;
export const ARTIST_URL = `${BASE_API_URL}/artists`;
export const SEARCH_URL = `${BASE_API_URL}/search?`;
export const TRACK_URL = `${BASE_API_URL}/tracks`;
export const CURRENT_USER_URL = `${BASE_API_URL}/me`;
export const NEW_RELEASES_URL = `${BASE_API_URL}/browse/new-releases`;
export const RECOMMENDATIONS_URL = `${BASE_API_URL}/recommendations`;

export const PLAYLIST_URL = `${BASE_API_URL}/playlists`;
export const USER_URL = `${BASE_API_URL}/users`;

export const REDIRECT_URI = "http://localhost:3000";

export const ARTIST_LIMIT = 30;
export const ALBUM_LIMIT = 30;
export const TRACK_LIMIT = 50;