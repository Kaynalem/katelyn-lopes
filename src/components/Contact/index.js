  
import React, { useState } from 'react';
import { validateEmail } from "../../utils/helpers";

function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: ''});
    const {name, email, message} = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        setFormState({...formState, [e.target.name]: e.target.value });
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            if (!isValid) {
                setErrorMessage('Your email is invalid');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required`);
            } else {
                setErrorMessage('');
            }
        }

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <section className="section-title container">
            <h1 data-testid='h1contact'>Katelyn Lopes: <span>Contact</span></h1>
            <hr></hr>
            <form className="text-left" onSubmit={handleSubmit}>
                <div className="form-group row">
                    <label htmlFor="name" className="col-sm-2 col-form-label font-weight-bold">Name:</label>
                    <input className="col-sm-2" type="text" defaultValue={name} onBlur={handleChange} name="name" placeholder="Enter your name"/>
                </div>
                <div className="form-group row"> 
                    <label htmlFor="email" className="col-sm-2 col-form-label font-weight-bold">Email address:</label>
                    <input className="col-sm-3" type="email" name="email" defaultValue={email} onBlur={handleChange} placeholder="Enter your email address"/>
                </div>
                <div className="form-group row">
                    <label htmlFor="message" className="col-sm-2 col-form-label font-weight-bold">Message:</label>
                    <textarea className="col-sm-8"name="message" rows="5" defaultValue={message} onBlur={handleChange} placeholder="Your message here"/>
                </div>
                {errorMessage && (
                <div>
                    <p className="error-text font-weight-bold text-center">{errorMessage}</p>
                </div>
                )}
                <div className="form-group row justify-content-center">
                    <div> 
                        <button data-testid="btncontact" type="submit" className="btn btn-button font-weight-bold">Submit</button>
                    </div>
                </div>
            </form>
            </section>
        )
    }
    
    export default Contact;