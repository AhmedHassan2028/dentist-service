import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Calendar from './calendar.tsx';

function FormGroupExample() {
//The checking if the form has content was done with github copilot to help, before I could confirm the appointment without anything in the form. The help here is from line 7 to 27
  const formRef = useRef<HTMLFormElement>(null);
  const navigate = useNavigate();
  const [isValid, setIsValid] = useState(false);

  const handleChange = () => {
    if (formRef.current) {
      const formElements = formRef.current.elements;
      const allFilled = Array.from(formElements).every((field) => {
        const inputField = field as HTMLInputElement;
        return inputField.type === 'submit' || inputField.value.trim() !== '';
      });
      setIsValid(allFilled);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isValid) {
      navigate('/confirmation');
    }
  };

  return (
    <div style={{ maxWidth: '50%', margin: '0 auto' }}>
      <Form ref={formRef} onSubmit={handleSubmit} onChange={handleChange}>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="text" placeholder="Enter email" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupFullName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" placeholder="Full Name" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPhone">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="text" placeholder="Phone Number" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupAppointmentType">
          <Form.Label>Describe type of appointment</Form.Label>
          <Form.Control type="text" placeholder="Ex: Cleaning, Filling, Whitening..." required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupDetails">
          <Form.Label>Any other details or concerns?</Form.Label>
          <Form.Control type="text" placeholder="Any other details or concerns?" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupAppointmentTime">
          <Form.Label>Ideal Time for Appointment</Form.Label>
          <Form.Control type="text" placeholder="Ideal Time for Appointment" required />
        </Form.Group>
        <Calendar />
        <Button 
          variant="primary" 
          type="submit"
          disabled={!isValid}
          style={{ width: '100%', marginTop: '40px' }}
        >
          Confirm Appointment
        </Button>
      </Form>
    </div>
  );
}

export default FormGroupExample;