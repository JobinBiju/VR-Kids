import '../App.css';
import vr from '../assets/vr-1.png';

function MainContent() {
  return (
    <div className="main">
      <div className="main-text">
        <h1>
          Best <strong className='text-grad'>Educational</strong>
        </h1>
        <h1>VR Games</h1>
        <h1>For Your Kids</h1>
      </div>
      <img className="vr-img" src={vr} alt="vr-1" />
    </div>
  );
}

export default MainContent;
