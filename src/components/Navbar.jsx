import React, { useEffect } from 'react';

//all the icons needed:
import { AiOutlineMenu } from 'react-icons/ai';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';

import { TooltipComponent } from '@syncfusion/ej2-react-popups';

//dummy data:
import avatar from '../data/avatar.jpg';

//import components from this directory:
import { Notifications, UserProfile  } from '.';

import { useStateContext } from '../contexts/ContextProvider';

//create new (arrow-function react) component with instant return
//it accepts a few properties such as title, custom function, icon, ...
const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  //a button wrapped in a tooltip component
  <TooltipComponent content={title} position="BottomCenter">
    <button type="button" onClick={customFunc} style ={{ color }} className="relative text-xl rounded-full p-3 hover:bg-light-gray dark:hover:bg-secondary-dark-bg">
      <span style={{ background: dotColor }} className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2" />
      {icon}
    </button>
  </TooltipComponent>
)

const Navbar = () => {
  const { activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, screenSize, setScreenSize, currentColor } = useStateContext(); //get the activeMenu state

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth); //handleResize is an arrow function where we set the screen size to be equal to window.innerWidth
    window.addEventListener('resize', handleResize); //we track all the resize options, if it resizes then we recall the handleResize function (so everytime we resize it we will set the screen size to that specific size, i.e. window.innerWidth)
    handleResize();
  
    return () => window.removeEventListener('resize', handleResize); //in react we have to remove the event listener
  }, []); //useEffect accepts a callback function, and the second parameter is a dependency array (when this is going to be called)

  useEffect(() => {
    if(screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]); //now we keep track of the change of the screen size

  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <NavButton title="Menu" customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)} color={currentColor} icon={<AiOutlineMenu />} /> {/*customFunc is a callback function*/}

      <div className="flex">
        <NavButton title="Notifications" dotColor={currentColor} customFunc={() => handleClick('notification')} color={currentColor} icon={<RiNotification3Line />} /> 
        
        {/* for the profile */}
        <TooltipComponent content="Profile" position="BottomCenter">
          <div className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray dark:hover:bg-secondary-dark-bg rounded-lg" onClick={() => handleClick('userProfile')}>
            <img src={avatar} alt="User Profile Picture" className="rounded-full w-8 h-8" />
            <p>
              <span className="text-gray-400 text-14">Hi, </span> {' '}
              <span className="text-gray-400 font-bold ml-1 text-14">Admin</span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </TooltipComponent>

        {isClicked.notification && <Notifications />}
        {isClicked.userProfile && <UserProfile />}

      </div>
    </div>
  )
}

export default Navbar;