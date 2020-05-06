import React from 'react';
import './signin-signup.style.scss';
import Signin from '../../components/Signin/signin.component';
import Signout from '../../components/Signout/signout.component';


const SigninSignup = () => {
    return (
        <div className='signin-and-signup'>
            <Signin />
            <Signout />
        </div>
    )
}

export default SigninSignup;