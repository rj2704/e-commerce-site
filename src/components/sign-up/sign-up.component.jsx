import React from 'react';
import FormInput from '../form-input/form-input.component.jsx';
import CustomButton from '../custom-button/custom-button.component.jsx';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils.js';

import './sign-up.styles.scss';

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
        };
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if(password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, { displayName });

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: '',
            });
        } catch(error) {
            console.log(error);
        }
    };

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    };

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
      return (

          <div className='sign-up'>
            <h2 className='title'>I do not have a account</h2>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit={ this.handleSubmit }>
                <FormInput name='displayName' label='Display Name' type='text' value={displayName} onChange={this.handleChange} required />
                <FormInput name='email' label='Email' type='email' value={email} onChange={this.handleChange} required />
                
                <FormInput name='password' label='Password' type='password' value={password} onChange={this.handleChange} required />
                <FormInput name='confirmPassword' label='Confirm Password' type='password' value={confirmPassword} onChange={this.handleChange} required />
                
                <CustomButton type='submit'> SIGN UP </CustomButton>
                </form>
          </div>
      )      
    } 
}

export default SignUp;

