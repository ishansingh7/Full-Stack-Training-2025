import { Link } from 'react-router-dom'; 
import '../../src/css/Navbar.css'; 

const Navbar = () => {
  return (
    <header>
      <nav>
        <ol>
          <li><Link to="/">Home</Link></li> 
          <li><Link to="/about">About</Link></li> 
          <li><Link to="/gallery">Gallery</Link></li> 
          <li><Link to="/contact">Contact</Link></li> 
          <li><Link to="/signup">Signup</Link></li> 
        </ol>
      </nav>
    </header>
  );
}

export default Navbar;
