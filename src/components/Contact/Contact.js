import React from 'react';
import { Form, Button } from 'react-bootstrap';

const Contact = () => {
    return (
        <div className="container">
            <div className="row  justify-content-center">
                <div className="col-md-2"></div>
                <div className="col-md-8 mt-5">
                    <Form>
                        <h2>Send Message..</h2>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
  </Button>
                    </Form>
                </div>
                <div className="col-md-2"></div>
            </div>
        </div>
    );
};

export default Contact;