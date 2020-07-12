import React from 'react';
import './App.css';
import { Container } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import TopAppBar from './components/TopAppBar';
import BottonBar from './components/BottonBar';
import InputItem from './components/InputItem';
import ListItems from './components/ListItems';

const useStyles = theme => ({
  root: {
    background: '#F7E4B4',
    borderRadius: 3,
    border: 0,
    height: '100vh',
    margin: 0,
    padding: 0,
    paddingBottom: "9vh"
  }
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsLoaded: [],
      itemsNotLoaded: [],
      listName: "Nueva Lista",
      accumulatedAmount: 0
    };
    this.addItem = this.addItem.bind(this);
    this.handleChangeItem = this.handleChangeItem.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
  }

  addItem(item) {
    let itemsUpdated = this.state.itemsNotLoaded.slice();
    itemsUpdated.push(item);
    let newAmount = this.state.accumulatedAmount + (item.price * item.quantity);
    this.setState({
      itemsNotLoaded: itemsUpdated,
      accumulatedAmount: newAmount
    });
  }

  handleChangeItem(item) {
    let itemsLoaded = this.state.itemsLoaded.slice();
    let itemsNotLoaded = this.state.itemsNotLoaded.slice();
    if (item.loaded) {
      itemsLoaded.push(item);
      let index = itemsNotLoaded.findIndex(itemNotLoaded => itemNotLoaded.name === item.name);
      itemsNotLoaded.splice(index, 1);
    } else {
      itemsNotLoaded.push(item);
      let index = itemsLoaded.findIndex(itemLoaded => itemLoaded.name === item.name);
      itemsLoaded.splice(index, 1);
    }
    this.setState({
      itemsNotLoaded: itemsNotLoaded,
      itemsLoaded: itemsLoaded
    });
  }

  
  handleDeleteItem(item){
    let itemsLoaded = this.state.itemsLoaded.slice();
    let itemsNotLoaded = this.state.itemsNotLoaded.slice();
    if (item.loaded) {
      let index = itemsLoaded.findIndex(itemLoaded => itemLoaded.name === item.name);
      itemsLoaded.splice(index, 1);
    } else {
      let index = itemsNotLoaded.findIndex(itemNotLoaded => itemNotLoaded.name === item.name);
      itemsNotLoaded.splice(index, 1);
    }
    this.setState({
      itemsNotLoaded: itemsNotLoaded,
      itemsLoaded: itemsLoaded
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <Container maxWidth="sm" className={classes.root}>
        <TopAppBar title={this.state.listName} />
        <InputItem addItem={this.addItem} />
        <ListItems 
          items={this.state.itemsNotLoaded}
          handleChangeItem={this.handleChangeItem} 
          handleDeleteItem={this.handleDeleteItem} 
        />
        <hr/>
        <ListItems 
          items={this.state.itemsLoaded} 
          handleChangeItem={this.handleChangeItem} 
          handleDeleteItem={this.handleDeleteItem} 
        />
        <BottonBar />
      </Container>
    );
  }
}

export default withStyles(useStyles)(App)
