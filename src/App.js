import React from 'react';
import {Provider} from 'react-redux'
import './App.css';
import store from './Components/store'
import DaysContainer from './Components/DaysContainer';

function App() {
  return (
    <Provider store = {store}>  
      <div className="App">
        <DaysContainer />
      </div>
    </Provider>
  );
}


export default App;
