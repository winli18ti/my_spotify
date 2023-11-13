import { fetchAPI } from "api/Api";
import { ARTIST_URL } from "api/Constant";

export const getArtist = async (id) => {
  const endpoint = `${ARTIST_URL}/${id}`;
  const artistJSON = fetchAPI(endpoint);
  return artistJSON;
}

export const getArtists = async (ids) => {
  const paramsObj = {
    ids: ids.join(","),
  }
  const endpoint = ARTIST_URL + "?" + new URLSearchParams(paramsObj);
  const jsonResponse = await fetchAPI(endpoint);
  return jsonResponse.artists;
}

export const getArtistAlbums = async (id) => {
  const endpoint = `${ARTIST_URL}/${id}/albums?limit=20`;
  const albumJSON = fetchAPI(endpoint);
  return albumJSON;
}

export const getArtistTopTracks = async (id) => {
  let market = "ID";
  if (localStorage.getItem("country")) {
    market = localStorage.getItem("country");
  }
  const endpoint = `${ARTIST_URL}/${id}/top-tracks?market=${market}`;
  const tracksJSON = fetchAPI(endpoint);
  return tracksJSON;
}

export const getArtistRelatedArtists = async (id) => {
  const endpoint = `${ARTIST_URL}/${id}/related-artists`;
  const artistsJSON = fetchAPI(endpoint);
  return artistsJSON;
}