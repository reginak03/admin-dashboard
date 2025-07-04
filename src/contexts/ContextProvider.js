//react context api allows us to keep track of the state of the navigation bar (to figure out if it should currently be opened or closed)
import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = {
    chart: false,
    userProfile:false,
    notification: false,
}

export const ContextProvider = ({ children }) => { //react arrow function component
    //the states/logic of the application that the context will have
    const [activeMenu, setActiveMenu] = useState(true); //useStateSnippet

    //new state for the navbar
    const [isClicked, setIsClicked] = useState(initialState); //the value of the initialState object 
    
    //in mobile devices, side bar is closed by default, because it takes up the entire screen
    const [screenSize, setScreenSize] = useState(undefined); 

    //for the application settings:
    const [currentColor, setCurrentColor] = useState('#142278');
    const [currentMode, setCurrentMode] = useState('Light');
    const [themeSettings, setThemeSettings] = useState(false); //is the sidebar currently opened or closed

    //setter function for the theme of the application settings
    const setMode = (e) => { //this setter function accepts an event (e) which is the mode the user clicked on and we get its value
        setCurrentMode(e.target.value);
        localStorage.setItem('themeMode', e.target.value); //update local storage so that the same color is activated when user comes back
        setThemeSettings(false); //when a mode is chosen, settings sidebar is closed
    }

    //setter function for the color of the application settings
    const setColor = (color) => {
        setCurrentColor(color);
        localStorage.setItem('colorMode', color); 
        setThemeSettings(false);
    }

    //create property for handle click function
    const handleClick = (clicked) => {
        setIsClicked({...initialState, [clicked]: true}); //setIsClicked is an object, so we can't just override the object by only using "clicked" (a string)
    }

    return (
        //1. create the provider, 2. pass the values. setActiveMenu: we need the setter function for the menu so that we can open and close it
        <StateContext.Provider value = {{ activeMenu:activeMenu, setActiveMenu, 
                                          isClicked, setIsClicked, handleClick,
                                          screenSize, setScreenSize,
                                          currentColor, setColor,
                                          currentMode, setMode,
                                          themeSettings, setThemeSettings }}> {/* the most important property that the provider has is the value property, which is an object. Whatever values are passed through here, will be passed through all of the components inside the entire application. So the state (if the sidebar is currently opened or closed) is passed*/}
            {/* 3. render out the children */}
            {children} {/* always return children inside of the context (whatever you wrap the context with, whatever is inside of it will be displayed. The children component returns the underlying component below that context*/}
        </StateContext.Provider>
    )
} //react context api to allow us to keep track of the state of the navigation bar (to figure out if it should be currently opened or closed)

//how to use the activeMenu inside the sidebar/app components
export const useStateContext = () => useContext (StateContext); //a function that returns the call useContext, but we pass in which context we want to use (give me the data (useStateContext) from the context by using the context specified as an argument- StateContext)- in this app we only have one context

//now we have the wrap the app with the provider => inside index.js
