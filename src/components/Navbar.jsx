
import { IoMdSunny, IoMdMoon } from "react-icons/io";





import { Link } from "react-router-dom";


import NavLinks from "./NavLinks";
import { useEffect, useState } from "react";

function themeFromLocalStorage() {
  return localStorage.getItem('theme') || "winter";
}


function Navbar() {
const [theme, setTheme] = useState(themeFromLocalStorage());
 const handleTheme = () => {
const newTheme = theme == "winter" ? "dracula" : "winter";
setTheme(newTheme);
 }

 useEffect(() => {
document.documentElement.setAttribute("data-theme", theme);
localStorage.setItem('theme', theme)
 }, [theme])
  return (
    <div className="bg-base-200 mb-10">
      <div className="navbar site-container">
        <div className="navbar-start">
        <h3 className="btn btn-secondary font-bold text-2xl" to="/"> MyStore</h3>
        </div>
        <div className="navbar-center">
          <ul className="menu menu-horizontal">
            <NavLinks/>
          </ul>
        </div>
        <div className="navbar-end">
        <label className="swap swap-rotate">
  
  {/* this hidden checkbox controls the state */}
  <input onClick={handleTheme} type="checkbox" checked={theme == "dracula"} />
  
  {/* sun icon */}
  <IoMdSunny className="swap-on fill-current w-7 h-7"/>
  
  
  {/* moon icon */}
  <IoMdMoon className="swap-off fill-current w-7 h-7"/>
  
</label>
        </div>
      </div>
    </div>
  )
}

export default Navbar