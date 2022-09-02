import React, { useState } from 'react';
import { loginUser } from '../utils/api'
import Auth from '../utils/auth';

function SignIn() {
    const [userForm, setUserForm] = useState({ email: "", password: ""});

    const [alert, setAlert] = useState(false);

    const inputHandler = (event) => {
        const {name, value} = event.target;
        setUserForm({ ...userForm, [name]: value});
    };

    const formSubmit = async(event) => {
        event.preventDefault();

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        try {
            const response = await loginUser(userForm);
                        
            const { token, user } = await response.json();
            console.log(user);
            Auth.login(token);
        } catch (err) {
            console.error(err);
            setAlert(true);
        }

        setUserForm({ email: "", password: ""});
    };

    return (
        <div className="container max-w-xs mx-auto card ">
            <form className="p-4" onSubmit={formSubmit}>
                <div className='text-xl text-center pb-4'>
                    Sign In
                </div>
                {alert
                ?
                <div className='text-center'>
                    <p>Incorrect Credentials.</p>
                </div>
                :
                <></>
                }
                <div className="pb-4">
                    <label className="block">Email</label>
                    <input 
                    className="input"
                    type="email"
                    name="email"
                    onChange={inputHandler}
                    value={userForm.email}
                    required>
                    </input>
                </div>
                <div className="pb-4">
                    <label className="block">Password</label>
                    <input
                    className="input"
                    type="password"
                    name="password"
                    onChange={inputHandler}
                    value={userForm.password}
                    required>
                    </input>
                </div>
                <div className='text-center'>
                    <button className='btn' type='submit'>Sign In</button>
                </div>
            </form>
        </div>
    );
}

export default SignIn;