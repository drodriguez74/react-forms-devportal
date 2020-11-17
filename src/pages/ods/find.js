import React, { useState, useEffect } from 'react';
// import { useForm } from 'react-hook-form';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Layout from '../../components/layout';
import SEO from '../../components/seo';

import SearchForm from '../../components/molecules/forms/SearchForm';
import OdsBasicFormElements from '../../components/molecules/forms/OdsBasicFormElements';
import OdsCycleGroupElements from '../../components/molecules/forms/OdsCycleGroupElements';
import OdsRouteGroupElements from '../../components/molecules/forms/OdsRouteGroupElements';

function OdsFind() {
    // const { register, handleSubmit, errors } = useForm(); // initialise the hook
    const [ cycleMappings, updateCycleMappings ] = useState([]);
    const [ routes, updateRoutes ] = useState([]);
    const [ searchComplete, setSearchComplete ] = useState(false);
    
    useEffect(() => {
        console.log('useEffect()=>cycleMappings: ', cycleMappings);
    }, [cycleMappings]);

    const onSearch = event => {
        console.log(event);
        event.preventDefault();
        setSearchComplete(true);
    };

    const addCycleMapping = () => {
        const count = cycleMappings.length ? cycleMappings.length : 0; 
        const propsData = {
            idx: `_c_${count}`,
            removeCycleMapping
        };
        const element = <OdsCycleGroupElements {...propsData} key={count} />;
        updateCycleMappings(cycleMappings => cycleMappings.concat(element));
    };

    const removeCycleMapping = (event, idx) => {
        event.preventDefault();
        updateCycleMappings(cycleMappings.filter(item => item.key !== idx));
        
    };

    const addRoute = () => {
        const count = routes.length ? routes.length : 0;
        const propsData = {
            idx: `_r_${count}`,
            removeRoute
        };
        const element = <OdsRouteGroupElements {...propsData} key={count} />;
        updateRoutes(routes => routes.concat(element));
    };   
    
    const removeRoute = idx => {
        console.log(idx);
        delete routes[idx];
        updateRoutes( routes );
    };

    return (
        <Layout>
            <SEO title="ODS Config" />
            <div className="container">
                <h1>ODS Find</h1>
                <SearchForm onSearch={onSearch} />
                {searchComplete && 
                    <Form>
                        <OdsBasicFormElements />
                        <div id="odsCyclesContainer">
                            <h5>Legacy Cycle Mapping</h5>
                            { cycleMappings && cycleMappings.map((cycleMapping) => cycleMapping ) }
                        </div>
                        <Button variant="primary" type="button" onClick={addCycleMapping}>Add Legacy Cycle Mapping</Button>
                        
                        <div id="odsRouteContainer">
                            <h5>Routes</h5>
                            { routes && routes.map((route) => route ) }
                        </div>
                        <Button variant="primary" type="button" onClick={addRoute}>Add Routes</Button>

                        <div className="actions">
                            <Button variant="primary" type="button">Update</Button>
                            <Button variant="primary m-3" type="button">Validate</Button>
                            <Button variant="primary" type="reset">NEW SEARCH</Button>
                        </div>
                    </Form>
                }
            </div>
        </Layout>
    );
}

export default OdsFind;