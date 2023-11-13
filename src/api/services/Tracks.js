import { fetchAPI } from "api/Api";
import { RECOMMENDATIONS_URL, TRACK_URL } from "api/Constant";

export const getTrack = async (id) => {
  const endpoint = `${TRACK_URL}/${id}`;
  const trackJSON = fetchAPI(endpoint);
  return trackJSON;
}

export const getRecommendations = async (id) => {
  let market = "ID";
  if (localStorage.getItem("country")) {
    market = localStorage.getItem("country");
  }
  const paramsObj = {
    limit: 5,
    market: market,
    seed_tracks: id,
  }
  const endpoint = RECOMMENDATIONS_URL + "?" + new URLSearchParams(paramsObj);
  const jsonResponse = await fetchAPI(endpoint);
  return jsonResponse.tracks;
}