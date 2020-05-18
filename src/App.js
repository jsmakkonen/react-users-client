import React, { Fragment } from 'react';
import ListUsers from './components/ListUsers';
import InputUser from './components/InputUser';
import './App.css';

function App() {
  return (
    <Fragment>
      <ListUsers />
      <InputUser />
    </Fragment>
  );
}

export default App;
