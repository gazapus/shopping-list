import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { withStyles } from '@material-ui/core/styles';

const useStyles = theme => ({
    noSpace: {
        marginTop: 0,
        paddingTop: 0,
        marginBottom: 0,
        paddingBottom: 0
    }
});

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            price: props.price,
            quantity: props.quantity,
            loaded: props.loaded
        }
        this.handleCheckbox = this.handleCheckbox.bind(this);
        this.handleDeleteItem = this.handleDeleteItem.bind(this);
    }

    async handleCheckbox(e) {
        await this.setState({
            loaded: !this.state.loaded
        });
        this.props.handleChangeItem(this.state);
    }

    async handleDeleteItem(e) {
        this.props.handleDeleteItem(this.state);
    }

    render() {
        const { classes } = this.props;
        return (
            <ListItem key={this.props.key} role={undefined} button className={classes.noSpace}>
                <ListItemIcon >
                    <Checkbox
                        edge="start"
                        checked={this.state.loaded}
                        tabIndex={-1}
                        disableRipple
                        onClick={this.handleCheckbox}
                    />
                </ListItemIcon>
                <ListItemText
                    primary={this.state.name}
                    secondary={this.state.quantity + " x $" + this.state.price}
                    className={classes.noSpace}
                />
                <ListItemSecondaryAction >
                    <IconButton edge="end" aria-label="delete" >
                        <DeleteIcon onClick={this.handleDeleteItem} />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        );
    }
}

export default withStyles(useStyles)(Item)
