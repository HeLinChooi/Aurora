import React from "react";
import PageLayout from "../../components/PageLayout";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";
import IconBar from "../../components/IconBar/IconBar";
import TriggerIcon from "@Assets/Trigger.png";
import TrackIcon from "@Assets/Track.png";
import ReflectIcon from "@Assets/Reflect.png";
import { useNavigate } from "react-router";

const NFT = () => {
  const navigate = useNavigate();

  return (
    <PageLayout showHeader={false} showBottom={false} headerTitle={"Habit Details"} titleIsGrey>
      <Grid container spacing={2} sx={{ px: 1 }}>
        <Box sx={{ p: 2 }}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            pt={2}
          >
            <Typography
              variant="h1" fontWeight="bold" textTransform="capitalize">
              {"Need vs. Want Challenge"}
            </Typography>
          </Box>
          <Box mt={1} lineHeight={1}>
            <Typography variant="body1" color="text" fontWeight="light">
              {"This Habit encourages you to distinguish between necessities and desires in your daily spending, fostering more mindful and financially savvy habits."}
            </Typography>
          </Box>
        </Box>
        <Grid item xs={12} md={6}>
          <IconBar
            icon={TriggerIcon}
            title={"Trigger"}
            description="This is a brief description of the habit."
            backgroundColor="#FEFCFF"
          />
          <IconBar
            icon={TrackIcon}
            title={"Track"}
            description="This is a brief description of the habit."
            backgroundColor="#FEFCFF"
          />
          <IconBar
            icon={ReflectIcon}
            title={"Reflect"}
            description="This is a brief description of the habit."
            backgroundColor="#FEFCFF"
          />
        </Grid>
        <Grid item xs={12} md={6} container justifyContent="center">
          <Grid item>
            <Button variant="contained" color="primary" sx={{ color: 'black' }} >
              Edit
            </Button>

            <Button variant="contained" color="primary" sx={{ color: 'black', ml: 2 }} 
            onClick={() => {
              navigate("/");
            }}
            >
              Done
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </PageLayout>
  );
};

export default NFT;
