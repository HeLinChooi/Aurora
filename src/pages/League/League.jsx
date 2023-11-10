import React from "react";
import PageLayout from "../../components/PageLayout";
import Grid from "@mui/material/Grid";
import "./League.scss";
import { Box, Typography } from "@mui/material";
import CoinIconImage from '../../assets/bg_removed_silver_league.png';
import ProgressBar from "../../components/ProgressBar";

const League = () => {
  return (
    <PageLayout title={"League"}>
      <Grid container spacing={2}>

        <Grid item xs={12}>
          <Typography
            variant="h1"
            fontWeight="bold"
            textTransform="capitalize"
            textAlign="center" // Add this line to center the text
            sx={{ pt: 4 }}
          >
            Silver League
          </Typography>
          <Typography
            variant="h4"
            // fontWeight="bold"
            textTransform="capitalize"
            textAlign="center" // Add this line to center the text
            sx={{
              pt: 1, // existing top padding
              pb: 2, // padding bottom
              pl: 2, // padding left
              pr: 2, // padding right
            }}
          >
            Your Path to Greatness! Keep pushing forward, each step here brings you closer to the pinnacle of success.
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>

            <img src={CoinIconImage} alt="Coin Icon" style={{ width: '90%', height: 'auto' }} />
          </Box>
        </Grid>
        {/* <Grid item xs={12} md={6}>
          <Box sx={{ width: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <ProgressBar
              variant="determinate"
              value={50}
              barcolor="#FFD700" // Gold color
            />
          </Box>
        </Grid> */}
      </Grid>
    </PageLayout>
  );
};

export default League;
