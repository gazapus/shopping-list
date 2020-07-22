import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Menu, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import StorefrontIcon from '@material-ui/icons/Storefront';
import MenuIcon from '@material-ui/icons/Menu';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import SaveIcon from '@material-ui/icons/Save';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const useStyles = makeStyles({
     title: {
          flexGrow: 1
     },
     appBar: {
          background: '#D1631B'
     },
     toolbar: {
          paddingRight: 0
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

     const openList = () =>{
          props.isOpening(true);
          props.onOpen();
          handleClose()
     }

     const saveList = () =>{
          props.isOpening(false);
          props.onOpen();
          handleClose()
     }

     const deleteList = () =>{
          props.openDeleteDialog();
          handleClose()
     }

     return (
          <AppBar position="static" className={classes.appBar}>
               <Toolbar className={classes.toolbar}>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                         <StorefrontIcon />
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
                         <MenuItem onClick={openList}><ImportContactsIcon/>&nbsp; Abrir</MenuItem>
                         <MenuItem onClick={saveList}><SaveIcon/>&nbsp; Guardar</MenuItem>
                         <MenuItem onClick={deleteList}><HighlightOffIcon/>&nbsp; Eliminar</MenuItem>
                    </Menu>
               </Toolbar>
          </AppBar>
     );
}

export default TopAppBar;
