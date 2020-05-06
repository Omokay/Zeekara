import React, { Component } from 'react';
import './signin.style.scss';

import FormInput from '../../components/FormInput/form-input.component';
import CustomButton from '../../components/CustomButton/custom-button.component';
import { auth, signInWithGoogle } from '../../Firebase/firebase.utils';


class Signin extends Component {
    constructor(props) {
        super(props);


        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { email, password } = this.state;
        try {
            await auth.signInWithEmailAndPassword(
                email,
                password);

            this.setState({ email: '', password: '' });
        } catch (error) {
            console.log(error);
        }
        
    };

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    };


    render() {

        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email'
                        type='email'
                        handleChange={this.handleChange}
                        value={this.state.email}
                        label='Email'
                        required
                    />
                    <FormInput
                        name='password'
                        type='password'
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label='P assword'
                        required
                    />
                    <div className='buttons'>
                        <CustomButton type='submit' className='custom-button'>Sign in</CustomButton>
                        <CustomButton type='button' className='custom-button google-sign-in ' onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}


export default Signin;