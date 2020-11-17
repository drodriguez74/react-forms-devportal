import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function OnDotAuditSearch(props) {

    const [ startDate, updateStartDate ] = useState(new Date());
    const [ endDate, updateEndDate ] = useState(new Date());

    return (
        <Form id="onDotAuditSearchForm" name="onDotAuditSearchForm">
            <Form.Row>
                <Form.Group as={Col} controlId="transactionId">
                    <Form.Control placeholder="Please enter a transaction ID" />
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} controlId="fromDate">
                    <DatePicker selected={startDate} onChange={(value) => updateStartDate(value)}/>
                </Form.Group>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} controlId="toDate">
                    <DatePicker selected={endDate} onChange={(value) => updateEndDate(value)} />
                </Form.Group>
            </Form.Row>
            <Form.Group>
                <Button variant="primary" type="submit" onClick={(e) => props.onSearch(e)}>Submit</Button>
                <Button variant="primary m-3" type="reset">Reset</Button>
            </Form.Group>
        </Form>
    )
}


export default OnDotAuditSearch;