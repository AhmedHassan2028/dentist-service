import Navbar from './components/navbar-others.tsx';
import './App.css'
import './confirmation.css'
// import { Check } from 'lucide-react';
// import Homebutton from './components/back-home-button.tsx';
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';
{/* <Check color="#4bb027" /> */}

function Confirmation() {
  return (
    <>
      <Navbar />
      <div className="confirmation-container">
        <div className="confirmation-content">
          <h1>Thank you for booking an appointment with us!</h1>
          <p>You will receive a confirmation email shortly.
            <p>We look forward to seeing you soon!</p>
          </p>
          
        </div>
      </div>
      
      <div style={{ maxWidth: '17%', margin: '-120px auto 20px' }}>  
        <Link to="/">
        <Button variant="primary" size="lg" className="hero-button">
            Return to Home
        </Button>
        </Link>
      </div>
    </>
  );
}

export default Confirmation;