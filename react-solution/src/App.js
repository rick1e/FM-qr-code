import qrCode from './assets/image-qr-code.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="mainCard">
        <img src={qrCode} className="qr-image" alt="QR Code" />
        <span className="title">
          Improve your front-end skills by building projects
        </span>
        <span className="body">
          Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
        </span>

      </div>

      <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>.
        Coded by <a href="https://github.com/rick1e/">Rick1e</a>.
      </div>
    </div>
  );
}

export default App;
