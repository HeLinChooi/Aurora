import * as React from "react";
import { styled } from "@mui/material/styles";
import { Box, Typography, Badge } from "@mui/material";
// import StarIcon from '@mui/icons-material/Star';
// import DiamondIcon from '@mui/icons-material/Diamond';
// import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { useTheme } from "@mui/material/styles";
import ProgressBar from "./ProgressBar";
import StarIcon from '../assets/star.png'; 
import DiamondIcon from '../assets/diamond.png'; 
import LocalFireDepartmentIcon from '../assets/flame.png'; 

const ProgressContainer = styled(Box)(({ theme }) => ({
  // display: 'flex',
  // alignItems: 'center',
}));



export default function GameHeader() {
  const [experienceProgress, setExperienceProgress] = React.useState(50);
  const [currencyProgress, setCurrencyProgress] = React.useState(30);
  const [streakCount, setStreakCount] = React.useState(5);
  const theme = useTheme();
  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 20px', backgroundColor: "#ffe9ad" }}>
      {/* <ProgressContainer> */}
      <img src={StarIcon} alt="Profile Icon" style={{ width: 24, height: 24, zIndex: 1 }} />

      {/* <StarIcon sx={{ border: '1px solid white', borderRadius: '50%' }} style={{ color: 'gold', backgroundColor: "white", zIndex: 1 }} /> */}
      <ProgressBar
        variant="determinate"
        value={experienceProgress}
        barcolor="#FFD700" // Gold color
        />
      {/* </ProgressContainer> */}
      {/* <ProgressContainer> */}
      {/* <ProgressBar
          variant="determinate"
          value={currencyProgress}
          barcolor="#1e90ff" // Blue color
        /> */}
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        {/* <DiamondIcon style={{ color: '#1e90ff' }} /> */}
        <img src={DiamondIcon} alt="Profile Icon" style={{ width: 24, height: 24 }} />
        <Typography variant="body1" sx={{ fontWeight: 'bold', color: 'info.main', marginLeft: 0.4 }}>
          {streakCount}
        </Typography>
      </Box>
      {/* </ProgressContainer> */}
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <img src={LocalFireDepartmentIcon} alt="Profile Icon" style={{ width: 24, height: 24 }} />

        {/* <LocalFireDepartmentIcon color="error" /> */}
        <Typography variant="body1" sx={{ fontWeight: 'bold', color: 'error.main', marginLeft: 0.4 }}>
          {streakCount}
        </Typography>
      </Box>
    </Box>
  );
}
