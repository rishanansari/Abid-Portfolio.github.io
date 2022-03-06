import React from 'react'
import logo from "../images/ablogo.png"
import { NavLink } from "react-router-dom";
import { FcHome,FcAbout,FcGraduationCap,FcWorkflow,FcTodoList,FcContacts} from 'react-icons/fc';




const Navbar = () => {
  return (
    <>
    <div className="navbar">
    <div className='logo'>
    <img src={logo} alt="logo" style={{width: "100px" , height: "50px"}}/>
    </div>
    
      <NavLink style={({ isActive }) => ({ color: isActive ? 'black' : 'darkgrey'})} className="navbar-item"  to="/">
       <div className='span'><span className='nav_icon'><FcHome/></span> Home</div> 
      </NavLink>
      <NavLink style={({ isActive }) => ({ color: isActive ? 'black' : 'darkgrey' })} className="navbar-item"  to="/about">
      <div className='span'><span className='nav_icon'><FcAbout/></span> About</div> 
      </NavLink>
      <NavLink style={({ isActive }) => ({ color: isActive ? 'black' : 'darkgrey' })} className="navbar-item"  to="/education">
      <div className='span'><span className='nav_icon'><FcGraduationCap/></span> Education</div>
      </NavLink>
      <NavLink style={({ isActive }) => ({ color: isActive ? 'black' : 'darkgrey' })} className="navbar-item"  to="/work">
      <div className='span'><span className='nav_icon'><FcWorkflow/></span> Work Experinece</div>
      </NavLink>
      <NavLink style={({ isActive }) => ({ color: isActive ? 'black' : 'darkgrey' })} className="navbar-item"  to="/projects">
      <div className='span'><span className='nav_icon'><FcTodoList/></span> Projects</div> 
      </NavLink>
      <NavLink style={({ isActive }) => ({ color: isActive ? 'black' : 'darkgrey' })} className="navbar-item" to="/contact">
      <div className='span'><span className='nav_icon'><FcContacts/></span> Contact</div>
      </NavLink>
      </div>

    </>
  )
}

export default Navbar;