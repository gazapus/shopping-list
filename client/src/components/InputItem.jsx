import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TextField from '@material-ui/core/TextField';
import FilledInput from '@material-ui/core/FilledInput';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

export default class InputItem extends React.Component {

     constructor(props) {
          super(props);
          this.state = {
               name: "",
               price: 0,
               quantity: 1,
               loaded: false
          };
          this.handleChange = this.handleChange.bind(this);
          this.addNewItem = this.addNewItem.bind(this);
          this.classes = this.classes.bind(this)
     }

     classes() {
          return {
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
               },
               form: {
                    body: {
                         margin: '1vmin',
                         width: '99%',
                         height: '99%',
                         display: 'flex',
                         flexDirection: 'column',
                         justifyContent: 'center',
                         alignItems: 'center'
                    },
                    commonInput: {
                         margin: '1vmin'
                    },
                    backgroundColorWhite: {
                         backgroundColor: 'white'
                    },
                    halfWidth: {
                         display: 'flex',
                         flexDirection: 'row',
                         justifyContent: 'center'
                    },
                    button: {
                         width: '50%'
                    }
               }
          }
     }

     handleChange(event) {
          let value = (event.target.name !== "name") ? Number(event.target.value) : event.target.value;
          this.setState({ [event.target.name]: value});
     }

     addNewItem(event) {
          event.preventDefault();
          this.props.addItem(this.state);
          this.setState({
               name: "",
               price: 0,
               quantity: 1
          });
     }

     render() {
          return (
               <div style={this.classes().accordionContainer} >
                    <div style={this.classes().accordionBody}>
                         <Accordion style={this.classes().accordion}>
                              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                   <Typography style={this.classes().heading}>NUEVO ITEM</Typography>
                              </AccordionSummary>
                              <AccordionDetails style={this.classes().accordionDetails}> 
                                   <form onSubmit={this.addNewItem} style={this.classes().form.body}>
                                        <TextField label="Producto" variant="filled" size="small" required error={false} color='primary' fullWidth={true}
                                             value={this.state.name} name="name" onChange={this.handleChange} style={this.classes().form.commonInput}  />
                                        <div style={this.classes().form.halfWidth}>
                                             <FormControl style={this.classes().form.commonInput}>
                                                  <InputLabel htmlFor="productPrice">Precio</InputLabel>
                                                  <FilledInput
                                                       id="productPrice"
                                                       variant="filled"
                                                       type="number" value={this.state.price}
                                                       name="price" onChange={this.handleChange}
                                                       color='primary'
                                                  />
                                             </FormControl >
                                             <FormControl style={this.classes().form.commonInput}>
                                                  <InputLabel htmlFor="productQuantity">Cantidad</InputLabel>
                                                  <FilledInput
                                                       id="productQuantity"
                                                       variant="filled"
                                                       type="number" value={this.state.quantity}
                                                       name="quantity" onChange={this.handleChange}
                                                       color='primary'
                                                  />
                                             </FormControl>
                                        </div>
                                        <Button
                                             variant="contained"
                                             color="primary"
                                             startIcon={<AddIcon />}
                                             size="small"
                                             type="submit"
                                             style={this.classes().form.button}
                                        >
                                             AGREGAR
                                             </Button>
                                   </form>
                              </AccordionDetails>
                         </Accordion>
                    </div>
               </div>
          );
     }
}
