import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import teethWhiteningImage from '../assets/teeth-whitening.jpg';

function CardExample3() {
  return (
    <Card style={{ width: '18rem', minHeight: '25rem' }}>
      <Card.Img variant="top" src={teethWhiteningImage} style={{ height: '180px', objectFit: 'cover' }} />
      <Card.Body>
        <Card.Title>Teeth Whitening</Card.Title>
        <Card.Text>
          Our teeth whitening service starts at 200$.
        </Card.Text>
        <Link to="/booking">
          <Button variant="primary">Book Appointment</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default CardExample3;