import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import rootCanalImage from '../assets/root-canal.jpg';

function CardExample2() {
  return (
    <Card style={{ width: '18rem', minHeight: '25rem' }}>
      <Card.Img variant="top" src={rootCanalImage} style={{ height: '180px', objectFit: 'cover' }} />
      <Card.Body>
        <Card.Title>Root Canal</Card.Title>
        <Card.Text>
          Our root canal treatment starts at 600$.
        </Card.Text>
        <Link to="/booking">
          <Button variant="primary">Book Appointment</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default CardExample2;