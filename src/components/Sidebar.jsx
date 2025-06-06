import React from 'react';
import { Link, NavLink } from 'react-router-dom'; //to allow us to switch between different pages in the application
//import a few icons
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { links } from '../data/dummy';

const Sidebar = () => {
  const activeMenu = true; //state context (dummy variable until I make it dynamic)

  //define className for different link states
  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

  return (
    <div>
      <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10"> {/*h-screen = full height */}
        {activeMenu && (<> {/* render out empty react fragment */}
          <div className="flex justify-between items-center">
            <Link to="/" onClick={() => {}} className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"> {/* flex class to make the items appear in a row */}
              <SiShopware /> <span>Shoppy</span> {/* imaginary name of component */}
            </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button type="button" onClick={() => {}} className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden">
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-10"> {/* for the actual items */}
            {links.map((item) => ( //callback function for each item/link
              <div key={item.title}> {/* each link will be a div */}
                <p className="text-gray-400 m-3 mt-4 uppercase"> 
                  {item.title} {/* render out the item title */}
                </p>
                {item.links.map((link) => (
                  <NavLink to={`/${link.name}`} key={link.name} onClick={() => {}} className={({ isActive }) => isActive ? activeLink : normalLink}> {/* className is a function that accepts the isActive state of each specific item, and based on that state we render different classNames (curly braces = destructure)*/}
                    {link.icon} {/* inside the navlink we render out the link icon */}
                    <span className="capitalize">
                      {link.name}
                    </span>
                  </NavLink> //NavLink component belongs to react-router-dom
                ))}
              </div>
            ))}
          </div>
        </>)} {/* dynamic block of code */}
      </div>
    </div>
  )
}

export default Sidebar