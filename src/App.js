import React from 'react';
import {Provider} from 'react-redux'
import './App.css';
import store from './Components/store'
import DaysContainer from './Components/DaysContainer';
import EventsContainer from './Components/EventsContainer';

function App() {
  return (
    <Provider store = {store}>  
      <div className="App">
        <DaysContainer />
        <EventsContainer />
      </div>
    </Provider>
  );
}


export default App;
