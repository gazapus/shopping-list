import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import TopAppBar from './components/TopAppBar';
import BottonBar from './components/BottonBar';
import InputItem from '././components/InputItem';
import ListItems from './components/ListItems';
import ModalEditItem from './components/ModalEditItem';
import ModalPersistance from './components/ModalPersistance';
import DeleteDialog from './components/DeleteDialog';
import Divider from '@material-ui/core/Divider';
import texture from './images/texture.jpg'

const useStyles = theme => ({
  root: {
    backgroundColor: '#FFF1DB',
    backgroundImage: 'url("https://www.transparenttextures.com/patterns/lined-paper-2.png")',
    borderRadius: 3,
    border: 0,
    minHeight: '100vh',
    margin: 0,
    padding: 0,
    paddingBottom: "10vh",
    boxShadow: '-9px 4px 20px -7px rgba(0,0,0,0.75)'
  },
  container: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    backgroundImage: `url(${texture})`,
    backgroundRepeat: 'repeat'
  }
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsLoaded: [],
      itemsNotLoaded: [],
      listName: "",
      itemToEdit: {},
      inputListName: false,
      isOpeningAList: false,
      isOpenDeleteDialog: false
    };
    this.addItem = this.addItem.bind(this);
    this.loadItem = this.loadItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.editItem = this.editItem.bind(this);
    this.toggleItemEdition = this.toggleItemEdition.bind(this);
    this.toggleInputListName = this.toggleInputListName.bind(this);
    this.setListName = this.setListName.bind(this);
    this.setIsOpeningAList = this.setIsOpeningAList.bind(this);
    this.toggleDeleteDialog = this.toggleDeleteDialog.bind(this);
    this.confirmDelete = this.confirmDelete.bind(this);
  }

  addItem(item) {
    let itemsUpdated = this.state.itemsNotLoaded.slice();
    itemsUpdated.push(item);
    this.setState({
      itemsNotLoaded: itemsUpdated
    });
  }

  loadItem(item) {
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

  deleteItem(item) {
    let listWhereRemoveItem = (item.loaded) ? this.state.itemsLoaded.slice() : this.state.itemsNotLoaded.slice();
    let indexToRemove = listWhereRemoveItem.findIndex(itemCursor => itemCursor.name === item.name);
    listWhereRemoveItem.splice(indexToRemove, 1);
    this.setState({
      itemsNotLoaded: (item.loaded) ? this.state.itemsNotLoaded : listWhereRemoveItem,
      itemsLoaded: (item.loaded) ? listWhereRemoveItem : this.state.itemsLoaded
    });
  }

  toggleItemEdition(item = {}) {
    this.setState({
      itemToEdit: item
    });
  }

  editItem(item) {
    let listWhereEdit = (item.loaded) ? this.state.itemsLoaded.slice() : this.state.itemsNotLoaded.slice();
    let itemIndexToEdit = listWhereEdit.findIndex(itemCursor => itemCursor.name === this.state.itemToEdit.name);
    listWhereEdit[itemIndexToEdit] = item;
    this.setState({
      itemsNotLoaded: (item.loaded) ? this.state.itemsNotLoaded : listWhereEdit,
      itemsLoaded: (item.loaded) ? listWhereEdit : this.state.itemsLoaded,
      itemToEdit: {},
    });
  }

  setIsOpeningAList(isOpening) {
    this.setState({
      isOpeningAList: isOpening
    });
  }

  toggleInputListName() {
    this.setState({
      inputListName: !this.state.inputListName
    });
  }

  setListName(name) {
    if (this.state.isOpeningAList) {
      console.log("abriendo lista")
    } else {
      console.log("guardando lista")
    }
    this.setState({
      listName: name
    });
  }

  toggleDeleteDialog() {
    this.setState({
      isOpenDeleteDialog: !this.state.isOpenDeleteDialog
    });
  }

  confirmDelete(confirmDelete) {
    if (confirmDelete) {
      console.log("eliminado");
    } else {
      console.log("no eliminado")
    }
    this.toggleDeleteDialog();
  }

  render() {
    const { classes } = this.props;
    let total = 0;
    for (let itemLoaded of this.state.itemsLoaded) {
      total += (itemLoaded.price * itemLoaded.quantity);
    }
    let ammountEstimated = 0;
    for (let item of this.state.itemsLoaded.concat(this.state.itemsNotLoaded)) {
      ammountEstimated += (item.price * item.quantity);
    }
    let editItem = "";
    if(Object.keys(this.state.itemToEdit).length !== 0) {
      editItem = <ModalEditItem
      item={this.state.itemToEdit}
      editItem={this.editItem}
      cancelEdition={this.toggleItemEdition}
    />
    }
    return (
      <div className={classes.container}>
        <Container className={classes.root} maxWidth={'md'}>
          <TopAppBar
            title={(this.state.listName === "") ? "Mi Lista de Compras" : this.state.listName}
            onOpen={this.toggleInputListName}
            isOpening={this.setIsOpeningAList}
            openDeleteDialog={this.toggleDeleteDialog}
          />
          <InputItem
            addItem={this.addItem}
          />
          <ListItems
            title={"Items"}
            items={this.state.itemsNotLoaded}
            loadItem={this.loadItem}
            deleteItem={this.deleteItem}
            openItemEdition={this.toggleItemEdition}
          />
          <Divider light={true} variant='middle' />
          <ListItems
            title={"Listos"}
            items={this.state.itemsLoaded}
            loadItem={this.loadItem}
            deleteItem={this.deleteItem}
            openItemEdition={this.toggleItemEdition}
          />
          {editItem}
          <DeleteDialog
            confirmDelete={this.confirmDelete}
            isOpen={this.state.isOpenDeleteDialog}
          />
          <ModalPersistance
            listName={this.state.listName}
            cancelInputListName={this.toggleInputListName}
            setListName={this.setListName}
            open={this.state.inputListName}
          />
          <BottonBar
            estimatedAmount={ammountEstimated}
            itemsLoaded={this.state.itemsLoaded.length}
            totalOfItems={this.state.itemsLoaded.length + this.state.itemsNotLoaded.length}
            total={total}
          />
        </Container>
      </div>
    );
  }
}

export default withStyles(useStyles)(App)