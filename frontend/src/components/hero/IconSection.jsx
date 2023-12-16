import { Box, Container, Divider, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import CreditScoreOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import AccessAlarmOutlinedIcon from "@mui/icons-material/AccessAlarmOutlined";
const IconSection = () => {
  const theme=useTheme()
  return (
    <Container className=""/*  sx={{bgcolor:
    theme.palette.mode === "light"? "#fff" : "#000"}} */
    sx={{mt:3,bgcolor:theme.palette.mode ==="dark"?"#000":"#fff"}}
    >
      <Stack divider={useMediaQuery('(min-width:600px)')? (<Divider orientation="vertical" flexItem/>) :null}  
      sx={{
      flexWrap:"wrap"}} 
      direction={"row"} 
      alignItems={"center"}
      >
        <MyBox 
          icon={<ElectricBoltIcon />}
          title={"Fast Delivery"}
          subTitle={"Start from $10"}
        />
        <MyBox
          icon={<WorkspacePremiumOutlinedIcon />}
          title={"Money Guarantee"}
          subTitle={"7 Days Back"}
        />
        <MyBox
          icon={<AccessAlarmOutlinedIcon />}
          title={"365 Days"}
          subTitle={"For free return"}
        />
        <MyBox
          icon={<CreditScoreOutlinedIcon />}
          title={"Payment"}
          subTitle={"Secure system"}
        />
      </Stack>
    </Container>
  );
};
export default IconSection;

const MyBox = ({ icon, title, subTitle }) => {
  const theme = useTheme();
  return (
    <Box 
    className=""
    sx={{
        width:"250px",
        display:"flex",
        flexGrow:1,
        alignItems:"center",
        gap:3,
        py:1.6,
        justifyContent:useMediaQuery('(min-width:600px)') ? "center" : "left",
    }}
    >
      {icon}
      <Box >
        <Typography variant="body1">{title}</Typography>
        <Typography
          sx={{
            fontWeight: 300,
            color: theme.palette.text.secondary,
          }}
          variant="body1"
        >
          {subTitle}
        </Typography>
      </Box>
    </Box>
  );
};
