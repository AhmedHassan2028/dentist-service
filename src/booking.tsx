import Navbar from './components/navbar-others.tsx';
import Form from './components/form-book.tsx';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';
import Calendar from './components/calendar.tsx';
import './App.css'


function Booking() {
  return (
    <>
      <Navbar />
      <div className="services-title text-center mb-5">Book an Appointment</div>
      <Form />
      <Calendar />
      <div style={{ maxWidth: '17%', margin: '20px auto' }}>  
        <Link to="/confirmation">
        <Button variant="primary" size="lg" className="hero-button">
            Confirm Appointment
        </Button>
        </Link>
      </div>
      
    </>
  );
}

export default Booking;