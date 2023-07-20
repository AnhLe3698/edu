import React, { useState } from 'react';

const Signup = () => {
    const [values, setValues] = useState({username: '', email: '', password: ''});

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
                Username:
                <input type="text" name="username" onChange={handleInputChange} />
            </label>
            <label>
                Email:
                <input type="email" name="email" onChange={handleInputChange} />
            </label>
            <label>
                Password:
                <input type="password" name="password" onChange={handleInputChange} />
            </label>
            <input type="submit" value="Sign Up" />
        </form>
    );
};

export default Signup;
