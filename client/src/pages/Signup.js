import React, { useState } from 'react';
import { createUser } from "../utils/api";
import Auth from '../utils/auth';

function SignUp() {
    const [userForm, setUserForm] = useState({ email: "", username: "", password: ""});

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
            const response = await createUser(userForm);
            if(response.status === 500) {
                setAlert(true);
            }
            else {
                const { token, user } = await response.json();
                console.log(user);
                Auth.login(token);
            }
        } catch (err) {
            console.error(err);
        }

        setUserForm({ email: "", username: "", password: ""});
    };

    return (
        <div className="container max-w-xs mx-auto card ">
            <form className="p-4" onSubmit={formSubmit}>
                <div className='text-xl text-center pb-4'>
                    Sign Up
                </div>
                {alert
                ?
                <div className='text-center'>
                    <p>Email or Username is already taken.</p>
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
                    <label className="block">Username</label>
                    <input 
                    className="input"
                    type="text"
                    name="username"
                    onChange={inputHandler}
                    value={userForm.username}
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
                    <button className='btn btn-outline' type='submit'>Create Account</button>
                </div>
            </form>
        </div>
    );
}

export default SignUp;