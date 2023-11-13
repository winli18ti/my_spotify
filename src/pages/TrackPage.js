import { Box } from "@mui/material";
import { getArtists, getRecommendations, getTrack } from "api/services";
import { useStateProvider } from "context";
import { TrackDetail } from "features/tracks/detail";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { filterById, mapArtistsItems, mapTrack, mapTracksItems, useErrorHandler } from "utils";

export default function TrackPage() {
  const [{ token }] = useStateProvider();
  const { id } = useParams();
  const [track, setTrack] = useState({});
  const [artists, setArtists] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const { handleError } = useErrorHandler();

  useEffect(() => {
    Promise.all([getTrack(id), getRecommendations(id)])
      .then(([trackData, tracksData]) => {
        const newTrack = mapTrack(trackData);
        setTrack(newTrack);

        const newRecommendations = filterById(mapTracksItems(tracksData));
        setRecommendations(newRecommendations);
      })
      .catch((error) => {
        handleError();
      })
  }, [id, token]);

  useEffect(() => {
    if (Object.keys(track).length > 0) {
      const artistsId = track.artists?.map((artist) => artist.id);
      getArtists(artistsId)
        .then((artistsData) => {
          const newArtists = filterById(mapArtistsItems(artistsData));
          setArtists(newArtists);
        })
    }
  }, [track]);

  return (
    <>
      {
        (Object.keys(track).length > 0 && artists.length > 0) ? 
        <TrackDetail track={track} artists={artists} 
          recommendations={recommendations}/>
        : <Box height="100vh"/>
      }
    </>
  );
}