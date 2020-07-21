import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FormItem from './FormItem';

export default function InputItem(props) {

    const [name, setName] = React.useState("");
    const [price, setPrice] = React.useState(0);
    const [quantity, setQuantity] = React.useState(1);

    const classes = {
        accordionContainer: {
            display: 'flex',
            justifyContent: 'center',
            padding: '1vmin',
            margin: '1vmax'
        },
        accordionBody: {
            width: '98%',
            maxWidth: '500px'
        },
        accordion: {
            backgroundColor: '#D1A8F6',
            borderStyle: 'solid',
            borderRadius: '30px',
            borderColor: '#40116C'
        },
        heading: {
            fontWeight: 'bold',
            width: '100%',
            textAlign: 'center'
        },
        accordionDetails: {
            margin: 0,
            padding: '0 0 2vmin 0'
        }
    }

    function addNewItem(event) {
        event.preventDefault();
        let item = {
            name: name,
            price: price,
            quantity: quantity,
            loaded: false
        }
        props.addItem(item);
        setName("");
        setPrice(0);
        setQuantity(1);
    }

    return (
        <div style={classes.accordionContainer} >
            <div style={classes.accordionBody}>
                <Accordion style={classes.accordion}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography style={classes.heading}>NUEVO ITEM</Typography>
                    </AccordionSummary>
                    <AccordionDetails style={classes.accordionDetails}>
                        <FormItem
                            nameValue={name}
                            priceValue={price}
                            quantityValue={quantity}
                            title=""
                            handleSubmit={addNewItem}
                            setName={setName}
                            setPrice={setPrice}
                            setQuantity={setQuantity}
                        />
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    );
}
