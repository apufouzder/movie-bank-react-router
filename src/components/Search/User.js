import React from 'react';
import { Form, Button } from 'react-bootstrap';

const User = (props) => {
    const value = props.value;
    return (
        <div>
            <div>
                <h2>Greeting </h2>
                {
                    value ? <p>Welcome my friend</p>
                        : <p>Who the hell are you?</p>
                }
            </div>
            <div>
                <h2>Food </h2>
                {
                    value ?
                        <p>I will but Food for you</p>
                        : <p>Lets eat his his whose whose?</p>
                }
            </div>
            <div>
                <h2>Connection </h2>

                {
                    value && <Form>
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
                }

            </div>
        </div>

    );
};

export default User;