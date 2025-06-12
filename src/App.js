import React, { useEffect } from 'react' //rafce from es7+ extension
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import { Ecommerce, Orders, Calendar, Employees, Customers, Kanban, Area, Pie, Editor, Line } from './pages'

import { useStateContext } from './contexts/ContextProvider';

import './App.css';

const App = () => {
  const { activeMenu, themeSettings, setThemeSettings, currentColor, currentMode } = useStateContext(); //dynamic code for: const activeMenu = true; (which is a static value)

  return (
//to check that tailwind is working (using its classes)
//     <div className="bg-red-200 text-center p-4 text-xl font-bold">
//     Tailwind is working!
//     </div>

    <div className={currentMode === 'Dark' ? 'dark' : ''}> {/* className is used to be able to change the mode (light-dark)*/}
        <BrowserRouter>
            <div className="flex relative dark:bg-main-dark-bg"> 
                <div className="fixed right-4 bottom-4 style={{ zIndex: '1000' }}">
                    <TooltipComponent content="Settings" position="Top">
                        <button type="button" onClick={() => setThemeSettings(true)} className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white" style={{ background: currentColor, borderRadius: '50%' }}>
                            <FiSettings />
                        </button>
                    </TooltipComponent>
                </div>
                { activeMenu ? ( //dynamic code for the sidebar
                    <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
                        {/* Sidebar component, to go to .jsx file, hold command and click on the component*/}
                        <Sidebar />
                    </div>
                ) : (
                    <div className="w-0 dark:bg-secondary-dark-bg">
                        <Sidebar />
                    </div>
                )}
                <div className={
                    `dark:bg-main-dark-bg bg-main-bg min-h-screen w-full 
                    ${activeMenu? 'md:ml-72' : 'flex-2'}` //template string for repetitive code (shared classes)
                }>
                    <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
                        <Navbar />
                    </div>

                    <div>
                        {themeSettings && <ThemeSettings />} {/* this is where users have the possibility to choose between all the different theme options. We only show theme settings if it si currently true*/}

                        <Routes>
                            {/* dashboard */}
                            <Route path="/" element={<Ecommerce />} />
                            <Route path="/ecommerce" element={<Ecommerce />} />

                            {/* initially they were strings, after creating the components they were changed (e.g. from ...element="Order"/> to ...element={<Order />} />) using option button*/}
                            {/* pages */}
                            <Route path="/orders" element={<Orders />} />
                            <Route path="/employees" element={<Employees />} />
                            <Route path="/customers" element={<Customers />} />

                            {/* apps */}
                            <Route path="/kanban" element={<Kanban />} />
                            <Route path="/editor" element={<Editor />} />
                            <Route path="/calendar" element={<Calendar />} />
                            {/* <Route path="/color-picker" element={<ColorPicker />} /> */}

                            {/* charts */}
                            <Route path="/line" element={<Line />} />
                            <Route path="/area" element={<Area />} />
                            <Route path="/pie" element={<Pie />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    </div>
  )
}

export default App;