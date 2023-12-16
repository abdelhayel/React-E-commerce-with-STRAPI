import { useContext, useState } from "react";
import { ColorModeContext } from "../../theme";
import { Box, Container, IconButton, Stack, Typography, useTheme } from "@mui/material";
import { DarkModeOutlined, ExpandMore, LightModeOutlined } from "@mui/icons-material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
const options = [
  '',
  'AR',
  'EN',
  'FR',
  'DE'
];
export default function Header1() {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box
      sx={{
        bgcolor: "#2b3445",
        py:"4px",
        borderBottomRightRadius:14,
        borderBottomLeftRadius:14
      }}
    >

      <Stack direction={"row"} alignItems={"center"} sx={{paddingLeft:"24px",paddingRight:"24px"}}>
        <Typography
          sx={{
            mr: 2,
            p: "3px 10px",
            bgcolor: "#d23f57",
            borderRadius: "12px",
            fontSize: "10px",
            fontWeight: "bold",
            color: "#fff",
          }}
          variant="body2"
        >
          HOT
        </Typography>
        <Typography
          sx={{
            fontSize: "12px",
            fontWeight: 300,
            color: "#fff",
          }}
          variant="body2"
        >
          Free Express Sipping
        </Typography>
        <Box flexGrow={1} />
        <div>
          {theme.palette.mode === "light" ? (
            <IconButton
              onClick={() => {
                localStorage.setItem(
                  "mode",
                  theme.palette.mode === "dark" ? "light" : "dark"
                );
                colorMode.toggleColorMode();
              }}
              color="success"
            >
              <LightModeOutlined sx={{fontSize:"16px",color:"#fff"}}/>
            </IconButton>
          ) : (
            <IconButton
              onClick={() => {
                localStorage.setItem(
                  "mode",
                  theme.palette.mode === "dark" ? "light" : "dark"
                );
                colorMode.toggleColorMode();
              }}
              color="secondary"
            >
              <DarkModeOutlined sx={{fontSize:"16px",color:"#fff"}} />
            </IconButton>
          )}
        </div>

        <List
          component="nav"
          aria-label="Device settings"
          sx={{ p:0,m:0}}
        >
          <ListItem
    
            id="lock-button"
            aria-haspopup="listbox"
            aria-controls="lock-menu"
            aria-label=""
            aria-expanded={open ? "true" : undefined}
            onClick={handleClickListItem}
            sx={{"&:hover":{cursor:"pointer"} }}
          >
            <ListItemText
            sx={{ ".MuiTypography-root":{fontSize:"10px",color:"#fff"}}}
              primary=""
              secondary={options[selectedIndex]}
            />
            <ExpandMore sx={{fontSize:"16px",color:"#fff"}}/>
          </ListItem>
        </List>
        <Menu
          id="lock-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "lock-button",
            role: "listbox",
          }}
        >
          {options.map((option, index) => (
            <MenuItem
              sx={{fontSize:"11px",p:"3px 10px",minHeight:"10px"}}
              key={option}
              disabled={index === 0}
              selected={index === selectedIndex}
              onClick={(event) => handleMenuItemClick(event, index)}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>
        <TwitterIcon
          sx={{
            margin:"12px",
            fontSize: "16px",
            color: "#fff",
          }}
        />
        <FacebookIcon
          sx={{
            margin:"12px",
            fontSize: "16px",
            color: "#fff",
          }}
        />
        <InstagramIcon
          sx={{
            margin:"12px",
            fontSize: "16px",
            color: "#fff",
          }}
        />
      </Stack>
      
      
    </Box>
  );
}
