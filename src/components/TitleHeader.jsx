import * as React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function TitleHeader({ headerTitle, titleIsGrey }) {
  const theme = useTheme();
  return (
    <Box sx={{
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      padding: '12px 20px',
      backgroundColor: "#ffe9ad",
      justifyContent: 'center',
    }}>

      <Typography
        variant="h1"
        sx={{
          fontWeight: 'bold',
          color: titleIsGrey ? theme.palette.grey[500] : 'black',
        }}
      >
        {headerTitle}
      </Typography>
    </Box>
  );
}
