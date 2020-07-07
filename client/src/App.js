import React from 'react';
import './App.css';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TopAppBar from './components/TopAppBar';
import BottonBar from './components/BottonBar';


const useStyles = makeStyles({
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

function App() {
  const classes = useStyles();
  return (
    <Container maxWidth="sm" classes={{ root: classes.root}}>
      <TopAppBar title="Nueva List" />
      <BottonBar />
    </Container>
  );
}

export default App;
