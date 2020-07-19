import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Item from './Item';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  }
}));

export default function ListItems(props) {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {props.items.map((item) => {
        return (
          <Item
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            loaded={item.loaded}
            key={item.name}
            handleLoadItem={props.handleLoadItem}
            handleDeleteItem={props.handleDeleteItem} 
            openItemEdition={props.openItemEdition}
          />
        );
      })}
    </List>
  );
}
