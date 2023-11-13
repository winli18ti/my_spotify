import { Box, Button, Stack, Typography } from "@mui/material";
import { reducerCases, useStateProvider } from "context";
import { SearchAlbums } from "features/albums/list";
import { SearchArtists } from "features/artists/list";
import { SearchTracks } from "features/tracks/list";

const buttonStyle = {
  bgcolor: "#282828",
  color: "white",
  textTransform: "none",
  borderRadius: "50px"
};

const buttonActiveStyle = {
  bgcolor: "white",
  color: "black",
  textTransform: "none",
  borderRadius: "50px",
  "&:hover": {
    bgcolor: "white",
    color: "black",
  }
}

export default function SearchPage() {
  const [{ search, searchType }, dispatch] = useStateProvider();

  const handleType = (searchType) => {
    dispatch({ type: reducerCases.SEARCH_TYPE, searchType });
  }

  return (
    <>
    {
      search ?
      <>
        <Stack direction="row" spacing={2} position="sticky" py={1} 
          height={48} top={64} bgcolor="#121212" zIndex={2}>
          <Button sx={searchType === "artists" ? 
            buttonActiveStyle : buttonStyle} 
            onClick={() => handleType("artists")}>
            Artists
          </Button>
          <Button sx={searchType === "tracks" ? 
            buttonActiveStyle : buttonStyle} 
            onClick={() => handleType("tracks")}>
            Songs
          </Button>
          <Button sx={searchType === "albums" ? 
            buttonActiveStyle : buttonStyle} 
            onClick={() => handleType("albums")}>
            Albums
          </Button>
        </Stack>
        <>
        {
          searchType === "artists" ? <SearchArtists/> : 
          searchType === "tracks" ? <SearchTracks/> :
          searchType === "albums" ? <SearchAlbums/> :
          <></>
        }
        </>
      </> :
      <Box height="80vh" sx={{ display: "flex", 
        alignItems: "center", justifyContent: "center" }}>
        <Typography variant="h4" textAlign="center">
          Your search results will show here.
        </Typography>
      </Box>
    }
    </>
  );
}