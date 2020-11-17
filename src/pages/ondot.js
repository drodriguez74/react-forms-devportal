import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import OnDotAuditSearch from '../components/molecules/forms/OnDotAuditSearch';

function OnDot() {
    return (
        <Layout>
            <SEO title="Ondot Audit" />
            <div className="container">
                <h1>Ondot Audit</h1>
                <OnDotAuditSearch />
            </div>
        </Layout>
    );
}

export default OnDot;