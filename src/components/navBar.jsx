import DarkMode from "./darkMode"
import { HiMenuAlt2 , HiMenuAlt3 } from "react-icons/hi";
import ResponsiveSideBar from "./responsiveSideBar";

import { useState } from "react";

export default function NavBar({theme , setTheme}){

    const menuItems = ["home" , "cars" , "about" , "booking"] 

    const [isOpen , setIsOpen] = useState(false)

    return(
        <>
          <div className="flex justify-between items-center px-8 py-2 shadow-lg" >
            <h1 data-aos="fade-down" className="text-3xl font-semibold">Car Rental</h1>

            <div data-aos="fade-down" className="hidden md:block">
                <ul className="flex gap-8 capitalize font-semibold text-lg" >
                    {menuItems.map((ele , ind) => (
                        <li className="cursor-pointer p-2 link-hover transition-all duration-300" key={ind} >{ele}</li>
                    ))}

                   <li className="p-2">
                        <DarkMode theme={theme} setTheme={setTheme} />
                   </li>
                </ul>
            </div>

            <div data-aos="fade-down" className="flex items-center gap-8 md:hidden">
                <DarkMode theme={theme} setTheme={setTheme} />
                {
                    isOpen ?
                    <HiMenuAlt2  className="text-3xl cursor-pointer"  onClick={()=>{setIsOpen(!isOpen)}}/>
                    :<HiMenuAlt3 className="text-3xl cursor-pointer" onClick={()=>{setIsOpen(!isOpen)}}  />
                }
            </div>

            <ResponsiveSideBar show = {isOpen} />
          </div>
        </>
    )
}