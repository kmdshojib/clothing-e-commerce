import React, { useState } from 'react';
import {connect} from 'react-redux';

import FormInput from '../forminput/form-input';
import Button from '../custom-button/button';
import {SignUpContainer,SignUpTitle} from './sign-up.styles'

import {signUpStart } from '../../../redux/user/user.action'


const  SignUp = ({signUpStart}) => {
    const [userCredentials,setCredentials] = useState({
        displayName:'',
        email: '',
        password: '',
        confirmPassword: '',
})
   

    const handleSubmit = async event => {
        event.preventDefault();


        const {displayName, email, password, confirmPassword} = userCredentials

        if(password !== confirmPassword){
            alert("Password do not match")
            return
        }

        signUpStart({displayName, email, password})
    }
    const handleChange = event =>{
            const{name,value} = event.target

            setCredentials({...userCredentials,[name]:value})
    }

   
        const { email, password, confirmPassword, displayName} = userCredentials
        return ( 
            <SignUpContainer>
                <SignUpTitle>Don't have an account?</SignUpTitle>
                <span>Sign Up with Your email and password</span>

                <form onSubmit={handleSubmit} className="sign-up-form">
                    <FormInput
                        type="text"
                        name="displayName"
                        value={displayName}
                        handleChange={handleChange}
                        label = "Display Name" required/>

                    <FormInput 
                        type="email"
                        name="email"
                        value={email}
                        handleChange={handleChange}
                        autoComplete="username"
                        label = "Email"  required/>
                    <FormInput
                        type="password"
                        name="password"
                        value={password}
                        handleChange={handleChange}
                        autoComplete="new-password"
                        label = "Password" required/>
                    <FormInput
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        handleChange={handleChange}
                        autoComplete="new-password"
                        label = "Confirm Password" required/>

                    <Button type="submit">Sign Up</Button>
                </form>
            </SignUpContainer>
         );
    }
 
const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp);
