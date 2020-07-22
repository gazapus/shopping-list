import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FilledInput from '@material-ui/core/FilledInput';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    body: {
        margin: '1vmin',
        padding: '5min',
        width: '96%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    commonInput: {
        margin: '1vmin',
        width: '100%'
    },
    backgroundColorWhite: {
        backgroundColor: 'white'
    },
    halfWidth: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        maxWidth: '50%'
    }
}));

export default function FormItem(props) {
    const classes = useStyles();

    function handleChange(event) {
        let value = event.target.name;
        if (value === "productName") {
            return props.setName(event.target.value);
        }
        if (value === "price") {
            return props.setPrice(Number(event.target.value));
        }
        if (value === "quantity") {
            return props.setQuantity(Number(event.target.value));
        }

    }

    function select(e){
        e.target.select();
    }

    return (
        <form className={classes.body} onSubmit={props.handleSubmit}>
            <Typography>{props.title}</Typography>
            <TextField
                label="Producto" variant="filled" size="small" required error={false} color='primary'
                value={props.nameValue} name="productName" className={classes.commonInput} onChange={handleChange}
                inputProps={{
                    maxLength: 40
                }}
            />
            <div className={classes.halfWidth}>
                <FormControl className={classes.commonInput}>
                    <InputLabel htmlFor="productPrice">Precio</InputLabel>
                    <FilledInput
                        id="productPrice"
                        variant="filled"
                        type="number" value={props.priceValue}
                        name="price"
                        color='primary'
                        onChange={handleChange}
                        inputProps={{
                            min: 0,
                            step: 0.1
                        }}
                        onClick={select}
                    />
                </FormControl >
                <FormControl className={classes.commonInput}>
                    <InputLabel htmlFor="productQuantity">Cantidad</InputLabel>
                    <FilledInput
                        id="productQuantity"
                        variant="filled"
                        type="number" value={props.quantityValue}
                        name="quantity"
                        onChange={handleChange}
                        color='primary'
                        inputProps={{
                            min: 1,
                            step: 0.1
                        }}
                        onClick={select}
                    />
                </FormControl>
            </div>
            <Button
                variant="contained"
                color="primary"
                type="submit"
                className={classes.button}
            >
                Confirmar
            </Button>
        </form>
    );
}
