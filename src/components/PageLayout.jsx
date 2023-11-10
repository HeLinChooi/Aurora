import React from "react";
import BottomNavigation from "@Components/BottomNavigation";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import ClippedDrawer from "@Components/SideNav/ClippedDrawer";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import GameHeader from "./GameHeader";
import TitleHeader from "./TitleHeader";

const PageTitle = ({ title }) => {
  if (!title) return <></>;
  return (
    <>
      <Box sx={{ mb: 1, ml: { xs: 0 } }}>
        <Typography
          variant="h2"
          fontWeight="bold"
          textTransform="capitalize"
          sx={{ pt: 1 }}
        >
          {title}
        </Typography>
      </Box>
    </>
  );
};
const PageLayout = ({ children, title, showHeader = true, showBottom = true, headerTitle, titleIsGrey }) => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("sm"));
  if (isMdUp) {
    return (
      <ClippedDrawer title={title}>
        <PageTitle title={title} />
        {children}
      </ClippedDrawer>
    );
  }
  return (
    <>
      {
        showHeader && <GameHeader />
      }
      {
        headerTitle && <TitleHeader headerTitle={headerTitle} titleIsGrey={titleIsGrey}/>
      }
      <Box
        sx={{
          padding: { xs: "10px", md: "20px" },
          paddingBottom: "67px",
          // margin: "10px",
          // marginBottom: "67px",
          // backgroundColor: "#000",
          height: "calc(100% - 56px)",
        }}
      >
        {/* <PageTitle title={title} /> */}
        {children}
      </Box>
      {
        showBottom && <BottomNavigation />
      }
    </>
  );
};

export default PageLayout;
