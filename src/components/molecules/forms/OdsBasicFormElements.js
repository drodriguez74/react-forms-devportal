import React from 'react';

import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

const OdsBasicFormElements = () => (
    <>
        <Form.Row>
            <Form.Group as={Col} controlId="userId">
                <Form.Label>User Id</Form.Label>
                <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="org">
                <Form.Label>Org</Form.Label>
                <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="userData">
                <Form.Label>User Data</Form.Label>
                <Form.Control />
            </Form.Group>
        </Form.Row>

        <Form.Row>
            <Form.Group as={Col} controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group as={Col} controlId="groupId">
                <Form.Label>Group Identifier</Form.Label>
                <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="billingSysPrin">
                <Form.Label>Billing Sys Prin</Form.Label>
                <Form.Control />
            </Form.Group>
        </Form.Row>

        <Form.Row>
            <Form.Group as={Col} controlId="delegatedUser">
                <Form.Label>Delegated User</Form.Label>
                <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="fdelegatedPassword">
                <Form.Label>Delegated Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group as={Col} controlId="x500Id">
                <Form.Label>X500Id</Form.Label>
                <Form.Control />
            </Form.Group>
        </Form.Row>

        <Form.Row>
            <Form.Group as={Col} controlId="fmasterShellPassword">
                <Form.Label>Master Shell Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group as={Col} controlId="strategy">
                <Form.Label>Strategy</Form.Label>
                <Form.Control as="select" value="Choose..." onChange={() => 'data'}>
                    <option>Choose...</option>
                    <option>...</option>
                </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="cycleCode">
                <Form.Label>Default Cycle Code</Form.Label>
                <Form.Control />
            </Form.Group>
        </Form.Row>
    </>
)

export default OdsBasicFormElements;