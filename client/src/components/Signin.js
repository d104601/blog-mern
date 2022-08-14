import React, { useState } from 'react';

function SignIn() {
    return (
        <div className="container max-w-xs mx-auto card ">
            <form className="p-4">
                <div className='text-xl text-center pb-4'>
                    Sign In
                </div>
                <div className="pb-4">
                    <label className="block">Email</label>
                    <input className="input" type="email"></input>
                </div>
                <div className="pb-4">
                    <label className="block">Password</label>
                    <input className="input" type="password"></input>
                </div>
                <div className='text-center'>
                    <button className='btn' type='submit'>Sign In</button>
                </div>
            </form>
        </div>
    );
}

export default SignIn;