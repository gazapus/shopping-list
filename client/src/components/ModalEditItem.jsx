import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import FormItem from './FormItem';

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: '99%',
        maxWidth: '500px',
        border: '1px solid #000',
        boxShadow: theme.shadows[5],
        borderRadius: '5px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F1C17F',
        paddingTop: '2vmin',
        paddingBottom: '2vmin'
    }
}));

function getModalStyle() {
    const top = 50;
    const left = 50;
    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

export default function SimpleModal(props) {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(true);
    const [name, setName] = React.useState(props.item.name);
    const [price, setPrice] = React.useState(props.item.price);
    const [quantity, setQuantity] = React.useState(props.item.quantity);

    const handleClose = () => {
        props.cancelEdition();
        setOpen(false);
    };

    function handleSubmit(e) {
        e.preventDefault();
        let item = {
            name: name,
            price: price,
            quantity: quantity,
            loaded: props.item.loaded
        }
        props.editItem(item);
        handleClose();
    }

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <div style={modalStyle} className={classes.paper}>
                    <FormItem
                        nameValue={name}
                        priceValue={price}
                        quantityValue={quantity}
                        title="Modificar Item"
                        handleSubmit={handleSubmit}
                        setName={setName} 
                        setPrice={setPrice}
                        setQuantity={setQuantity}
                    />
                </div>
            </Modal>
        </div>
    );
}
