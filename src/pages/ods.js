import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import Button from 'react-bootstrap/Button'

function Ods() {
    return (
        <Layout>
        <SEO title="ODS Config" />
        <div className="container">
            <h1>ODS Config</h1>
            <Button variant="outline-primary" onClick={()=>window.location.href='/ods/find'}>Find ODS Config</Button>
            <Button variant="outline-primary ml-3" onClick={()=>window.location.href='/ods/create'}>Create ODS Config</Button>
        </div>
        </Layout>
    );
}

export default Ods;