import '../App.css';
import vr from '../assets/vr-1.png';

function MainContent() {
  return (
    <div className="main">
      <div className="main-text">
        <h1>
          Best <strong className="text-grad">Educational</strong>
        </h1>
        <h1>VR Games</h1>
        <h1>For Your Kids</h1>
        <div className="main-btns">
          <h6 className="btn-1">Explore Now</h6>
          <h6 className="btn-2">Browse Store</h6>
        </div>
      </div>
      <img className="vr-img" src={vr} alt="vr-1" />
    </div>
  );
}

export default MainContent;
