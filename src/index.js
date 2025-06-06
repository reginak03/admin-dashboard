import React from "react";
import ReactDOM from "react-dom"; //hook react application to the real dom

import './index.css';
import App from './App';
import { ContextProvider } from './contexts/ContextProvider'; //to wrap the app with the context provider



ReactDOM.render(
    <ContextProvider> <App /> </ContextProvider>, document.getElementById('root')); //hook react application to the root div, adn wrap application with the context provider

    //now inside the app (App.js) we can use all of these values (import { useStateContext } from './contexts/ContextProvider';)