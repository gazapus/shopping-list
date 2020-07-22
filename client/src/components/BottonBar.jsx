import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import BoxText from './BoxText';

const useStyles = makeStyles({
     bottomBarContainer: {
          width: '100%',
          display: 'flex',
          justifyContent: 'center'
     },
     toolbar: {
          background: '#6A380D',
          position: "fixed",
          bottom: 0,
          fontFamily: 'roboto',
          maxWidth: '700px',
          borderRadius: '5px 5px 0 0'
     },
     boxes: {
          display: 'flex',
          justifyContent: 'space-around'
     },
     estimado: {
          textAlign: 'center',
          color: 'grey'
     }
});

function BottonBar(props) {
     const classes = useStyles();
     return (
          <div className={classes.bottomBarContainer}>
               <AppBar position="static" className={classes.toolbar} id="bottonBar">
                    <Toolbar className={classes.boxes}>
                         <BoxText value={"$" + (props.total.toFixed(2))} />
                         <small className={classes.estimado}>ESTIMADO<br />${((props.estimatedAmount).toFixed(2))}</small>
                         <BoxText value={props.itemsLoaded + "/" + props.totalOfItems} />
                    </Toolbar>
               </AppBar>
          </div>
     );
}

export default BottonBar;
