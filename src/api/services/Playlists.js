import { fetchAPI } from "api/Api";
import { CURRENT_USER_URL, PLAYLIST_URL, USER_URL } from "api/Constant"

export const createPlaylist = async (userId, name, description) => {
  const endpoint = `${USER_URL}/${userId}/playlists`;
  let body;
  if (description === "") {
    body = JSON.stringify({ name });
  } else {
    body = JSON.stringify({ name, description });
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${localStorage.getItem("user_token")}`,
      "Content-Type": "application/json"
    },
    body: body
  })
  if (!response.ok) {
    throw Error(response.statusText);
  }
}

export const getCurrentUserPlaylists = async () => {
  const endpoint = `${CURRENT_USER_URL}/playlists`;
  const playlistsJSON = fetchAPI(endpoint);
  return playlistsJSON;
}

export const getPlaylist = async (id) => {
  const endpoint = `${PLAYLIST_URL}/${id}`;
  const playlistJSON = fetchAPI(endpoint);
  return playlistJSON;
}

export const changePlaylistDetails = async (id, name, description) => {
  const endpoint = `${PLAYLIST_URL}/${id}`;
  let body;
  if (description === "") {
    body = JSON.stringify({ name });
  } else {
    body = JSON.stringify({ name, description });
  }

  const response = await fetch(endpoint, {
    method: "PUT",
    headers: {
      "Authorization": `Bearer ${localStorage.getItem("user_token")}`,
      "Content-Type": "application/json"
    },
    body: body
  })
  if (!response.ok) {
    throw Error(response.statusText);
  }
}

export const addCoverImage = async (id, image) => {
  const endpoint = `${PLAYLIST_URL}/${id}/images`;
  const response = await fetch(endpoint, {
    method: "PUT",
    headers: {
      "Authorization": `Bearer ${localStorage.getItem("user_token")}`,
      "Content-Type": "image/jpeg"
    },
    body: image
  })
  if (!response.ok) {
    throw Error(response.statusText);
  }
}

export const addTracksToPlaylist = async (id, uris) => {
  const endpoint = `${PLAYLIST_URL}/${id}/tracks`;
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${localStorage.getItem("user_token")}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ uris })
  })
  if (!response.ok) {
    throw Error(response.statusText);
  }
}

export const removePlaylistItems = async (id, tracks) => {
  const endpoint = `${PLAYLIST_URL}/${id}/tracks`;
  const response = await fetch(endpoint, {
    method: "DELETE",
    headers: {
      "Authorization": `Bearer ${localStorage.getItem("user_token")}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ tracks })
  })
  if (!response.ok) {
    throw Error(response.statusText);
  }
}

export const unfollowPlaylist = async (id) => {
  const endpoint = `${PLAYLIST_URL}/${id}/followers`;
  const response = await fetch(endpoint, {
    method: "DELETE",
    headers: {
      "Authorization": `Bearer ${localStorage.getItem("user_token")}`
    }
  })
  if (!response.ok) {
    throw Error(response.statusText);
  }
}