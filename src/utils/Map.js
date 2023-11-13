import { dateDetail, dateTimeFormat, msToTime, msToTimeDetail, songs } from "./Format";

export const mapAlbumsItems = (albumsItems) => {
  return albumsItems?.map((item) => {
    const { id, name, artists, images, release_date, album_type } = item;
    return {
      id: id,
      name: name,
      artists: mapArtistsIdName(artists),
      image: images.length > 0 ? images[0].url : "",
      year: release_date.slice(0, 4),
      album_type: album_type.charAt(0).toUpperCase() + album_type.slice(1),
    };
  });
}

export const mapAlbum = (album) => {
  const { id, name, images, release_date, artists, 
    tracks, total_tracks, copyrights, album_type } = album;

  const totalDurationMs = tracks.items.reduce((sum, item) => {
    return sum + item.duration_ms;
  }, 0);
  
  const mappedTracks = tracks.items?.map((item) => {
    const { id, name, artists, duration_ms, preview_url, track_number } = item;
    return {
      id: id,
      name: name,
      artists: mapArtistsIdName(artists),
      duration: msToTime(duration_ms),
      preview_url: preview_url,
      track_number: track_number
    }
  });


  return {
    id: id,
    name: name,
    image: images.length > 0 ? images[0].url : "",
    release_date: dateDetail(release_date),
    year: release_date.slice(0, 4),
    artists: mapArtistsIdName(artists),
    tracks: mappedTracks,
    total_tracks: songs(total_tracks),
    copyrights: copyrights?.map((copyright) => {
      return copyright.text;
    }),
    total_duration: msToTimeDetail(totalDurationMs),
    album_type: album_type.charAt(0).toUpperCase() + album_type.slice(1),
  };
}

export const mapArtistsItems = (artistsItems) => {
  return artistsItems?.map((item) => mapArtist(item));
}

export const mapArtist = (artist) => {
  const { id , name, images } = artist;
  return {
    id: id,
    name: name,
    image: images?.length > 0 ? images[0].url : ""
  };
}

export const mapTracksItems = (tracksItems) => {
  return tracksItems?.map((item) => mapTrack(item));
}

export const mapTrack = (track) => {
  const { id, name, album, artists, duration_ms, preview_url } = track;
  return {
    id: id,
    name: name,
    album: {
      id: album.id,
      name: album.name,
      image: album.images.length > 0 ? album.images[0].url : "",
      release_date: dateDetail(album.release_date),
      year: album.release_date.slice(0, 4),
    },
    artists: mapArtistsIdName(artists),
    duration: msToTime(duration_ms),
    preview_url: preview_url
  };
}

export const mapCurrentUser = (currentUser) => {
  const { id, display_name, email, uri, images, country } = currentUser;
  return {
    id: id,
    display_name: display_name,
    email: email,
    uri: uri,
    image: images.length > 0 ? images[0].url : "",
    country: country
  };
}

const mapArtistsIdName = (artists) => {
  return artists?.map((artist) => {
    const { id, name } = artist;
    return { id, name };
  });
}

export const mapPlaylists = (playlists) => {
  return playlists?.map((playlist) => {
    const { id, name, images } = playlist;
    return {
      id: id,
      name: name,
      image: images.length > 0 ? images[0].url : "",
    }
  })
}

export const mapPlaylist = (playlist) => {
  const { id, name, images, description, tracks } = playlist;
  const { total } = tracks;

  const totalDurationMs = tracks.items.reduce((sum, item) => {
    return sum + item.track.duration_ms;
  }, 0);

  const mappedTracks = tracks.items.map((item) => {
    const { added_at, track } = item;
    const { album, artists, duration_ms, id, name, preview_url } = track;
    return {
      id: id,
      name: name,
      added_at: dateTimeFormat(new Date(Date.parse(added_at))),
      preview_url: preview_url,
      duration: msToTime(duration_ms),
      artists: mapArtistsIdName(artists),
      album: {
        id: album.id,
        name: album.name,
        image: album.images.length > 0 ? album.images[0].url : "",
      }
    }
  });

  return {
    id: id,
    name: name,
    image: images.length > 0 ? images[0].url : "",
    description: description,
    tracks: mappedTracks,
    total_tracks: total === 0 ? "" : songs(total),
    total_duration: totalDurationMs === 0 ? "" : msToTimeDetail(totalDurationMs),
  }
}