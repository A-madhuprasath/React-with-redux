import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {legacy_createStore as createStore} from 'redux'
import counter from "./redux/reducers/counter";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));

//ACTIONS

const store = createStore(counter)
console.log(store.getState());
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App/>
    </React.StrictMode>
  </Provider>
);

reportWebVitals();
