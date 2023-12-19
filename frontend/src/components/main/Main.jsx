import {
  Box,
  Button,
  CircularProgress,
  Container,
  Dialog,
  IconButton,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useTheme } from "@emotion/react";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import { Close } from "@mui/icons-material";
import ProductDetails from "./ProductDetails";
import { AnimatePresence, motion } from "framer-motion";
import { useGetproductByNameQuery } from "../../Redux/product";
const Main = () => {
  const handleAlignment = (event, newValue) => {
    if (newValue !== null) {
      setmyData(newValue);
    }
  };
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const allProductAPI = "products?populate=*";
  const menCategoryAPI = "products?populate=*&filters[category][$eq]=men";
  const womenCategoryAPI = "products?populate=*&filters[category][$eq]=women";
  const [myData, setmyData] = React.useState(allProductAPI);

  const { data, error, isLoading } = useGetproductByNameQuery(myData);
  const [clickedProduct, setclickedProduct] = useState({});
  if (data) {
    console.log(data.data);
  }
  if (isLoading) {
    return (
      <Box sx={{ py: 11, textAlign: "center", width: "100%" }}>
        <CircularProgress />
      </Box>
    );
  }
  if (error) {
    // @ts-ignore
    return (
      <Container className="border" sx={{ py: 11, textAlign: "center" }}>
        <Typography variant="h6">
          {
            // @ts-ignore
            error.error
          }
        </Typography>
        <Typography variant="h6">Please try again later</Typography>
      </Container>
    );
  }

  if (data) {
    return (
      <Container sx={{ mt: 10 }}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          flexWrap={"wrap"}
          gap={3}
        >
          <Box>
            <Typography variant="h6">Selected Products</Typography>
            <Typography fontWeight={300} variant="body1">
              All our new arrivals in a exclusive brand selection
            </Typography>
          </Box>
          <ToggleButtonGroup
            sx={{
              ".Mui-selected": {
                color: "#e95660",
                border: "1px solid rgba(233.69,96,0.5) !important",
                backgroundColor: "initial",
              },
            }}
            color="error"
            value={myData}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
          >
            <ToggleButton
              sx={{
                // @ts-ignore
                color: theme.palette.text.primary,
              }}
              className="myButton"
              value={allProductAPI}
              aria-label="left aligned"
            >
              All Products
            </ToggleButton>
            <ToggleButton
              className="myButton"
              sx={{
                mx: "16px !important",
                // @ts-ignore
                color: theme.palette.text.primary,
              }}
              value={menCategoryAPI}
              aria-label="centered"
            >
              MEN Category
            </ToggleButton>
            <ToggleButton
              sx={{
                // @ts-ignore
                color: theme.palette.text.primary,
              }}
              className="myButton"
              value={womenCategoryAPI}
              aria-label="right aligned"
            >
              WOMEN Category
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>
        <Stack
          direction={"row"}
          flexWrap={"wrap"}
          justifyContent={"space-between"}
        >
          <AnimatePresence>
            {data.data.map((item) => {
              return (
                <Card
                  component={motion.section}
                  layout
                  initial={{ transform: "scale(0)" }}
                  animate={{ transform: "scale(1)" }}
                  transition={{duration:1.6,type: "spring",
                  stiffness: 500}}
                  key={item}
                  sx={{
                    ":hover .MuiCardMedia-root": {
                      scale: "1.1",
                      transition: "0.35s",
                      rotate: "1deg",
                    },
                    borderRadius: "16px",
                    maxWidth: 333,
                    mt: 6,
                  }}
                >
                  <CardMedia
                    sx={{ height: 277 }}
                    // @ts-ignore
                    image={`${item.attributes.productimg.data[0].attributes.url}`}
                    title="green iguana"
                  />
                  <CardContent>
                    <Stack
                      direction={"row"}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                    >
                      <Typography gutterBottom variant="h6" component="div">
                        {item.attributes.productTitle}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.attributes.productPrice} <span color="red">DH</span>
                      </Typography>
                    </Stack>
            
                    <Typography gutterBottom variant="body1" component="div">
                      {item.attributes.productDescription}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: "space-between" }}>
                    <Button
                      sx={{ textTransform: "capitalize" }}
                      size="large"
                      onClick={() => {
                        handleClickOpen();
                        setclickedProduct(item);
                      }}
                    >
                      <AddShoppingCartOutlinedIcon
                        sx={{ mr: 1 }}
                        fontSize="small"
                      />
                      Add To Cart
                    </Button>
            
                    <Rating
                      precision={0.5}
                      name="read-only"
                      value={item.attributes.productRating}
                      readOnly
                    />
                  </CardActions>
                </Card>
              );
            })}
          </AnimatePresence>
        </Stack>
        <Dialog
          sx={{
            ".MuiPaper-root": { minWidth: { xs: "100%", md: 800 } },
          }}
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <IconButton
            sx={{
              ":hover": { rotate: "180deg", color: "red", transition: "0.3s" },
              position: "absolute",
              top: 0,
              right: 7,
            }}
            onClick={handleClose}
          >
            <Close />
          </IconButton>
          <ProductDetails clickedProduct={clickedProduct} />
        </Dialog>
      </Container>
    );
  }
};
export default Main;
