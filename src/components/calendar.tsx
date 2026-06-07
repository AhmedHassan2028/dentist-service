import Form from 'react-bootstrap/Form';

function DatePickerExample() {
  return (
    <div style={{ maxWidth: '50%', margin: '0 auto' }}>
      <Form.Group controlId="formDate">
        <Form.Label>Select Appointment Date</Form.Label>
        <Form.Control type="date"/>
      </Form.Group>
    </div>
  );
}

export default DatePickerExample;