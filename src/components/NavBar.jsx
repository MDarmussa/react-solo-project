import React from 'react';
import { AppBar, Stack, Typography, Button } from '@mui/material';
import  Toolbar from '@mui/material/Toolbar';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function Nav() {
  return (
    <AppBar position= 'sticky' >
      <div className='navBar'>
        <Toolbar className='AppBar'>
          <div className='leftSide'> 
            <div>
              <a href="/" >
                <AddShoppingCartIcon className='homeIcone' sx={{ fontSize: 30, color: 'white', ml: 2 }} color="action" />
              </a>
            </div>
            {/* <div>
             <h1> WalCart </h1>
            </div> */}
          </div>
            <div className='rightSide'>
              <Stack direction='row'> 
                <a href='/payment'>
                  <Button  aria-current="page" href="/payment"></Button>
                </a>
                <a href='/login'>
                  <Button sx={{ fontSize: 18, color: 'white' }}>login</Button>
                </a>
                <a href='/signup'>
                  <Button sx={{ fontSize: 18, color: 'white' }}>signup</Button>
                </a>
                <a href='/'>
                  <Button sx={{ fontSize: 18, color: 'white' }} onClick={()=> window.open("https://github.com/MDarmussa/react-solo-project", "_blank")}>SeeCode</Button>
                </a>
              </Stack>
            </div>
        </Toolbar>
      </div>
    </AppBar>
  );
}

