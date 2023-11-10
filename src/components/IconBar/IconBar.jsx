import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import md from "@Mock/boxShadow";


const IconBar = ({ icon, title, description, backgroundColor, titleAtRight }) => {
  return (
    <Box sx={{ display: 'flex', mb: 2, borderRadius: '10%' }}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor,
        p: 2,
        mr: 1,
        borderRadius: '10%',
        border: '0.5px solid #000',
        width: 96, 
        minWidth: 96,
        height: 96,
        // boxShadow: md,
      }}>
        {
          <img src={icon} alt="Icon" style={{ 
            width: titleAtRight? 64:36, 
            height:  titleAtRight? 64:36, 
            marginTop: 6, 
            marginBottom: 6 
          }} />
          }
        {
          !titleAtRight &&
          <Typography variant="subtitle1">{title}</Typography>
        }
      </Box>
      <Box sx={{
        flexGrow: 1,
        backgroundColor,
        display: 'flex',
        flexDirection: 'column',
        // alignItems: 'center', 
        // justifyContent: 'center', 
        p: 2,
        borderRadius: '6px',
        border: '0.5px solid #000',
        // boxShadow: md,
      }}>
        <Typography
          variant="h5" fontWeight="bold" textTransform="capitalize">
          {title}
        </Typography>
        <Typography variant="body1">{description}</Typography>
      </Box>
    </Box>
  );
};

export default IconBar;