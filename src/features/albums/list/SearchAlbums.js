import React, { useStateProvider } from "context";
import { useCallback, useEffect, useRef, useState } from "react";
import useAlbumSearch from "./useAlbumSearch";
import { ALBUM_LIMIT } from "api";
import AlbumsList from "./AlbumsList";
import { EmptySearch, Error } from "features/response";

export default function SearchAlbums() {
  const [{ search }] = useStateProvider();
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    setOffset(0);
  }, [search]);

  const {
    albums,
    next,
    loading,
    error,
    empty
  } = useAlbumSearch(search, offset);

  const observer = useRef();
  const lastRef = useCallback(node => {
    if (loading)  return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && next) {
        setOffset(prevOffset => prevOffset + ALBUM_LIMIT);
      }
    })
    if (node) observer.current.observe(node);
  }, [loading, next]);

  return (
    <>
      <AlbumsList albums={albums} lastRef={lastRef} loading={loading}/>
      {
        empty && <EmptySearch type="albums" search={search}/>
      }
      {
        error && <Error/>
      }
    </>
  );
}