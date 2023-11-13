import { reducerCases, useStateProvider } from "context";
import { useCallback } from "react";

export const usePlayHandler = () => {
  const [{ userToken }, dispatch] = useStateProvider();
  
  const handlePlay = useCallback((track, tracks = [track], index = 0) => {
    if (!track.preview_url) return;
    const currentlyPlaying = {
      index,
      ...track
    }
    
    const selectedList = tracks.filter((track) => track.preview_url);

    dispatch({ type: reducerCases.PLAYING, currentlyPlaying });
    dispatch({ type: reducerCases.CURRENT_TIME, currentTime: 0 });
    dispatch({ type: reducerCases.SELECTED_LIST, selectedList });
    dispatch({ type: reducerCases.PLAYER_STATE, playerState: true });

    if (userToken === null) {
      dispatch({ type: reducerCases.OPEN_DIALOG, openDialog: true });
    }
  }, [dispatch, userToken]);

  return { handlePlay };
}