import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import {Typography } from '@material-ui/core';
import Item from './Item';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    padding: 0,
    maxWidth: '700px',
  },
  listContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  }
}));

export default function ListItems(props) {
  const classes = useStyles();
  let title = (props.items.length !== 0) ? <Typography variant="h6">{props.title}</Typography> : '';
  return (
    <div className={classes.listContainer}>
      {title}
      <List className={classes.root}>
        {props.items.map((item, index) => {
          return (
            <Item
              name={item.name}
              price={item.price}
              quantity={item.quantity}
              loaded={item.loaded}
              key={index}
              loadItem={props.loadItem}
              deleteItem={props.deleteItem}
              openItemEdition={props.openItemEdition}
            />
          );
        })}
      </List>
    </div>

  );
}
