import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import dentalCleaningImage from '../assets/dental-cleaning.jpg';

function CardExample1() {
  return (
    <Card style={{ width: '18rem', minHeight: '25rem' }}>
      <Card.Img variant="top" src={dentalCleaningImage} style={{ height: '180px', objectFit: 'cover' }} />
      <Card.Body>
        <Card.Title>Dental Cleaning</Card.Title>
        <Card.Text>
          Our premium dental cleaning service includes an examination and cleaning starting at 150$.
        </Card.Text>
        <Link to="/booking">
          <Button variant="primary">Book Appointment</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default CardExample1;