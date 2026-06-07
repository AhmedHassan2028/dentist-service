import './App.css'
import ColorSchemesExample from './components/navbar';
import HeroBanner from './components/hero-banner';
import FigureExample from './components/about-us';
import aboutus from './assets/about-us.jpg';
import CardExample1 from './components/services-card1';
import CardExample2 from './components/services-card2';
import CardExample3 from './components/services-card3';
import CardExample4 from './components/services-card4';

function App() {

  return (
    <>
      <ColorSchemesExample />
      <HeroBanner />
      <div id="about" className="side-by-side-container">
        <div className="about-section">
          <FigureExample />
        </div>
        <div className="image-section">
          <img src={aboutus} className="about-image" />
        </div>
      </div>
      <div>
        <div id="services" className="services-title text-center mb-5" >Our Services</div>
        <div className="services-container">
          <CardExample1 />
          <CardExample2 />
          <CardExample3 />
          <CardExample4 />
        </div>
      </div>
      <div id="contact" className="services-title text-center mb-5" >Got Questions? Contact Us!</div>
      <div className="contact-container">
        <div className="contact-info text-2xl text-center mb-5">
          <p><strong>Phone:</strong> (613) 111-1111</p>
          <p><strong>Email:</strong> ahmedhass0609@gmail.com</p>
        </div>
      </div>
    </>
  )
}

export default App
