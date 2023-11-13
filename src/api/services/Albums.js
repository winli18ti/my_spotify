import { fetchAPI } from "api/Api";
import { ALBUM_URL, NEW_RELEASES_URL } from "api/Constant";

export const getAlbum = async (id) => {
  const endpoint = `${ALBUM_URL}/${id}`;
  const albumJSON = fetchAPI(endpoint);
  return albumJSON;
}

export const getNewReleases = async () => {
  let endpoint = `${NEW_RELEASES_URL}?limit=20`;
  const jsonResponse = await fetchAPI(endpoint);
  return jsonResponse.albums;
}