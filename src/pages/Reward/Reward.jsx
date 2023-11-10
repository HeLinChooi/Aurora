import React from "react";
import PageLayout from "../../components/PageLayout";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";
import IconBar from "../../components/IconBar/IconBar";
import TriggerIcon from "@Assets/footstep.png";
import TrackIcon from "@Assets/friendship.png";
import ReflectIcon from "@Assets/Reflect.png";
import { useNavigate } from "react-router";
import CalenderImage from "@Assets/Calendar.png";

const Reward = () => {
  const navigate = useNavigate();

  return (
    <PageLayout >
      <Grid container spacing={2} sx={{ px: 1 }}>
        <Box sx={{ pt: 2, px: 2 }}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            pt={2}
          >
            <Typography
              variant="h1" fontWeight="bold" textTransform="capitalize">
              {"Streak Calender"}
            </Typography>
          </Box>
          <Box mt={1} lineHeight={1}>
            <Typography variant="body1" color="text" fontWeight="light">
              {"Keep going to become a better version of yourself!"}
            </Typography>
          </Box>
        </Box>
        <Grid item xs={12} md={6}>
          <img src={CalenderImage} alt="CalenderImage" style={{ width: "100%", height: "100%", marginBottom: 6 }} />
        </Grid>
        <Grid item xs={12} md={6} container justifyContent="center">
          <Grid item xs={12} md={6}>
            <IconBar
              icon={TriggerIcon}
              title={"First Step"}
              description="A journey of a thousand miles begins with a single step."
              backgroundColor="#FEFCFF"
              titleAtRight
            />
            <IconBar
              icon={TrackIcon}
              title={"Make Your First Friend"}
              description="The more the merrier!"
              backgroundColor="#FEFCFF"
              titleAtRight
            />
          </Grid>
        </Grid>
      </Grid>
    </PageLayout>
  );
};

export default Reward;
