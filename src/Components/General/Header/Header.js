import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Search from './Search.js'; 

class Header extends React.Component { 


    render(){
        return (
            <Box sx={{ flexGrow: 1 }}>
              <AppBar position="static" color="transparent">
                <Toolbar>
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                  >
                  </IconButton>
                  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Дом Керамики
                  </Typography>
                  <Search /> 
                  <Button color="inherit">Login</Button>
                </Toolbar>
              </AppBar>
            </Box>
          );
    }
}

export default Header;