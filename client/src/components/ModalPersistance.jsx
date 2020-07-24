import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Typography, TextField, Button, Modal} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: '99%',
        maxWidth: '500px',
        border: '1px solid #000',
        boxShadow: theme.shadows[5],
        borderRadius: '5px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#F1C17F',
        paddingTop: '4vmin',
        paddingBottom: '4vmin'
    },
    form : {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%'
    },
    button: {
        margin: '4vmin 0 2vmin 0'
    },
    textInput: {
        minWidth: '300px',
        width: '80%'
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

export default function ModalPersistance(props) {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(props.open);
    const [listName, setListName] = React.useState(props.listName);

    const handleClose = () => {
        props.cancelInputListName();
        setOpen(false);
    };

    function handleSubmit(e) {
        e.preventDefault();
        props.setListName(listName);
        handleClose();
    }

    function handleChange(e) {
        setListName(e.target.value);
    }

    return (
        <div>
            <Modal
                open={props.open}
                onClose={handleClose}
            >
                <div style={modalStyle} className={classes.paper}>
                    <Typography>Abrir lista</Typography>
                    <form className={classes.form} onSubmit={handleSubmit}>
                        <TextField
                            label="Nombre de la lista" variant="filled" size="small" required error={false} color='primary'
                            value={listName} name="listName" onChange={handleChange} inputProps={{maxLength: 30}} 
                            className={classes.textInput}
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            className={classes.button}
                        >
                            Listo
                        </Button>
                    </form>
                </div>
            </Modal>
        </div>
    );
}
