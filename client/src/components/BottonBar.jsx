import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import BoxText from './BoxText';
import '../BottonBar.css';

const useStyles = makeStyles({
     toolbar: {
          background: '#4E3005',
          position: "fixed",
          bottom: 0
     },
     boxes: {
          display: 'flex',
          justifyContent: 'space-around'
     }
});

function BottonBar(props) {
     const classes = useStyles();
     return (
          <AppBar position="static" className={classes.toolbar} id="bottonBar">
               <Toolbar className={classes.boxes}>
                    <BoxText value={props.total} />
                    <small>estimado<br />{props.estimatedAmount}</small>
                    <BoxText value={props.itemsLoaded + "/" + props.totalOfItems} />
               </Toolbar>
          </AppBar>
     );
}

export default BottonBar;
