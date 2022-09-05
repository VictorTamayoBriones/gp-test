import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';


export interface NavbarInterface {}

const Navbar: React.FC<NavbarInterface> = () => {
	return(
        <AppBar position="fixed" >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Gentleman Programin React Test
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
    )
};

export default Navbar;

