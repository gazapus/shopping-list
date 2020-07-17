import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FormItem from './FormItem';

export default function InputItem(props) {

    const [name, setName] = React.useState("batata");
    const [price, setPrice] = React.useState(0);
    const [quantity, setQuantity] = React.useState(1);

    const classes = {
        accordionContainer: {
            display: 'flex',
            justifyContent: 'center',
            padding: '1vmin'
        },
        accordionBody: {
            width: '98%',
        },
        accordion: {
            backgroundColor: '#C3C4CE',
            borderStyle: 'outset',
            borderRadius: '30px',
            borderColor: '#8C8E9C'
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
        setQuantity(0);
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
