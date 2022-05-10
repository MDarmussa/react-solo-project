import React from 'react';
// import Basket from './Basket';
import { AppBar, Stack, Typography, Button } from '@mui/material';
import  Toolbar from '@mui/material/Toolbar';
import HomeIcon from '@mui/icons-material/Home';

import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import ResponsiveDialog from './BasketDialog'; //parent of basketDialog

// import Cart from './components/Cart';

// import Cart from './Cart';



export default function Nav(props) {
  const {countCartItems} = props;


  return (
      <AppBar position= 'static'>
        <Toolbar className="AppBar" >
          <a href="/" >
            <HomeIcon sx={{ fontSize: 40 }} color="action" />
          </a>

          <Typography variant='h6' component='div' sx={{ flexGrow: 1}}>
            {/* <input color='inherit'></input> */}
          </Typography>
            <Stack direction='row' spacing={5} mr={3} > 

                {/* {props.countCartItems ? (
                  <button className="badge">{props.countCartItems}</button>
                ) : (
                  ''
                )}
             {' '} */}

             {props.countCartItems ? (
             <button className='buttonIcone'> {props.countCartItems}
                <ShoppingCartCheckoutIcon className='cartIcone'></ShoppingCartCheckoutIcon> 
            </button>
             ) : (
              ''
             )}
            {' '}

            {/* <button><ResponsiveDialog /></button> */}

             <a href='/about'>
              <Button className='navMenu'>About</Button>
             </a>

             <a href='/login' className='navMenu'>
              <Button className='navMenu'>Login</Button>
             </a>
             {/* <Cart /> */}
             <a href='/cart'>
              <Button className='navMenu'>Cart</Button>
             </a>

            
            </Stack>
        </Toolbar>
      </AppBar>

  
  );
}



