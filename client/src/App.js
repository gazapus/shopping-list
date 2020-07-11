import React from 'react';
import './App.css';
import { Container } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import TopAppBar from './components/TopAppBar';
import BottonBar from './components/BottonBar';
import InputItem from './components/InputItem';

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
  constructor(props){
    super(props);
          this.state = {
               itemsLoaded: [],
               itemsNotLoaded: [],
               listName: "Nueva Lista",
               accumulatedAmount: 0
          };
  }
  render() {
    const { classes } = this.props;
    return (
      <Container maxWidth="sm" className={classes.root}>
        <TopAppBar title={this.state.listName} />
        <InputItem />
        <BottonBar />
      </Container>
    );
  }
}

export default withStyles(useStyles)(App)
