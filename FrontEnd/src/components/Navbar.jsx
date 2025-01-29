import { Link } from 'react-router-dom'; 
import '../../src/css/Navbar.css'; 
import { useState } from 'react';

const Navbar = () => {
  var [dropdown,showDropdown] =useState(false);

const toggleDropdown = () =>{
  showDropdown(!dropdown);

}
  return (
    <header>
      <nav>
        <ol>
          <li><Link to="/">Home</Link></li> 
          <li><Link to="/about">About</Link></li> 
          <li><Link to="/gallery">Gallery</Link></li> 
          <li><Link to="/contact">Contact</Link></li> 
         
          <div>
          <span onMouseEnter={toggleDropdown }onMouseleave={toggleDropdown }>Hooks</span>
           {dropdown && (
            <ul>
              <li><Link to="https:/ishansingh.com.np">List1</Link></li>
              <li><Link to="">List2</Link></li>
              <li><Link to="">List3</Link></li>
              <li><Link to ='/use-memo' class ='Link'>UseMemo</Link></li>
              <li><Link to ='/use-call' class ='Link'>UseCallBack</Link></li>
              <li><Link to ='/react-lifecycle' class ='Link'>ReactLifeCycle</Link></li>
              <li><Link to ='/use-local' class ='Link'>localStorage</Link></li>
            </ul>)}
          </div>
          <li><Link to ='/use-state'>useState</Link></li>
          <li><Link to ='/use-effect' class ='Link'>useEffect</Link></li>
          <li><Link to ='/use-api' class ='Link'>UseEffectAPI</Link></li>
          <li><Link to ='/use-Ref' class ='Link'>UseRef</Link></li>
         
          


          <li><Link to="/signup">Signup</Link></li> 
         
        </ol>
      </nav>
    </header>
  );
}

export default Navbar;
