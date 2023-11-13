import { fetchAPI } from "api/Api";
import { ALBUM_LIMIT, ARTIST_LIMIT, SEARCH_URL, TRACK_LIMIT } from "api/Constant";

const getSearchResults = async (paramsObj) => {
  if (localStorage.getItem("country")) {
    paramsObj["market"] = localStorage.getItem("country");
  }
  const endpoint = SEARCH_URL + new URLSearchParams(paramsObj);
  const jsonResponse = await fetchAPI(endpoint);
  return jsonResponse[`${paramsObj.type}s`];
}

export const searchAlbums = (q, offset = 0) => {
  const paramsObj = {
    q: q,
    type: "album",
    offset: offset,
    limit: ALBUM_LIMIT,
    market: "ID"
  }
  return getSearchResults(paramsObj);
}

export const searchArtists = (q, offset = 0) => {
  const paramsObj = {
    q: q,
    type: "artist",
    offset: offset,
    limit: ARTIST_LIMIT
  }
  return getSearchResults(paramsObj);
}

export const searchTracks = (q, offset = 0, limit = TRACK_LIMIT) => {
  const paramsObj = {
    q: q,
    type: "track",
    offset: offset,
    limit: limit
  }
  return getSearchResults(paramsObj);
}