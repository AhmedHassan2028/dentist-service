import Form from 'react-bootstrap/Form';

function FormGroupExample() {
  return (
    <div style={{ maxWidth: '50%', margin: '0 auto' }}>
      <Form>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="text" placeholder="Full Name" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="text" placeholder="Phone Number" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Describe type of appointment</Form.Label>
        <Form.Control type="text" placeholder="Describe type of appointment" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Any other details or concerns?</Form.Label>
        <Form.Control type="text" placeholder="Any other details or concerns?" required />
      </Form.Group>
      </Form>
    </div>
  );
}

export default FormGroupExample;