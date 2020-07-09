import React from 'react';
import { } from '@material-ui/core';

const styles = {
     textBox: {
          background: '#4E0015',
          color: 'red'
     }
};

class InputItem extends React.Component {
     constructor(props) {
          super(props);
          this.state = {
               name: "",
               price: 0,
               quantity: 0
          };
          this.handleChange = this.handleChange.bind(this);
          this.addNewItem = this.addNewItem.bind(this);
     }

     handleChange(event) {
          this.setState({ [event.target.name]: event.target.value });
     }

     addNewItem(event) {
          event.preventDefault();
     }

     render() {
          return (
               <div>
                    <div>AGREGAR</div>
                    <form onSubmit={this.addNewItem}>
                         <input type="text" placeholder="nombre" value={this.state.name}
                              name="name" onChange={this.handleChange} />
                         <div>
                              <input type="number" placeholder="precio" value={this.state.price}
                                   name="price" onChange={this.handleChange} />
                              <input type="cantidad" placeholder="cantidad" step="1" value={this.state.quantity}
                                   name="quantity" onChange={this.handleChange} />
                              <button>Ok</button>
                         </div>
                    </form>
               </div>
          )
     }
}

export default InputItem;