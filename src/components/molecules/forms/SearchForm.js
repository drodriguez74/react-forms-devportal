import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const SearchForm = (props) => (
    <Form id="searchForm" name="searchForm">
        <Form.Row>
            <Form.Group as={Col} controlId="formGridUserId">
                <Form.Control placeholder="Client ID or X500id" />
            </Form.Group>
            <Form.Group>
                <Button variant="primary" type="submit" onClick={(e) => props.onSearch(e)}>Submit</Button>
            </Form.Group>
        </Form.Row>
    </Form>
)

export default SearchForm;