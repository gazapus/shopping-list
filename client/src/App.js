import React from 'react';
import './App.css';
import { Container } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import TopAppBar from './components/TopAppBar';
import BottonBar from './components/BottonBar';
import InputItem from './components/InputItem';
import ListItems from './components/ListItems';
import ModalEditItem from './components/ModalEditItem';

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
    this.handleLoadItem = this.handleLoadItem.bind(this);
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

  handleLoadItem(item) {
    let listWhereRemoveItem = (item.loaded) ? this.state.itemsLoaded.slice() : this.state.itemsNotLoaded.slice();
    let listWhereAddItem = (item.loaded) ? this.state.itemsNotLoaded.slice() : this.state.itemsLoaded.slice();
    let indexToRemove = listWhereRemoveItem.findIndex(cursorItem => cursorItem.name === item.name);
    listWhereRemoveItem.splice(indexToRemove, 1);
    item.loaded = !item.loaded;
    listWhereAddItem.push(item);
    this.setState({
      itemsNotLoaded: (item.loaded) ? listWhereRemoveItem : listWhereAddItem,
      itemsLoaded: (item.loaded) ? listWhereAddItem : listWhereRemoveItem
    });
  }

  handleDeleteItem(item){
    let listWhereRemoveItem = (item.loaded) ? this.state.itemsLoaded.slice() : this.state.itemsNotLoaded.slice();
    let indexToRemove = listWhereRemoveItem.findIndex(itemCursor => itemCursor.name === item.name);
    listWhereRemoveItem.splice(indexToRemove, 1);
    this.setState({
      itemsNotLoaded: (item.loaded) ? this.state.itemsNotLoaded : listWhereRemoveItem,
      itemsLoaded: (item.loaded) ? listWhereRemoveItem : this.state.itemsLoaded
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
          handleLoadItem={this.handleLoadItem} 
          handleDeleteItem={this.handleDeleteItem} 
        />
        <hr/>
        <ListItems 
          items={this.state.itemsLoaded} 
          handleLoadItem={this.handleLoadItem} 
          handleDeleteItem={this.handleDeleteItem} 
        />
        <ModalEditItem />
        <BottonBar />
      </Container>
    );
  }
}

export default withStyles(useStyles)(App)
