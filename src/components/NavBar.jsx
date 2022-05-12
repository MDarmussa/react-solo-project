import React from 'react';
// import Basket from './Basket';
import { AppBar, Stack, Typography, Button } from '@mui/material';
import  Toolbar from '@mui/material/Toolbar';
import HomeIcon from '@mui/icons-material/Home';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';

import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import SeeCode from '../pages/Code';


export default function Nav() {
  

  return (
    <AppBar position= 'static'>
      <Toolbar className='AppBar'>
        <a href="/" >
          <BusinessCenterIcon className='homeIcone' sx={{ fontSize: 45, color: 'white', ml: 2 }} color="action" />
        </a>
        <h1> WalCart </h1>
        <Typography variant='h6' component='div' sx={{ flexGrow: 1}}></Typography>
          <Stack direction='row' spacing={5} mr={3} > 
            <a href='/payment'>
              <Button className="nav-link active" aria-current="page" href="/payment"></Button>
            </a>
            <a href='/login' className='navMenu'>
              <Button className='navMenu' sx={{ fontSize: 20, color: 'white' }}>login</Button>
            </a>
            <a href='/signup' className='navMenu'>
              <Button className='navMenu' sx={{ fontSize: 20, color: 'white' }}>signup</Button>
            </a>
            <a href='/' className='navMenu'>
              <Button sx={{ fontSize: 20, color: 'white' }} className='navMenu' onClick={()=> window.open("https://github.com/MDarmussa/react-solo-project", "_blank")}>SeeCode</Button>
            </a>
          </Stack>
      </Toolbar>
    </AppBar>

  
  );
}

