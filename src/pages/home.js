import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';


function Home() {
    return (
        <Layout>
            <SEO title="Welcome fiserv. Admin." />
            <div className="container">
                <h1>Welcome to <span className="fiserv-orange">Portal.</span> Admin.</h1>
                <p>Don't see the applications you are looking for? Please contact us to gain access to a specific application.</p>
            </div>
        </Layout>
    );
}

export default Home;