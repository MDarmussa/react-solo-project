import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { blue } from '@mui/material/colors';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="/" className='walcart'>
        WalCart
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function StickyFooter() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '50vh',
        backgroundColor: '#111111',
        color: 'orange'
      }}
    >
      <CssBaseline />
      <Container className='footer' sx={{ mt: 8, mb: 2 }} component="main"  maxWidth="sm" >
      
        <Typography variant="h4" component="h1" gutterBottom >
          CONNECT WITH ME
        </Typography>

          <Typography className='foorIcons' sx={{margin: 'auto'}} >
               <a href='https://github.com/MDarmussa/react-solo-project' target='_blank' rel="noreferrer"><GitHubIcon sx={{ fontSize: 50, color: 'white' }} className='media' /></a>
               <a href='https://www.linkedin.com/in/mdarmussa/' target='_blank' rel="noreferrer"><LinkedInIcon sx={{ fontSize: 50, color: 'white' }} className='media' /></a>
          </Typography>

        <Typography variant="body1" className='foottypography' >
             <h2>Find Careers</h2>
        </Typography>

        <Typography variant="body1" className='foottypography'>
             <h2>Working At WalCart</h2>
        </Typography>

        <Typography variant="body1" className='foottypography'>
             <h2>Help</h2>
        </Typography>
        <br /> <br />
      </Container>
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="sm" className='copyright'>
          <Typography variant="body1" fontWeight='bolder'>
               Built on <strong>React</strong> and Developed by <strong>Mohammad Darmussa</strong>
          </Typography>
          <Typography variant="body1" fontWeight='bolder'>
               <a href="/" sx={{ color: blue }} className='privacy' >Privacy & Data</a>
          </Typography>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}