import React from 'react';
import { } from '@material-ui/core';

const stylesBox = {
     textBox: {
          fontFamily: 'roboto',
          color: 'black',
          fontWeight: 'bold'
     },
     boxContainer: {
          padding: "1vmin",
          background: 'grey',
          minWidth: "5em",
          maxWidth: "30%",
          height: '5vh',
          borderStyle: 'solid',
          borderWidth: 2,
          borderColor: 'black',
          borderRadius: '5px'
     },
     boxSubContainer: {
          height: '100%',
          textAlign: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 0
     }
};

function BoxText(props) {
     const classes = stylesBox;
     return (
          <div style={classes.boxContainer}>
               <div style={classes.boxSubContainer}>
                    <span style={classes.textBox}>{props.value}</span>
               </div>
          </div>
     );
}

export default BoxText;