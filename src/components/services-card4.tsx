import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Filling from '../assets/filling.jpg';

function CardExample4() {
  return (
    <Card style={{ width: '18rem', minHeight: '25rem' }}>
      <Card.Img variant="top" src={Filling} style={{ height: '180px', objectFit: 'cover' }} />
      <Card.Body>
        <Card.Title>Filling</Card.Title>
        <Card.Text>
          Our filling service includes an examination and filling starting at 100$.
        </Card.Text>
        <Link to="/booking">
          <Button variant="primary">Book Appointment</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default CardExample4;