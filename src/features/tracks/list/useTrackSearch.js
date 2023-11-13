import { searchTracks } from "api/services";
import { useStateProvider } from "context";
import { useEffect, useState } from "react";
import { filterById, mapTracksItems, useErrorHandler } from "utils";

export default function useTrackSearch(query, offset) {
  const [{ token }] = useStateProvider();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [empty, setEmpty] = useState(false);
  const [tracks, setTracks] = useState([]);
  const [next, setNext] = useState(false);
  const { handleError } = useErrorHandler();

  useEffect(() => {
    setTracks([]);
    setLoading(true);
    setError(false);
    setEmpty(false);
  }, [query]);

  useEffect(() => {
    if (query) {
      const getTracksData = setTimeout(() => {
        setLoading(true);
        setError(false);
        setEmpty(false);
        
        searchTracks(query, offset)
          .then((tracksData) => {
            const newTracks = mapTracksItems(tracksData.items);
            setTracks((prevTracks) => {
              return filterById([...prevTracks, ...newTracks]);
            });
            setNext(tracksData.next !== null);
            setLoading(false);
            setEmpty(tracksData.next === null && 
              tracks.length + newTracks.length === 0)
          })
          .catch((error) => {
            handleError();
          })
      }, 1000);

      return () => clearTimeout(getTracksData);
    }
  }, [query, offset, token]);

  return { loading, error, empty, tracks, next };
}