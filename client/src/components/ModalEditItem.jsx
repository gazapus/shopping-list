import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import FormItem from './FormItem';

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: '99%',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #000',
        boxShadow: theme.shadows[5],
        borderRadius: '5px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
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
    const [open, setOpen] = React.useState(false);
    const [name, setName] = React.useState("batata");
    const [price, setPrice] = React.useState(0);
    const [quantity, setQuantity] = React.useState(1);


    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    function handleSubmit(e) {
        e.preventDefault();
        handleClose();
        console.log("enviado")
    }

    function handleChange(e) {
        console.log("cambiado")
    }

    return (
        <div>
            <button type="button" onClick={handleOpen}>
                Open Modal
            </button>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <div style={modalStyle} className={classes.paper}>
                    <FormItem
                        nameValue={name}
                        priceValue={price}
                        quantityValue={quantity}
                        buttonText="Modificar" 
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
