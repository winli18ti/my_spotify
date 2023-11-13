export const overflowStyle = {
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  WebkitLineClamp: "1",
  WebkitBoxOrient: "vertical",
};

export const overflowStyle2 = {
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  WebkitLineClamp: "2",
  WebkitBoxOrient: "vertical",
};

export const titleLinkStyle = {
  textDecoration: "none", 
  "&:hover": {
    textDecoration: "underline",
  }
}

export const linkStyle = { 
  textDecoration: "none", 
  "&:hover": {
    color: "white",
    textDecoration: "underline",
  }
};

export const circleStyle = { 
  px: 1, 
  pt: 1.5,
};

export const hoverStyle = {
  "&:hover": { bgcolor: "#282828" }
}

export const playingStyle = {
  color: "#1ed760",
};

export const largeImageStyle = {
  width: { xs: 200, lg: 250 }, height: { xs: 200, lg: 250 }
}

export const buttonStyle = {
  textTransform: "none",
  fontWeight: "bold",
  py: 1.5,
  px: 3,
  borderRadius: "50px"
}

export const smallButtonStyle = {
  textTransform: "none",
  fontWeight: "bold",
  borderRadius: "50px"
}

export const greenButtonStyle = {
  textTransform: "none",
  fontWeight: "bold",
  py: 1.5,
  px: 4,
  borderRadius: "50px",
  bgcolor: "#1ed760",
  "&:hover": {
    bgcolor: "#1ed760"
  }
}

export const scrollbarStyle = {
  "&::-webkit-scrollbar": {
    width: "0.7rem",
    "&-thumb": {
      backgroundColor: "rgba(255, 255, 255, 0.6)",
    }
  },
}

export const displayStyle = {
  display: {
    xs: "none",
    md: "block"
  }
}