import { Fab, Zoom, useScrollTrigger } from "@mui/material";
import React from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const ScrollToTop = () => {
    const trigger = useScrollTrigger({threshold:300});
  return (
    <Zoom in={trigger}>
      <Fab
      onClick={()=>{
        window.scrollTo(0,0);
      }}
        variant="extended"
        size="small"
        sx={{ position: "fixed", bottom: 33, right: 33 }}
        color="primary"
        aria-label="add"
      >
        <KeyboardArrowUpIcon fontSize="medium" />
      </Fab>
    </Zoom>
  );
};
export default ScrollToTop;
