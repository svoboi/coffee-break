import { Button, Form } from "react-bootstrap";

function Register({ onSetIsLogin }: { onSetIsLogin: (v: boolean) => void }) {
  return (
    <Form className="mt-4 w-50 mx-auto">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" required />
      </Form.Group>

      <Button variant="primary" type="submit">
        Register
      </Button>
      <Button
        variant="link"
        onClick={() => {
          onSetIsLogin(true);
        }}
      >
        Already have an account? Login
      </Button>
    </Form>
  );
}

export default Register;
