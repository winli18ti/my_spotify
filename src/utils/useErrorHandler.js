import { requestAuthorization } from "api/auth";
import { reducerCases, useStateProvider } from "context"
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const useErrorHandler = () => {
  const [{ }, dispatch] = useStateProvider();
  const navigate = useNavigate();

  const handleError = useCallback(async (path = '') => {
    requestAuthorization()
      .then((token) => {
        localStorage.clear();
        localStorage.setItem("token", token);
        dispatch({ type: reducerCases.TOKEN, token });
        if (path) {
          navigate(path);
        }
      })
  }, [dispatch, navigate]);

  return { handleError };
}