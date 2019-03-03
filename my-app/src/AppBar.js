import React, { Component } from 'react';
import AppBars from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


class AppBar extends Component{
render(){
  return (
    <div>
      <AppBars position="static">
        <Toolbar>
          <IconButton  color="inherit" aria-label="Menu">
          <MenuIcon></MenuIcon>
          </IconButton>
          <Typography variant="h6" color="inherit" >
            
          </Typography>
          <Button color="inherit">Clase de Unitec</Button>
        </Toolbar>
      </AppBars>
    </div>
  );
}
}   
export default AppBar;