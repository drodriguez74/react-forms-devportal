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

const OdsCycleGroupElements = (props) => (
    <Border key={props.idx}>
        <Form.Row>
            <Form.Group as={Col} controlId={`cycleCode${props.idx}`}>
                <Form.Label>Cycle Code</Form.Label>
                <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId={`requestQueue${props.idx}`}>
                <Form.Label>Request Queue</Form.Label>
                <Form.Control />
            </Form.Group>
        </Form.Row>

        <Form.Row>
            <Form.Group as={Col} controlId={`dbSchema${props.idx}`}>
                <Form.Label>DB Schema</Form.Label>
                <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId={`replyQueue${props.idx}`}>
                <Form.Label>Reply Queue</Form.Label>
                <Form.Control />
            </Form.Group>
        </Form.Row>

        <Form.Row>
            <Form.Group as={Col} controlId={`primaryJMS${props.idx}`}>
                <Form.Label>Primary JMS</Form.Label>
                <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId={`secondaryJMS${props.idx}`}>
                <Form.Label>Secondart JMS</Form.Label>
                <Form.Control />
            </Form.Group>
        </Form.Row>

        <Button variant="danger" onClick={e => props.removeCycleMapping(e, props.idx)}>Remove Legacy Cycle Mapping</Button>
    </Border >
)

export default OdsCycleGroupElements;