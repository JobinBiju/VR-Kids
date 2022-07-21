import '../App.css';
import reactLogo from '../assets/react.svg';

function Navbar() {
  return (
    <nav className="nav">
      {/* <img src={reactLogo} alt="VRKids" className="main-logo" /> */}
      <h1 className='main-logo'>
        <strong>VR</strong>Kids
      </h1>
      <ul className="nav-list">
        <li className="nav-item">Products</li>
        <li className="nav-item">Apps & Games</li>
        <li className="nav-item">Features</li>
        <li className="nav-item">About</li>
      </ul>
      <div>
        <h5 className="sign-up">Sign Up</h5>
      </div>
      <img className="drawer" src={reactLogo} />
    </nav>
  );
}

export default Navbar;
