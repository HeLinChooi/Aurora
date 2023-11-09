import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import ScienceIcon from "@mui/icons-material/Science";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ChestIcon from "@Assets/treasure-chest.png";
import { useNavigate, useLocation } from "react-router";


import AuroraIconImage from '../assets/northern-lights.png'; 
import RewardIconImage from '../assets/treasure-chest.png'; 
import LeagueImage from '../assets/defence.png'; 
import ProfileIconImage from '../assets/boy.png'; 
const valueMap = ["/", "/explore", "/research", "/profile"];
export default function SimpleBottomNavigation() {
  const location = useLocation();
  const pageIdx = valueMap.indexOf(location.pathname);
  const [value, setValue] = React.useState(pageIdx);
  const navigate = useNavigate();

  // if (value === -1) {
  //   return <></>;
  // }
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        borderTop: "1px solid #bdbdbd",
        zIndex: 2,
      }}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          navigate(valueMap[newValue]);
        }}
      >
        <BottomNavigationAction icon={<img src={AuroraIconImage} alt="Home Icon" style={{ width: 24, height: 24 }} />} />
        <BottomNavigationAction icon={<img src={RewardIconImage} alt="Reward Icon" style={{ width: 24, height: 24 }} />} />
        <BottomNavigationAction icon={<img src={LeagueImage} alt="League Icon" style={{ width: 24, height: 24 }} />} />
        <BottomNavigationAction icon={<img src={ProfileIconImage} alt="Profile Icon" style={{ width: 24, height: 24 }} />} />
      </BottomNavigation>
    </Box>
  );
}
