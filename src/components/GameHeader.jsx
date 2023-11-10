import * as React from "react";
import { styled } from "@mui/material/styles";
import { Box, Typography, Badge } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import DiamondIcon from '@mui/icons-material/Diamond';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { useTheme } from "@mui/material/styles";

const ProgressContainer = styled(Box)(({ theme }) => ({
  // display: 'flex',
  // alignItems: 'center',
}));

const ProgressBar = styled(LinearProgress)(({ theme, barcolor }) => ({
  // flexGrow: 1,
  width: '50%',
  height: 15,
  borderRadius: 5,
  margin: theme.spacing(0, 2, 0, -6),
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: barcolor,
  },
  border: '3px solid #fff',
}));

export default function GameHeader() {
  const [experienceProgress, setExperienceProgress] = React.useState(50);
  const [currencyProgress, setCurrencyProgress] = React.useState(30);
  const [streakCount, setStreakCount] = React.useState(5);
  const theme = useTheme();
  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 20px', backgroundColor: "#ffe9ad" }}>
      {/* <ProgressContainer> */}

      <StarIcon sx={{ border: '1px solid white', borderRadius: '50%' }} style={{ color: 'gold', backgroundColor: "white", zIndex: 1 }} />
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
        <DiamondIcon style={{ color: '#1e90ff' }} />
        <Typography variant="body1" sx={{ fontWeight: 'bold', color: 'info.main', marginLeft: 0.4 }}>
          {streakCount}
        </Typography>
      </Box>
      {/* </ProgressContainer> */}
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <LocalFireDepartmentIcon color="error" />
        <Typography variant="body1" sx={{ fontWeight: 'bold', color: 'error.main', marginLeft: 0.4 }}>
          {streakCount}
        </Typography>
      </Box>
    </Box>
  );
}
