import React from "react";
import PageLayout from "@Components/PageLayout";
import Grid from "@mui/material/Grid";
import MDNFTList from "@Components/MDNFTList";
import "./Home.scss";
import nftAccessLog from "@Mock/nftAccessLog";
import nftList from "@Mock/nftList";
import { Typography } from "@mui/material";

const Home = () => {
  return (
    <PageLayout title={"Home"}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography
            variant="h1"
            fontWeight="bold"
            textTransform="capitalize"
            textAlign="center" // Add this line to center the text
            sx={{ pt: 1 }}
          >
            Save RM3000 in 6 Months
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
            Every Ringgit Saved is A Step Closer to the Aspiration You Hold
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <MDNFTList title="My Progress" list={nftList} noViewMore />
        </Grid>
      </Grid>
    </PageLayout>
  );
};

export default Home;
