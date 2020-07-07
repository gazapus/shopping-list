import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Menu, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Home from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles({
     title: {
          flexGrow: 1
     }
});

function TopAppBar(props) {
     const [anchorEl, setAnchorEl] = React.useState(null);
     const classes = useStyles();

     const handleClick = event => {
          setAnchorEl(event.currentTarget);
     };

     const handleClose = () => {
          setAnchorEl(null);
     };

     return (
          <AppBar position="static">
               <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                         <Home />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                         {props.title}
                    </Typography>
                         <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                              <MenuIcon />
                         </Button>
                         <Menu
                              id="simple-menu"
                              anchorEl={anchorEl}
                              keepMounted
                              open={Boolean(anchorEl)}
                              onClose={handleClose}
                         >
                              <MenuItem onClick={handleClose}>Nueva</MenuItem>
                              <MenuItem onClick={handleClose}>Guardar</MenuItem>
                              <MenuItem onClick={handleClose}>Abrir</MenuItem>
                              <MenuItem onClick={handleClose}>Eliminar</MenuItem>
                         </Menu>
               </Toolbar>
          </AppBar>
     );
}

export default TopAppBar;
