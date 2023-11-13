import { searchAlbums } from "api/services";
import { useStateProvider } from "context";
import { useEffect, useState } from "react";
import { filterById, mapAlbumsItems, useErrorHandler } from "utils";

export default function useAlbumSearch(query, offset) {
  const [{ token }] = useStateProvider();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [empty, setEmpty] = useState(false);
  const [albums, setAlbums] = useState([]);
  const [next, setNext] = useState(false);
  const { handleError } = useErrorHandler();

  useEffect(() => {
    setAlbums([]);
    setLoading(true);
    setError(false);
    setEmpty(false);
  }, [query]);

  useEffect(() => {
    if (query) {
      const getAlbumsData = setTimeout(() => {
        setLoading(true);
        setError(false);
        setEmpty(false);

        searchAlbums(query, offset)
          .then((albumsData) => {
            const newAlbums = mapAlbumsItems(albumsData.items);
            setAlbums((prevAlbums) => {
              return filterById([...prevAlbums, ...newAlbums]);
            });
            setNext(albumsData.next !== null);
            setLoading(false);
            setEmpty(albumsData.next === null && 
              albums.length + newAlbums.length === 0);
          })
          .catch((error) => {
            handleError();
          })
      }, 1000);

      return () => clearTimeout(getAlbumsData);
    }
  }, [query, offset, token]);

  return { loading, error, empty, albums, next };
}