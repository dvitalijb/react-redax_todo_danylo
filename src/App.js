import React from 'react';
import TodoHandler from './components/TodoHandler';
import './App.css';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {getNextState} from "./redux/reducers";

const store = createStore(getNextState);

function App() {
  return (
      <Provider store={store}>
        <TodoHandler/>
      </Provider>
  );
}

export default App;
