import React from "react";
import { styled } from "@mui/material/styles";
import PageLayout from "../../components/PageLayout";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import profilePicture from "@Assets/profilePicture.jpg";
import "./Profile.scss";
import { Divider, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import { useTheme } from "@emotion/react";
import ProfileIconImage from '@Assets/boy.png';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ProfileGridItem = ({ name, unit, value }) => {
  return (
    <Grid item xs={6} md={4} lg={2}>
      <Item>
        <span className="profileInfoKey">{name}</span>
        <br />
        <span className="profileInfoValue">{value}</span>
        <span className="profileInfoUnit">{unit}</span>
      </Item>
    </Grid>
  );
};

const Profile = () => {
  // const profileInfo = {
  //   weight: 60,
  //   height: 152,
  //   bmi: 25.96,
  //   bloodType: "A",
  //   status: "OKU",
  // };

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <PageLayout>
      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <Stack sx={{ mt: 2, mb: 3 }} alignItems="center">
            <Avatar
              alt="Remy Sharp"
              src={ProfileIconImage}
              sx={{ width: 96, height: 96, mb: 1 }}
            />
            <span>Roland</span>
            <small>roland@gmail.com</small>
          </Stack>

          <Grid container spacing={2} justifyContent="center">
            <ProfileGridItem
              name="Points"
              unit="pt"
              value={"256"}
            />
            <ProfileGridItem
              name="League"
              value={"Silver"}
            />
            {/* <ProfileGridItem name="BMI" value={profileInfo.bmi} /> */}
            {/* <ProfileGridItem name="Blood Type" value={profileInfo.bloodType} /> */}
            {/* <ProfileGridItem name="Status" value={profileInfo.status} /> */}
            <Grid item xs={12} md={4} lg={2}>
              <Item>
                <span className="profileInfoKey">Longest Streak: </span>
                <br style={{ display: matches ? "block" : "none" }} />
                <span className="profileInfoValue">{"10 Days"}</span>
              </Item>
            </Grid>
          </Grid>
        </div>
        
        <Stack
          sx={{ mt: 3 }}
          direction="row"
          justifyContent="center"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={2}
        >
          <small>Terms of Service</small>
          <small>Privacy Policy</small>
        </Stack>
      </Box>
    </PageLayout>
  );
};

export default Profile;
