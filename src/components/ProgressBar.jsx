import * as React from "react";
import { styled } from "@mui/material/styles";
import { Box, Typography, Badge } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import DiamondIcon from '@mui/icons-material/Diamond';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { useTheme } from "@mui/material/styles";

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

export default ProgressBar;