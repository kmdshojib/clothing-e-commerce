import React,{useState} from 'react';
import { connect } from 'react-redux';

import {SignInContainer,SignInTitle,ButtonsBarContainer} from './sign-in.styles'

import FormInput from '../forminput/form-input';
import Button from '../custom-button/button'


import {googleSignInStart, emailSignInStart} from '../../../redux/user/user.action'

const SignIn = ({emailSignInStart,googleSignInStart}) => {
    const [userCredentials, setCredentials] = useState({email:'', password:''})
    
    const handleSubmit = async event =>{
        event.preventDefault();

        const {email,password} = userCredentials;

        emailSignInStart(email, password)
    }
    
    const handleChange = event => {
        const {value,name} = event.target;

        setCredentials({...userCredentials, [name]:value});
    }
    const {email, password} = userCredentials;
        return ( 
            <SignInContainer>
                <SignInTitle>Alredy have an account</SignInTitle>
                <span>Sign in with your email</span>

                <form onSubmit={handleSubmit}>
                    <FormInput 
                    type="email" name="email" 
                    value={email} 
                    handleChange={handleChange} 
                    label="Email" 
                    autoComplete="username"
                    required/>
                   

                    <FormInput 
                    type="password" 
                    name="password" 
                    handleChange={handleChange}
                    value={password} 
                    label="Password" 
                    autoComplete="new-password"
                    required />
                   

                   <ButtonsBarContainer>
                        <Button type="submit" value="Submit Form">Sign In</Button>
                        <Button type="button" onClick={googleSignInStart} isGoogleSignedIn>{''}Sign In with Google{''}</Button>
                       
                   </ButtonsBarContainer>
                </form>
            </SignInContainer>
         );
    }

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch (googleSignInStart()),
    emailSignInStart: (email, password) => dispatch ( emailSignInStart({email, password}))
})
 
export default connect(null, mapDispatchToProps)(SignIn);