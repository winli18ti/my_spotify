import { useStateProvider } from "context";
import React, { useCallback, useEffect, useRef, useState } from "react";
import useTrackSearch from "./useTrackSearch";
import { TRACK_LIMIT } from "api";
import TracksList from "./TracksList";
import { EmptySearch, Error } from "features/response";
import SkeletonTracks from "./SkeletonTracks";

export default function SearchTracks() {
  const [{ search }] = useStateProvider();
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    setOffset(0);
  }, [search]);

  const {
    tracks,
    next,
    loading,
    error,
    empty
  } = useTrackSearch(search, offset);

  const observer = useRef();
  const lastRef = useCallback(node => {
    if (loading)  return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && next) {
        setOffset(prevOffset => prevOffset + TRACK_LIMIT);
      }
    })
    if (node) observer.current.observe(node);
  }, [loading, next]);

  return (
    <>
      {
        tracks.length > 0 && <TracksList tracks={tracks} lastRef={lastRef}/>
      }
      {
        loading && <SkeletonTracks offset={offset} />
      }
      {
        empty && <EmptySearch type="songs" search={search}/>
      }
      {
        error && <Error/>
      }
    </>
  );
}