import { AddShoppingCartOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { useState } from "react";

const ProductDetails = ({ clickedProduct }) => {
  const [alignment, setAlignment] = useState('left');
  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
    
  };
  const [selectedImg, setselectedImg] = useState(0);
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2.5,
        flexDirection: { xs: "column", sm: "row" },
      }}
    >
      <Box sx={{ display: "flex" }}>
        <img
          src={`${clickedProduct.attributes.productimg.data[selectedImg].attributes.url}`}
          width={360}
          alt=""
        />
      </Box>
      <Box sx={{py:2, textAlign: { xs: "center", sm: "left" } }}>
        <Typography variant="h5">
          {" "}
          {clickedProduct.attributes.productTitle}
        </Typography>
        <Typography my={0.4} fontSize={"22px"} color={"crimson"}>
          {clickedProduct.attributes.productPrice} <span>DH</span>
        </Typography>
        <Typography variant="body1">
          {clickedProduct.attributes.productDescription}
        </Typography>
        <Stack
          sx={{ justifyContent: { xs: "center", sm: "left" } }}
          direction={"row"}
          gap={1}
          borderRadius={"5px"}
          my={4}
        >
          <ToggleButtonGroup
            value={selectedImg}
            exclusive
            onChange={handleAlignment}
            sx={{
              ".Mui-selected": {

                borderRadius:"5px !important",
                border: "1px solid royalblue !important",
                backgroundColor: "initial",
                opacity:"1",
              },
            }}

          >
            {clickedProduct.attributes.productimg.data.map((item, index) => {
              return (
                <ToggleButton
                 key={item}
                  value={index}
                  sx={{
                    width:"110px",
                    height:"110px",
                    mx:1,
                    p:"0",
                    opacity:"0.5",
                  }} 
                >
                  <img
                    onClick={() => {
                      setselectedImg(index);
                    }}
                    style={{ borderRadius: 3 }}
                    height={"100%"}
                    width={"100%"}
                    
                    src={item.attributes.url}
                    alt=""
                  />
                </ToggleButton>
              );
            })}
          </ToggleButtonGroup>
        </Stack>
        <Button
          sx={{
            mb: { xs: 1, sm: 0 },
            textTransform: "capitalize",
            variant: "contained",
          }}
        >
          <AddShoppingCartOutlined sx={{ mr: 1 }} fontSize="small" />
          Buy now
        </Button>
      </Box>
    </Box>
  );
};
export default ProductDetails;
