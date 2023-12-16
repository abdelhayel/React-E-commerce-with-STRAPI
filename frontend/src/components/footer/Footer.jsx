import { Box, Typography } from "@mui/material";
import React from "react";

const footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "#2b4345",
        py: 1.3,
        mt:3,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
      }}
    >
      <Typography
        variant="h6"
        justifyContent={"center"}
        display={"flex"}
        alignItems={"center"}
        color={"HighlightText"}
        sx={{ fontSize: 18 }}
      >
        Designed and developped by Abdelhay
      </Typography>
    </Box>
  );
};
export default footer;
