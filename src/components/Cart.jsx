import { Drawer, Box, Typography, Button } from "@mui/material";
import { useState } from 'react';
// import Basket from "./Basket";


function Cart(props) {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)


    return ( 
        <>
        <Button
            size='large'
            edge="start"
            color='inherit'
            aria-label='logo'
            onClick={() => setIsDrawerOpen(true)}
            >CART
        </Button>  
        <Drawer 
            anchor='right' 
            open={isDrawerOpen} 
            onClose={() => setIsDrawerOpen(false)}>
            <Box 
                p={2} width='250px' 
                textAlign='center' 
                role='presentation'>
                    <Typography 
                    variant='h6' 
                    component='div'
                    >Cart and Total
                    </Typography>
                   {/* <Basket /> */}

                   
            </Box>
        </Drawer>
        </>
     );
}

export default Cart;