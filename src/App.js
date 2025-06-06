import React, { useEffect } from 'react' //rafce from es7+ extension
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import { Ecommerce, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor, Line } from './pages'
import './App.css';

const App = () => {
  const activeMenu = true;

  return (
//to check that tailwind is working
//     <div className="bg-red-200 text-center p-4 text-xl font-bold">
//     Tailwind is working!
//     </div>

    <div>
        <BrowserRouter>
            <div className="flex relative dark:bg-main-dark-bg"> 
                <div className="fixed right-4 bottom-4 style={{ zIndex: '1000' }}">
                    <TooltipComponent content="Settings" position="Top">
                        <button type="button" className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white" style={{ background: 'blue', borderRadius: '50%' }}>
                            <FiSettings />
                        </button>
                    </TooltipComponent>
                </div>
                { activeMenu ? ( //dynamic code for the sidebar
                    <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
                        {/* Sidebar component*/}
                        <Sidebar />
                    </div>
                ) : (
                    <div className="w-0 dark:bg-secondary-dark-bg">
                        <Sidebar />
                    </div>
                )}
                <div className={
                    `dark:bg-main-bg bg-main-bg min-h-screen w-full 
                    ${activeMenu? 'md:ml-72' 
                    : 'flex-2'}` //template string for repetitive code (shared classes)
                }>
                    <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
                        <Navbar />
                    </div>
                </div>

                <div>
                    <Routes>
                        {/* dashboard */}
                        <Route path="/" element="Ecommerce" />
                        <Route path="/ecommerce" element="Ecommerce" />

{/* initially they were strings, after creating the components they were changed (e.g. from ...element="Order"/> to ...element={<Order />} />) using option button*/}
                        {/* pages */}
                        <Route path="/orders" element={<Orders />} />
                        <Route path="/employees" element={<Employees />} />
                        <Route path="/customers" element={<Customers />} />

                        {/* apps */}
                        <Route path="/kanban" element={<Kanban />} />
                        <Route path="/editor" element={<Editor />} />
                        <Route path="/calendar" element={<Calendar />} />
                        <Route path="/color-picker" element={<ColorPicker />} />

                        {/* charts */}
                        <Route path="/line" element={<Line />} />
                        <Route path="/area" element={<Area />} />
                        <Route path="/bar" element={<Bar />} />
                        <Route path="/pie" element={<Pie />} />
                        <Route path="/financial" element={<Financial />} />
                        <Route path="/color-mapping" element={<ColorMapping />} />
                        <Route path="/pyramid" element={<Pyramid />} />
                        <Route path="/stacked" element={<Stacked />} />

                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    </div>
  )
}

export default App