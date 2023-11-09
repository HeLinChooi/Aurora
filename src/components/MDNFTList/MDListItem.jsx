import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import StarIcon from "@mui/icons-material/Star";
import LockIcon from "@mui/icons-material/Lock";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";

const MDListItem = ({
  title,
  date,
  reason,
  accessorName,
  onClick = () => { },
  isStar = false,
}) => {
  const theme = useTheme();
  return (
    <>
      <ListItem
        alignItems="flex-start"
        sx={{
          "&:hover": {
            backgroundColor: theme.palette.grey["100"],
            cursor: "pointer",
          },
        }}
        onClick={onClick}
      >
        <ListItemAvatar>
          <Avatar sx={{backgroundColor: isStar?"gold": "grey"}}>
            {
              isStar ?
              <StarIcon /> :
              <LockIcon />
            }
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item>
                <Typography variant="body1">{title}</Typography>
              </Grid>
              <Grid item>
                <Typography component="span" variant="body2">
                  {/* {date.toLocaleDateString("en-gb")} */}
                  {date}
                </Typography>
              </Grid>
            </Grid>
          }
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {/* {accessorName} */}
              </Typography>
              <Typography component="span" variant="body2">
                {/* &nbsp;-&nbsp; */}
                {reason}
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
    </>
  );
};

export default MDListItem;
