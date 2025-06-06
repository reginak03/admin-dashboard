//react context api allows us to keep track of the state of the navigation bar (to figure out if it should currently be opened or closed)

import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = {
    chat:false,
    chart: false,
    userProfile:false,
    notification: false,
}

export const ContextProvider = ({ children }) => { //react arrow function component
    //the states/logic of the application that the context will have
    const [activeMenu, setActiveMenu] = useState(true);
    
    return (
        //1. create the provider, 2. pass the values. setActiveMenu: we need the setter function for the menu so that we can open and close it
        <StateContext.Provider value={{ activeMenu:activeMenu, setActiveMenu, }}> {/* the most important property that the provider has is the value property, which is an object. Whatever values are passed through here, will be passed through all of the components inside the entire application. So the state (if the sidebar is currently opened or closed) is passed*/}
            {/* 3. render out the children */}
            {children} {/* always return children inside of the context (whatever you wrap the context with, whatever is inside of it will be displayed. The children component returns the underlying component below that context*/}
        </StateContext.Provider>
    )
} //react context api to allow us to keep track of the state of the navigation bar (to figure out if it should be currently opened or closed)

//how to use the activeMenu inside the sidebar/app components
export const useStateContext = () => useContext (StateContext); //a function that returns the call useContext, but we pass in which context we want to use (give me the data (useStateContext) from the context by using the context specified as an argument- StateContext)- in this app we only have one context

//now we have the wrap the app with the provider => inside index.js
