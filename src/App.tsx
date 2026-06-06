import './App.css'
import ColorSchemesExample from './components/navbar';
import HeroBanner from './components/hero-banner';
import FigureExample from './components/about-us';
import aboutus from './assets/about-us.jpg';

function App() {

  return (
    <>
      <ColorSchemesExample />
      <HeroBanner />
      <div className="side-by-side-container">
        <div className="about-section">
          <FigureExample />
        </div>
        <div className="image-section">
          <img src={aboutus} className="about-image" />
        </div>
      </div>
      <div className="services-title text-center mb-5" >Our Services</div>
    </>
  )
}

export default App
