import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import styled from 'styled-components';

const Border = styled.div`
    border-radius: 5px;
    padding: 1rem;
    border: solid 1px #6c757d;
    margin-bottom: 1rem;
`

const OdsRouteGroupElements = (props) => (
    <Border key={props.idx}>
        <Form.Row>
            <Form.Group as={Col} controlId={`routeCycleCode${props.idx}`}>
                <Form.Label>Cycle Code</Form.Label>
                <Form.Control />
            </Form.Group>
            <Form.Group as={Col}></Form.Group>
        </Form.Row>
        <Form.Row>
            <Form.Group as={Col} controlId={`routeJMSQueue${props.idx}`}>
                <Form.Label>JMS</Form.Label>
                <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId={`routeJDbSchema${props.idx}`}>
                <Form.Label>DB Schema</Form.Label>
                <Form.Control />
            </Form.Group>
        </Form.Row>

        <Form.Row>
            <Form.Group as={Col} controlId={`routeJReplyQueue${props.idx}`}>
                <Form.Label>Reply Queue</Form.Label>
                <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId={`primaryJMS${props.idx}`}>
                <Form.Label>Primary JMS</Form.Label>
                <Form.Control />
            </Form.Group>
        </Form.Row>

        <Form.Row>
            <Form.Group as={Col} controlId={`secondaryJMS${props.idx}`}>
                <Form.Label>Secondart JMS</Form.Label>
                <Form.Control />
            </Form.Group>
            <Form.Group as={Col} >
                <Button variant="danger form-group-offset">Remove JMS</Button>
            </Form.Group>
        </Form.Row>
        
        <Button variant="primary">Add JMS</Button>
        <div>
            <Button variant="danger mt-3" onClick={(e) => props.removeRoute(e, props.idx)}>Remove Route</Button>
        </div>
    </Border >
)

export default OdsRouteGroupElements;