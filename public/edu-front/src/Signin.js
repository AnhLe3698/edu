import React, { useState } from 'react';

const Signin = () => {
    const [values, setValues] = useState({email: '', password: ''});

    const handleInputChange = (event) => {
        setValues({...values, [event.target.name]: event.target.value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form data: ', values);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Email:
                <input type="email" name="email" onChange={handleInputChange} />
            </label>
            <label>
                Password:
                <input type="password" name="password" onChange={handleInputChange} />
            </label>
            <input type="submit" value="Sign In" />
        </form>
    );
};

export default Signin;
