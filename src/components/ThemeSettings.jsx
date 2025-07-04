import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { BsCheck } from 'react-icons/bs';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { themeColors } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider'; //because we want to change the global state of the application when theme is chosen 

const ThemeSettings = () => {
  const { setColor, setMode, currentMode, currentColor, setThemeSettings } = useStateContext(); // to make the settings functionality work and change the color of the application

  return (
    <div className="bg-half-transparent w-screen fixed nav-item top-0 right-0">
      <div className="float-right h-screen dark:text-gray-300 bg-white dark:bg-secondary-dark-bg w-400">
        <div className="flex justify-between items-center p-4 ml-4">
          <p className="font-semibold text-xl">Settings</p>
          <button type="button" onClick={() => setThemeSettings(false)} style={{ color:"rgb(153,171,180)", borderRadius:"50%" }} className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray dark:hover:bg-secondary-dark-bg"> {/* onClick={() => setThemeSettings(false)} allows us to close the sidebar, with setThemeSettings created in ContextProvider.js, reflected inside App.js */}
            <MdOutlineCancel className="dark:hover:text-black" />
          </button>
        </div>

        <div className="flex-col border-t-1 border-color p-4 ml-4">
          <p className="font-semibold text-lg">Theme Options</p>
          {/* light theme */}
          <div className="mt-4">
            <input type="radio" id="light" name="theme" value="Light" className="cursor-pointer" onChange={setMode} checked={currentMode === 'Light'}/> {/* check is only true if the current mode is light */}
            <label htmlFor="light" className="ml-2 text-md cursor-pointer">Light</label>
          </div>  
          {/* dark theme */}
          <div className="mt-4">
            <input type="radio" id="dark" name="theme" value="Dark" className="cursor-pointer" onChange={setMode} checked={currentMode === 'Dark'}/> {/* onClick we pass an event, as opposed to setColor below */}
            <label htmlFor="dark" className="ml-2 text-md cursor-pointer">Dark</label>
          </div>
        </div>
        <div className="flex-col border-t-1 border-color p-4 ml-4">
          <p className="font-semibold text-lg">Theme Colors</p>
          <div className="flex gap-3">
            {themeColors.map((item,index) => (
              <TooltipComponent key={index} content={item.name} position="TopCenter"> {/* return tooltip component */}
                <div className="relative mt-2 cursor-pointer flex gap-5 items-center">
                  <button type="button" className="h-10 w-10 rounded-full cursor-pointer" style={{ backgroundColor: item.color }} onClick={() => setColor(item.color)}> {/* onClick we pass the actual color */}
                    <BsCheck className={`ml-2 text-2xl text-white ${item.color === currentColor ? 'block' : 'hidden'}`} />
                  </button>
                </div>
              </TooltipComponent>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThemeSettings;