import React from 'react';
import { useForm } from 'react-hook-form';

import SEO from '../components/seo';

import '../css/login.css';

function Login() {
    const { register, handleSubmit, errors } = useForm(); // initialise the hook
    const onSubmit = data => {
        console.log(data);
        window.location.href='/home';
    };
    document.body.classList.add("login");
    return (
        <>
        <SEO title="fiserv. Admin.Login" />
        <div className="container login">
	        <div className="d-flex justify-content-center v-center-calc">
                <div className="card">
                    <div className="card-header">
                        <h3><span className="fiserv-orange"> fiserv.</span>Admin.</h3>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                                <label htmlFor="username">User Name</label>
                                <input name="username" className="form-control" placeholder="username" ref={register({ required: true })} /> {/* register an input */}
                                <div className="error">{errors.username && 'Username is required.'}</div>
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input name="password" type="password" className="form-control" placeholder="password" ref={register({ required: true })} />
                                <div className="error">{errors.password && 'Password is required.'}</div>
                            </div>
                            <div className="form-group">
                                <input type="submit" className="btn btn-primary" />
                            </div>
                        </form>
                        <div>&nbsp;</div>
                        <div>&nbsp;</div>
                    </div>
                    <div className="card-footer fiserv-footer">
                        &copy; <span id="currentYear">{new Date().getFullYear()}</span> <span className="fiserv-orange"> fiserv.</span>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Login;