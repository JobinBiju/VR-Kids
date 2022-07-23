import '../App.css';
import drawer from '../assets/hamburger.png';
import mainLogo from '../assets/main-logo.png';

function Navbar() {
  return (
    <nav className="nav">
      <img src={mainLogo} alt="VRKids" className="main-logo" />
      {/* <h1 className="main-logo">
        <strong>VR</strong>Kids
      </h1> */}
      <ul className="nav-list">
        <li className="nav-item">Products</li>
        <li className="nav-item">Apps & Games</li>
        <li className="nav-item">Features</li>
        <li className="nav-item">About</li>
      </ul>
      <div>
        <h5 className="sign-up">Sign Up</h5>
      </div>
      <img className="drawer" src={drawer} />
    </nav>
  );
}

export default Navbar;
