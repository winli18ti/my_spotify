import { searchArtists } from "api/services";
import { useStateProvider } from "context";
import { useEffect, useState } from "react";
import { filterById, mapArtistsItems, useErrorHandler } from "utils";

export default function useArtistSearch(query, offset) {
  const [{ token }] = useStateProvider();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [empty, setEmpty] = useState(false);
  const [artists, setArtists] = useState([]);
  const [next, setNext] = useState(false);

  const { handleError } = useErrorHandler();

  useEffect(() => {
    setArtists([]);
    setLoading(true);
    setError(false);
    setEmpty(false);
  }, [query]);

  useEffect(() => {
    if (query) {
      const getArtistsData = setTimeout(() => {
        setLoading(true);
        setError(false);
        setEmpty(false);
        
        searchArtists(query, offset)
          .then((artistsData) => {
            const newArtists = mapArtistsItems(artistsData.items);
            setArtists((prevArtists) => {
              return filterById([...prevArtists, ...newArtists]);
            });
            setNext(artistsData.next !== null);
            setLoading(false);
            setEmpty(artistsData.next === null && 
              artists.length + newArtists.length === 0);
          })
          .catch((error) => {
            handleError();
          })
      }, 1000);

      return () => clearTimeout(getArtistsData);
    }
  }, [query, offset, token]);

  return { loading, error, empty, artists, next };
}