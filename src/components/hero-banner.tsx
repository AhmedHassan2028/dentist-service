import './hero-banner.css';
import { Button } from 'react-bootstrap';
// import brightsmileLogo from '../assets/BrightSmile Logo.png';
import DentistBackground from '../assets/DentistBackground.jpg';
import { Link } from 'react-router-dom';

function HeroBanner() {
  return (
    <div className="hero-banner">
      <img 
        src={DentistBackground} 
        alt="BrightSmile Dental Clinic" 
        className="hero-image"
      />
      <div className="hero-overlay">
        <h1 className="hero-title">Welcome to BrightSmile Dental Clinic</h1>
        <Link to="/booking" style={{ textDecoration: 'none' }}>
          <Button variant="primary" size="lg" className="hero-button">
            Book Appointment
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default HeroBanner;
