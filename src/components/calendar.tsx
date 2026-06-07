import Form from 'react-bootstrap/Form';

function DatePickerExample() {
  return (
    <div>
      <Form.Group controlId="formDate">
        <Form.Label>Select Appointment Date</Form.Label>
        <Form.Control type="date"/>
      </Form.Group>
    </div>
  );
}

export default DatePickerExample;