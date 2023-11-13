import React, { useStateProvider } from "context";
import { useCallback, useEffect, useRef, useState } from "react";
import useArtistSearch from "./useArtistSearch";
import { ARTIST_LIMIT } from "api";
import ArtistsList from "./ArtistsList";
import { EmptySearch, Error } from "features/response";

export default function SearchArtists() {
  const [{ search }] = useStateProvider();
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    setOffset(0);
  }, [search]);

  const {
    artists,
    next,
    loading,
    error,
    empty
  } = useArtistSearch(search, offset);

  const observer = useRef();
  const lastRef = useCallback(node => {
    if (loading)  return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && next) {
        setOffset(prevOffset => prevOffset + ARTIST_LIMIT);
      }
    })
    if (node) observer.current.observe(node);
  }, [loading, next]);

  return (
    <>
      <ArtistsList artists={artists} lastRef={lastRef} loading={loading}/>
      {
        empty && <EmptySearch type="artists" search={search}/>
      }
      {
        error && <Error/>
      }
    </>
  );
}