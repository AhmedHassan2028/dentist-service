import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardExample() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Dental Cleaning</Card.Title>
        <Card.Text>
          Our premium dental cleaning service includes an examination and cleaning starting at 150$.
        </Card.Text>
        <Button variant="primary">Book Appointment</Button>
      </Card.Body>
    </Card>
  );
}

export default CardExample;