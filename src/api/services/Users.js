import { fetchAPI } from "api/Api"
import { CURRENT_USER_URL } from "api/Constant"

export const getCurrentUser = () => {
  const currentUserJSON = fetchAPI(CURRENT_USER_URL);
  return currentUserJSON;
}