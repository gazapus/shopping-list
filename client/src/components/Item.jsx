import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    noSpace: {
        marginTop: 0,
        paddingTop: 0,
        marginBottom: 0,
        paddingBottom: 0
    }
}));

function Item(props) {

    let item = {
        name: props.name,
        price: props.price,
        quantity: props.quantity,
        loaded: props.loaded
    }
    const classes = useStyles();

    function handleCheckbox(e) {
        props.handleLoadItem(item);
    }

    function handleDeleteItem(e) {
        props.handleDeleteItem(item);
    }

    function openItemEdition(e) {
        props.openItemEdition(item);
    }

    return (
        <ListItem key={props.key} role={undefined} button className={classes.noSpace}>
            <ListItemIcon >
                <Checkbox
                    edge="start"
                    checked={props.loaded}
                    tabIndex={-1}
                    disableRipple
                    onClick={handleCheckbox}
                />
            </ListItemIcon>
            <ListItemText
                primary={props.name}
                secondary={props.quantity + " x $" + props.price}
                className={classes.noSpace}
                onClick={openItemEdition}
            />
            <ListItemSecondaryAction >
                <IconButton edge="end" aria-label="delete" onClick={handleDeleteItem} >
                    <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    );
}

export default Item;
