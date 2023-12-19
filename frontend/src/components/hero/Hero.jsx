import {
  Box,
  Button,
  Container,
  Link,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./Slider.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import IconSection from "./IconSection";
const mySlider = [
  { text: "MEN", link: "./images/banner-15.jpg" },
  { text: "WOMEN", link: "./images/banner-25.jpg" },
  { text: "CHILD", link: "./images/banner-30.jpg" },

]
const Hero = () => {
  const theme = useTheme();
  return (
    <Container className="" >
     <Box  sx={{ pt:2,mt: 5, display: "flex", alignItems: "center", gap: 3 }}>
       <Swiper
         dir="rtl"
         navigation={true}
         loop={true}
         pagination={{
           clickable: true,
         }}
         modules={[Navigation, Pagination]}
         className="mySwiper"
       >
         {mySlider.map((item) => {
           return (
             <SwiperSlide key={item.link} className="parent-slider">
               <img src={item.link} alt="" />
               <Box
                 className=""
                 /* sx={{position:"absolute",top:80,left:"10%",textAlign:"left"}} */
                 sx={{
                   [theme.breakpoints.up("sm")]: {
                     position: "absolute",
                     top: 80,
                     left: "10%",
                     textAlign: "left",
                   },
                   [theme.breakpoints.down("sm")]: {
                     pt: 4,
                     pb: 6,
                   },
                 }}
               >
                 <Typography
                   sx={{
                     color: "#222",
                   }}
                   variant="h5"
                 >
                   LIFESTYLE COLLECTION
                 </Typography>
                 <Typography
                   sx={{
                     color: "#222",
                     fontWeight: 400,
                     my: 1,
                   }}
                   variant="h3"
                 >
                   {item.text}
                 </Typography>
                 <Stack
                   sx={{
                     justifyContent: {xs:"center",sm:"left"},
                   }}
                   direction={"row"}
                   alignItems={"center"}
                 >
                   <Typography color={"#D23F57"} variant="h4">
                     30% OFF
                   </Typography>
                   <Typography color={"#333"} mr={1} variant="h4">
                     SALE UP TO
                   </Typography>
                 </Stack>
                 <Typography
                   sx={{
                     color: "#000",
                     fontWeight: 300,
                     my: 1,
                   }}
                   variant="body1"
                 >
                   Get Free Shipping on orders overs $99.00
                 </Typography>
                 <Button
                   sx={{
                     px: 5,
                     py: 1,
                     mt: 2,
                     backgroundColor: "#222",
                     boxShadow: "0px 4px 16px rgba{43,52,69,0.1}",
                     color: "#fff",
                     borderRadius: "1px",
                     "&:hover": {
                       bgcolor: "#151515",
                       boxShadow: "0px 4px 16px rgba{43,52,69,0.1}",
                     },
                   }}
                   variant="contained"
                 >
                   Shop now
                 </Button>
               </Box>
             </SwiperSlide>
           );
         })}
       </Swiper>
      
       <Box
         className=""
         sx={{ display: { xs: "none", md: "block", minWidth: "26.9%" } }}
       >
         <Box sx={{ position: "relative" }}>
           <img width={"100%"} src=".\images\banner-17.jpg" alt="" />
           <Stack
             sx={{
               position: "absolute",
               top: "50%",
               transform: "translateY(-50%)",
               left: 31,
             }}
           >
             <Typography
               variant="caption"
               sx={{
                 color: "#2b3445",
                 fontSize: "18px",
               }}
             >
               NEW ARRIVALS
             </Typography>
             <Typography
               variant="h6"
               sx={{
                 color: "#2b3445",
                 lineHeight: "16px",
                 mt: 1,
               }}
             >
               SUMMER
             </Typography>
             <Typography
               variant="h6"
               sx={{
                 color: "#2b3445",
               }}
             >
               SALE 20% OFF
             </Typography>
             <Link
               sx={{
                 color: "#2b3445",
                 display: "flex",
                 alignItems: "center",
                 gap: "5px",
                 transition: "0.2s",
                 "&:hover": {
                   color: "#d23f57",
                 },
               }}
               href="a"
               underline="none"
             >
               Shop Now
               <ArrowForwardIcon sx={{ fontSize: "13px" }} />
             </Link>
           </Stack>
         </Box>
         <Box sx={{ position: "relative" }} className="">
           <img width={"100%"} src=".\images\banner-16.jpg" alt="" />
           <Stack
             sx={{
               position: "absolute",
               top: "50%",
               transform: "translateY(-50%)",
               left: 31,
             }}
           >
             <Typography
               variant="caption"
               sx={{
                 color: "#2b3445",
                 fontSize: "18px",
               }}
             >
               GAMING 4K
             </Typography>
             <Typography
               variant="h6"
               sx={{
                 color: "#2b3445",
                 lineHeight: "16px",
                 mt: 1,
               }}
             >
               DESKTOP &
             </Typography>
             <Typography
               variant="h6"
               sx={{
                 color: "#2b3445",
               }}
             >
               LAPTOPS
             </Typography>
             <Link
               sx={{
                 color: "#2b3445",
                 display: "flex",
                 alignItems: "center",
                 gap: "5px",
                 transition: "0.2s",
                 "&:hover": {
                   color: "#d23f57",
                 },
               }}
               href="a"
               underline="none"
             >
               Shop Now
               <ArrowForwardIcon sx={{ fontSize: "13px" }} />
             </Link>
           </Stack>
         </Box>
       </Box>
     </Box>
      <IconSection/>
    </Container>
  );
};
export default Hero;
